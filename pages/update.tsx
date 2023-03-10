import { useRouter } from "next/router";
import { useState } from "react";

const clientId = "<your-client-id>";

interface GoogleLoginResponse {
  accessToken: string;
}

const Upload = () => {
  const [image, setImage] = useState<File>();
  const [url, setUrl] = useState<string>();
  const router = useRouter();

  const onSuccess = async (res: any) => {
    const accessToken = "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";
    if (image) {
      // Create an album
      let response = await fetch(
        "https://photoslibrary.googleapis.com/v1/albums",
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          }),
          body: JSON.stringify({ album: { title: "Web Mockups" } }),
        }
      );
      let data = await response.json();
      let albumId = data.id;

      // Upload the image
      response = await fetch(
        "https://photoslibrary.googleapis.com/v1/uploads",
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/octet-stream",
            "X-Goog-Upload-Content-Type": image.type,
            "X-Goog-Upload-Protocol": "raw",
            "X-Goog-Upload-File-Name": image.name,
          }),
          body: image,
        }
      );
      data = await response.text();

      // Create a media item
      response = await fetch(
        "https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate",
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          }),
          body: JSON.stringify({
            newMediaItems: [
              {
                description: "",
                simpleMediaItem: {
                  fileName: image.name,
                  uploadToken: data,
                },
              },
            ],
            albumId,
          }),
        }
      );
      data = await response.json();

      // Get the base URL
      let baseUrl = data.newMediaItemResults[0].mediaItem.baseUrl;
      setUrl(baseUrl);
    }
  };

  const onFailure = (res: any) => {
    console.log(res);
  };

  return (
    <>
      <input type="file" onChange={(e) => setImage(e?.target?.files![0])} />
      <button onClick={onSuccess}>Upload</button>
      {url && <p>{url}</p>}
    </>
  );
};

export default Upload;

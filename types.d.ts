import type { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      id: string;
    };
    userId: string;
    passwordFlag: "NO_PASSWORD" | "MASTER_PASSWORD_SET";
    stripeId: string;
    userType: "CORE" | "PRO" | "PRO PLUS";
  }
}

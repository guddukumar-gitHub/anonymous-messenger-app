import NextAuth from "next-auth";
import { authOptions } from "@/app/api/sign-up/auth/[...nextauth]/options";

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import { z } from "zod";
import { usernameSchemaValidation } from "@/schemas/signUpSchema";

const usernameCheckSchema = z.object({
  username: usernameSchemaValidation,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    const parsed = usernameCheckSchema.safeParse({ username });

    if (!parsed.success) {
      const usernameErrors = parsed.error.format().username?._errors || [];
      return Response.json(
        { success: false, message: "Invalid username", errors: usernameErrors },
        { status: 400 }
      );
    }
    console.log("Checking username:", username);

    const existingUser = await UserModel.findOne({
      username: username,
      isVerified: true,
    });
    if (existingUser) {
      return Response.json(
        { success: false, message: "Username is already taken" },
        { status: 200 }
      );
    }
    return Response.json(
      { success: true, message: "Username is available" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking username uniqueness:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

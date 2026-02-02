import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

export function getOrCreateUserId() {
  const cookieStore = cookies();
  let userId = cookieStore.get("userId")?.value;

  if (!userId) {
    userId = uuid();
    cookieStore.set("userId", userId, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return userId;
}

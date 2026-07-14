// app/profile/page.tsx
// ------------------------------------------------------------------
// This stays a SERVER component (no "use client" here) — same pattern
// as app/post/page.tsx. We check the session on the SERVER before
// anything renders, so a logged-out user never even briefly sees
// the profile UI flash before being redirected. That's the whole
// reason we don't do this check inside a useEffect on the client.
// ------------------------------------------------------------------
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileClient from "./ProfileClient";

export default async function Profile() {
  const session = await auth();

  // Route protection: no session = kick back to sign in.
  // Compare with app/signin/page.tsx which does the OPPOSITE check
  // (redirects AWAY from signin if a session already exists).
  if (!session) {
    redirect("/signin");
  }

  // We pass the session down as a prop instead of re-fetching it
  // client-side — the server already has it, no need to ask twice.
  return (
    <main>
      <ProfileClient session={session} />
    </main>
  );
}
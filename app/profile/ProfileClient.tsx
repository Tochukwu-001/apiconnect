// app/profile/ProfileClient.tsx
"use client";
// ------------------------------------------------------------------
// WHY THIS NEEDS TO BE A SEPARATE CLIENT COMPONENT:
// signOut() from next-auth/react only works in the browser (it's an
// event handler triggered by a click). Server Components can't have
// onClick handlers at all. So the pattern is: page.tsx (server) does
// the secure auth CHECK, then hands off to this component for any
// on-screen INTERACTION. Same split as post/page.tsx -> post/post.tsx.
// ------------------------------------------------------------------

import { Theme } from "@/components/Theme";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";

interface ProfileClientProps {
  session: Session;
}

export default function ProfileClient({ session }: ProfileClientProps) {
  const user = session.user;

  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-200 max-md:p-4 p-8 flex items-center justify-center relative overflow-hidden">
      {/* Same background glow treatment as the other auth-adjacent pages */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-5"
        style={{ backgroundColor: Theme.lightGreen }}
      ></div>

      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-md p-8 relative z-10 shadow-2xl text-center space-y-6">
        {/*
          user?.image / user?.name / user?.email come straight from
          the Google OAuth profile via next-auth. Optional chaining
          (?.) matters here because TypeScript can't guarantee these
          fields exist depending on your auth.ts callbacks config.
        */}
        <img
          src={user?.image  "/logo.png"}
          alt={user?.name  "User avatar"}
          className="w-20 h-20 rounded-full mx-auto border border-neutral-700 object-cover"
        />

        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-white">
            {user?.name || "Developer"}
          </h1>
          <p className="text-sm font-light text-neutral-500">{user?.email}</p>
        </div>

        <div className="pt-4 border-t border-neutral-800 space-y-3">
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Account
          </p>
          {/*
            This is where you'd add real profile fields later —
            things like "APIs published", "member since", etc.
            Good discussion point: those would come from a Firestore
            query filtered by uid == session.user.id, same idea as
            the fetch you just built in view/page.tsx but with a
            where("uid", "==", user.id) clause instead of grabbing everything.
          */}
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full text-white py-2.5 px-4 rounded-sm font-medium text-sm border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
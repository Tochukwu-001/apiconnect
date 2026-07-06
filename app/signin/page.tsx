import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoArrowRight, GoLock, GoMail } from "react-icons/go";
import { Theme } from "@/components/Theme";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {

  const session = await auth()
  console.log(session);
  
  if(session){
    redirect("/post")
  }
  
  return (
    <main className="min-h-dvh bg-neutral-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background radial accent glow to match the landing page theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-10"
        style={{ backgroundColor: Theme.lightGreen }}
      ></div>

      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-md p-8 relative z-10 shadow-2xl">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8 bg-stone-100 py-6 space-y-2">
          <Link href="/" className="flex items-center gap-0.5 text-black">
            <Image
              src="/logo.png"
              alt="API Connect logo"
              width={100}
              height={100}
              className="w-8 h-8"
            />
            <span className="text-xl font-light">Connect</span>
          </Link>
          <h1 className="text-xl font-semibold text-black">Welcome back</h1>
          <p className="text-sm font-light text-neutral-800 mt-1">
            Access your developer endpoints dashboard
          </p>
        </div>

        {/* OAuth Button */}
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-neutral-950 hover:bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700 text-white font-light text-sm py-2.5 px-4 rounded-sm transition-colors group mb-6"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
        </form>

        {/* Separator Divider */}
        <div className="flex items-center my-5 text-xs text-neutral-500 uppercase tracking-wider before:content-[''] before:flex-1 before:border-b before:border-neutral-800 before:mr-3 after:content-[''] after:flex-1 after:border-b after:border-neutral-800 after:ml-3">
          or use credentials
        </div>

        {/* Credentials Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                <GoMail className="text-lg" />
              </span>
              <input
                type="email"
                required
                placeholder="developer@api-connect.com"
                className="w-full bg-neutral-950 text-white placeholder-neutral-600 border border-neutral-800 focus:border-neutral-600 outline-none rounded-sm py-2 pl-10 pr-4 text-sm transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs hover:underline"
                style={{ color: Theme.lightGreen }}
              >
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                <GoLock className="text-lg" />
              </span>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-neutral-950 text-white placeholder-neutral-600 border border-neutral-800 focus:border-neutral-600 outline-none rounded-sm py-2 pl-10 pr-4 text-sm transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: Theme.darkGreen }}
            className="w-full text-white py-2.5 px-4 rounded-sm font-medium text-sm transition-transform hover:scale-[1.01] flex items-center justify-center gap-1 group mt-6"
          >
            Sign In
            <GoArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </form>

        {/* Footer Navigation */}
        <div className="text-center mt-6 text-sm font-light text-neutral-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="hover:underline font-normal"
            style={{ color: Theme.lightGreen }}
          >
            Create one
          </Link>
        </div>
      </div>
    </main>
  );
}

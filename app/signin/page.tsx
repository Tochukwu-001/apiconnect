import { auth, signIn } from "@/auth"
import Link from "next/link";
import Image from "next/image";
import { Theme } from "@/components/Theme";
import { FiArrowRight, FiLock, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc"; 
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth()
  console.log(session);
  if(session){
    redirect("/post")
  }

  return (
    <main className="min-h-dvh bg-[#0B0F17] flex items-center justify-center p-4 selection:bg-emerald-500/30">
      {/* Container Card */}
      <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-md shadow-2xl space-y-6">

        {/* Header/Logo Section */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 text-white">
            <Image
              src="/logo.png"
              alt="API Connect logo"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="text-lg font-light tracking-wide">
              API <span style={{ color: Theme.lightGreen }}>Connect</span>
            </span>
          </Link>
          <h2 className="text-xl font-semibold text-white pt-2">Welcome back</h2>
          <p className="text-xs text-gray-500">
            Enter your credentials to access your API keys and endpoints
          </p>
        </div>

        {/* OAuth Buttons Group */}
        <div className="space-y-3">
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/post" });
            }}
          >
            <button type="submit"
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium py-2.5 px-4 rounded-sm transition duration-200 shadow-md"
            >
              <FcGoogle size={20} />
              <span>Sign in with Google</span>
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-white/5"></div>
          <span className="px-3 text-[11px] text-gray-600 font-mono uppercase tracking-widest">or continue with</span>
          <div className="flex-grow border-t border-white/5"></div>
        </div>

        {/* Credentials Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-gray-400 font-mono" htmlFor="email">
              EMAIL_ADDRESS
            </label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-3 text-gray-600" size={16} />
              <input
                id="email"
                type="email"
                required
                placeholder="name@domain.com"
                className="w-full bg-black/40 border border-white/10 rounded-sm py-2 pl-10 pr-4 text-sm text-white placeholder-gray-700 outline-none focus:border-white/20 transition"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-medium text-gray-400 font-mono" htmlFor="password">
                ACCESS_SECRET
              </label>
              <a href="#" className="text-[11px] hover:underline" style={{ color: Theme.lightGreen }}>
                Forgot secret?
              </a>
            </div>
            <div className="relative flex items-center">
              <FiLock className="absolute left-3 text-gray-600" size={16} />
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-black/40 border border-white/10 rounded-sm py-2 pl-10 pr-4 text-sm text-white placeholder-gray-700 outline-none focus:border-white/20 transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ backgroundColor: Theme.darkGreen }}
            className="w-full mt-2 text-white text-sm font-medium py-2.5 px-4 rounded-sm hover:opacity-95 transition flex items-center justify-center gap-1.5 group"
          >
            Authenticate
            <FiArrowRight className="group-hover:translate-x-0.5 transition duration-200" />
          </button>
        </form>

        {/* Signup redirection block */}
        <div className="text-center text-xs text-gray-500 pt-2 font-light">
          New to the platform?{" "}
          <Link href="/signup" className="hover:underline font-medium" style={{ color: Theme.lightGreen }}>
            Create a developer identity
          </Link>
        </div>

      </div>
    </main>
  );
}


import Link from "next/link";
import { Theme } from "@/components/Theme";

export default function SignInPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle native credential validation logic here
  };

  const handleGoogleSignIn = () => {
    // Trigger your Google OAuth provider action here (e.g., NextAuth, Firebase, or Supabase)
  };

  return (
    <main 
      className="min-h-screen w-full flex items-center justify-center relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/bg.mp4' ? '' : '/your-library-image.jpg')" }} // Reuses your background style layer
    >
      {/* Deep Darkening Overlay across background split panels */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Glassmorphic Container Box */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-2xl bg-[#000]/60 backdrop-blur-md border border-gray-800 shadow-2xl text-white flex flex-col items-center">
        
        {/* Branding Logo Indicator */}
        <div className="flex flex-col items-center gap-1.5 mb-6">
          <div className="text-2xl font-bold tracking-wide" style={{ color: Theme.lightGreen }}>
            &lt;&gt;
          </div>
          <span className="text-lg font-semibold tracking-wider font-mono">
            APIConnect
          </span>
        </div>

        {/* Title Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-tight">
          Sign in to APIConnect
        </h1>

        {/* 1. GOOGLE AUTHENTICATION BUTTON */}
        <button
          
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-md transition-colors duration-200 text-sm shadow-sm mb-6"
        >
          {/* Integrated inline Google Icon Vector */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.642 1.052 14.974 0 12 0 7.354 0 3.319 2.658 1.31 6.533l3.956 3.232z"
            />
            <path
              fill="#4285F4"
              d="M23.755 12.218c0-.79-.07-1.554-.2-2.29H12v4.346h6.6c-.285 1.505-1.132 2.78-2.405 3.633l3.755 2.91c2.195-2.022 3.805-5.004 3.805-8.6z"
            />
            <path
              fill="#FBBC05"
              d="M5.266 14.235A7.077 7.077 0 014.909 12c0-.79.13-1.554.357-2.265L1.31 6.503A11.91 11.91 0 000 12c0 2.01.5 3.905 1.373 5.582l3.893-3.347z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.956-1.077 7.945-2.91l-3.755-2.91c-1.04.695-2.373 1.11-4.19 1.11-3.31 0-6.114-2.237-7.114-5.245L1.004 17.39A11.926 11.926 0 0012 24z"
            />
          </svg>
          Sign in with Google
        </button>

        {/* Divider text string line */}
        <div className="w-full flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] bg-gray-800 flex-1" />
          <span className="text-xs text-gray-500 font-light font-mono uppercase tracking-wider">
            Continue with credentials
          </span>
          <div className="h-[1px] bg-gray-800 flex-1" />
        </div>

        {/* 2. NATIVE CREDENTIAL SIGN IN FORM */}
        <form  className="w-full space-y-5">
          {/* Email or Username Entry field */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium tracking-wide block" style={{ color: Theme.lightGreen }}>
              Email or Username
            </label>
            <input
              type="text"
              required
              placeholder="Email or Username"
              className="w-full px-4 py-3 bg-[#161b22]/50 border rounded-md text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
              style={{ borderColor: `${Theme.darkGreen}80` }}
          
            />
          </div>

          {/* Password Entry field */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium tracking-wide block" style={{ color: Theme.lightGreen }}>
                Password
              </label>
              <Link href="/forgot" className="text-xs text-gray-500 hover:text-white transition-colors">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full px-4 py-3 bg-[#161b22]/50 border rounded-md text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
              style={{ borderColor: `${Theme.darkGreen}80` }}
         
            />
          </div>

          {/* Main Action Submit Button */}
          <button
            type="submit"
            style={{ backgroundColor: Theme.darkGreen }}
            className="w-full py-3 px-4 font-semibold text-white rounded-md text-sm transition-all duration-200 shadow-md hover:opacity-90 active:scale-[0.99] mt-2"
          >
            Sign In
          </button>
        </form>

        {/* Bottom Route redirection notice */}
        <p className="text-xs text-gray-500 mt-8 text-center font-light">
          Don't have an account yet?{" "}
          <Link href="/signup" className="underline hover:text-white transition-colors" style={{ color: Theme.lightGreen }}>
            Sign up
          </Link>
        </p>

      </div>
    </main>
  );
}
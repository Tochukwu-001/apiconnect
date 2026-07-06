import { Theme } from "@/components/Theme";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="h-dvh overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="min-h-dvh absolute bg-black/80 top-0 left-0 w-full flex justify-center">
          <div className="md:w-2/3 lg:pt-30 space-y-8 md:pt-10 max-md:p-2">
            <h1 className="text-white text-2xl md:text-5xl text-center"><span style={{color: Theme.lightGreen}} className="italic">API Connect</span> - The universal bridge for your data</h1>
            <p className="text-white font-thin text-xl text-center">The seamless integration platform for modern developers. Effortlessly connect your apps, manage your endpoints, and power your digital products with clean, fast APIs</p>
            <div className="text-white flex items-center justify-center gap-5 max-md:flex-col max-md:p-2">
              <Link style={{backgroundColor: Theme.darkGreen}} href={"/view"} className="px-8 py-3 rounded-sm font-medium text-lg max-md:w-full text-center">Explore APIs</Link>
              <Link href={"/post"} className="border px-8 py-3 rounded-sm max-md:w-full text-center">Publish Endpoints</Link>
            </div>
          </div>
        </div>
      </section>

      
      {/* Features Grid Section */}
      <section className="bg-neutral-900 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Speed. Engineered for Scale.
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Everything you need to share, find, and test APIs globally without the typical infrastructure overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-neutral-800/50 border border-neutral-700/50 p-8 rounded-md hover:border-neutral-600 transition-colors">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6" style={{ backgroundColor: `${Theme.darkGreen}20`, color: Theme.lightGreen }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ultra-Low Latency</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Global edge caching ensures your responses reach end-users instantly, anywhere in the world.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-800/50 border border-neutral-700/50 p-8 rounded-md hover:border-neutral-600 transition-colors">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6" style={{ backgroundColor: `${Theme.darkGreen}20`, color: Theme.lightGreen }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure Gateways</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Robust standard validation, rate-limiting rules, and token protection out of the box.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-neutral-800/50 border border-neutral-700/50 p-8 rounded-md hover:border-neutral-600 transition-colors">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6" style={{ backgroundColor: `${Theme.darkGreen}20`, color: Theme.lightGreen }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Detailed Analytics</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Track status codes, usage patterns, and server health checks seamlessly through a simple interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Stats Section */}
      <section className="bg-black py-16 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-5xl font-bold text-white mb-2">99.99%</p>
            <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Uptime SLA</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-bold text-white mb-2" style={{ color: Theme.lightGreen }}>14M+</p>
            <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Daily Requests</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-bold text-white mb-2">250+</p>
            <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Public Endpoints</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-bold text-white mb-2">0.4ms</p>
            <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Average Latency</p>
          </div>
        </div>
      </section>

      {/* Final Call To Action Section */}
      <section className="bg-neutral-900 py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] rounded-full pointer-events-none opacity-20" style={{ backgroundColor: Theme.lightGreen }}></div>
        
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white"> Ready to publish your first API?</h2>
          <p className="text-neutral-400 font-light text-lg">
            Join thousands of developers linking backend capabilities with API Connect. Register your structure and share it instantly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              style={{ backgroundColor: Theme.darkGreen }} 
              href="/post" 
              className="text-white px-8 py-3 rounded-sm font-medium transition-transform hover:scale-[1.02] w-full sm:w-auto"
            >
              Get Started for Free
            </Link>
            <Link 
              href="/view" 
              className="text-white border border-neutral-700 hover:border-neutral-500 px-8 py-3 rounded-sm font-medium transition-colors w-full sm:w-auto"
            >
              Browse Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { Theme } from "@/components/Theme";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#0d1117] text-white selection:bg-[#2ea44f]/30">
      
      {/* 1. EXISTING HERO SECTION (Retained & Fixed Overflow) */}
      <section className="min-h-dvh relative overflow-hidden flex items-center justify-center">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/bg.mp4" type="video/mp4"/>
          Your browser does not support the video tag
        </video>

        {/* Overlay content container changed to min-h-full/relative for flawless scrolling */}
        <div className="min-h-dvh absolute bg-black/80 top-0 left-0 w-full flex items-center justify-center z-10 py-16">
          <div className="md:w-2/3 lg:pt-20 space-y-8 md:pt-10 max-md:p-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center leading-tight">
              <span style={{ color: Theme.lightGreen }} className="italic">API Connect</span> – The universal bridge for your data
            </h1>
            <p className="text-gray-300 font-light text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
              The seamless integration platform for modern developers. Effortlessly connect your apps,
              manage your endpoints, and power your product with clean, fast APIs.
            </p>

            <div className="text-white flex items-center justify-center gap-5 max-md:flex-col max-md:w-full max-md:px-4">
              <Link 
                style={{ background: Theme.darkGreen }} 
                href={"/View"} 
                className="rounded-sm font-medium text-lg px-8 py-3 max-md:w-full text-center hover:opacity-90 transition-opacity shadow-lg"
              >
                Explore APIs
              </Link>
              <Link 
                href={"/Post"} 
                className="border border-white/70 px-8 py-3 rounded-sm max-md:w-full text-center hover:bg-white hover:text-black font-medium transition-all duration-200"
              >
                Publish Endpoint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SYSTEM STATS SECTION */}
      <section className="relative z-20 border-y border-gray-800 bg-[#161b22] py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: Theme.lightGreen }}>99.99%</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1 font-mono">Uptime SLA</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">&lt; 45ms</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1 font-mono">Avg Latency</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">24M+</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1 font-mono">Daily Requests</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: Theme.lightGreen }}>0ms</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1 font-mono">Cold Starts</p>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Built for lightning-fast integrations</h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light">Everything you need to orchestrate endpoints and pipeline external data architectures smoothly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#161b22] border border-gray-800 p-8 rounded-md hover:border-gray-700 transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm mb-6 flex items-center justify-center font-bold text-xl" style={{ background: `${Theme.darkGreen}20`, color: Theme.lightGreen }}>
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">Ultra-Low Latency</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Global edge routing ensures payload configurations load near instantly, eliminating server structural lag.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#161b22] border border-gray-800 p-8 rounded-md hover:border-gray-700 transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm mb-6 flex items-center justify-center font-bold text-xl" style={{ background: `${Theme.darkGreen}20`, color: Theme.lightGreen }}>
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">Unified Authentication</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Secure every single outbound pipeline using modular client validation tokens, CORS control frameworks, and dynamic security handshakes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#161b22] border border-gray-800 p-8 rounded-md hover:border-gray-700 transition-all duration-200 group">
            <div className="w-12 h-12 rounded-sm mb-6 flex items-center justify-center font-bold text-xl" style={{ background: `${Theme.darkGreen}20`, color: Theme.lightGreen }}>
              📊
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">Real-time Metrics</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Monitor incoming telemetry, active payload rates, server error counts, and server status histories directly from a sleek terminal UI.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION (CTA) SECTION */}
      <section className="relative z-20 border-t border-gray-800 bg-gradient-to-b from-[#161b22] to-[#0d1117] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold">Ready to standardize your pipelines?</h2>
          <p className="text-gray-400 font-light max-w-lg mx-auto text-sm md:text-base">
            Create a secure endpoint sandbox environment or extract public platform data strings immediately.
          </p>
          <div className="pt-4">
            <Link 
              style={{ background: Theme.darkGreen }} 
              href={"/signin"} 
              className="inline-block rounded-sm font-medium text-lg px-10 py-3.5 hover:opacity-90 transition-opacity shadow-xl"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}

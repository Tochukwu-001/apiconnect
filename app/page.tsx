import { Theme } from "@/components/Theme";
import Link from "next/link";
// Optional icons for the feature cards (npm i react-icons if not already installed)
import { FiCpu, FiShield, FiZap, FiActivity } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#0B0F17]">
      {/* ================= HERO SECTION (YOUR EXISTING CODE) ================= */}
      <section className="h-dvh overflow-hidden relative">
        <video
        autoPlay
        loop
        muted
        playsInline
        >
          <source  src="/bg.mp4" type="video/mp4"/>
          Your browser does not  support  the video tag
        </video>
          <div className="min-h-dvh absolute bg-black/70 top-0 left-0 w-full flex justify-center ">
          <div className="md:w-2/3 md:pt-10 max-md:p-2 lg:pt-30 space-y-8">
            <h1 className="text-white text-2xl md:text-5xl text-center"><span style={{color:Theme.lightGreen}} className="italic" >APIs Connect</span> - The universal bridge for your data</h1>
            <p className="text-white font-thin text-xl text-center"> The seemless integration platform for modern developer. Effortlessly connect your apps, manage your endpoints, and power your digital products with clean, fast APIs.</p>
            <div className="text-white flex items-center justify-center gap-5 max-md:flex-col max-md:p-2">
              <Link style={{backgroundColor:Theme.darkGreen}} href={"/view"} className="px-8 py-3 rounded-sm font-medium text-lg max-md:w-full text-center">Explore APIs</Link>
              <Link href={"/post"} className="border border-white px-8 py-3  rounded-sm max-md:w-full text-center">Publish Endpoints</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW LANDING PAGE SECTIONS ================= */}

      {/* 1. STATS / TRUST BAR */}
      <section className="border-y border-white/10 bg-black/40 backdrop-blur-md py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">99.99%</h3>
            <p className="text-sm text-gray-400 mt-1">Uptime SLA</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">45M+</h3>
            <p className="text-sm text-gray-400 mt-1">API Requests/Day</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">&lt; 12ms</h3>
            <p className="text-sm text-gray-400 mt-1">Average Latency</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">10k+</h3>
            <p className="text-sm text-gray-400 mt-1">Developers Active</p>
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES (BENTO GRID) */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built for speed. Engineered for scale.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to publish, discover, and consume APIs seamlessly in one unified hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="md:col-span-2 p-8 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition duration-300 flex flex-col justify-between group">
            <div>
              <FiZap className="text-3xl mb-4 transition-transform group-hover:scale-110 duration-300" style={{ color: Theme.lightGreen }} />
              <h3 className="text-xl font-semibold text-white mb-2">Ultra-Fast Routing</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Our global edge network caches response endpoints closest to your users, ensuring blazing fast delivery speeds anywhere across the globe.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition duration-300 flex flex-col justify-between group">
            <div>
              <FiShield className="text-3xl mb-4 transition-transform group-hover:scale-110 duration-300" style={{ color: Theme.lightGreen }} />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Gateway</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Integrated rate-limiting, CORS handling, and token authentication standard on all endpoints.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition duration-300 flex flex-col justify-between group">
            <div>
              <FiCpu className="text-3xl mb-4 transition-transform group-hover:scale-110 duration-300" style={{ color: Theme.lightGreen }} />
              <h3 className="text-xl font-semibold text-white mb-2">Automated Docs</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Publish your raw endpoints and let our platform build clean, interactive playground docs instantly.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 p-8 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition duration-300 flex flex-col justify-between group">
            <div>
              <FiActivity className="text-3xl mb-4 transition-transform group-hover:scale-110 duration-300" style={{ color: Theme.lightGreen }} />
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Analytics</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Monitor live traffic status logs, failure rates, and endpoint latency directly inside your dashboard with zero setup overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CODE VISUAL SECTION */}
      <section className="py-20 bg-black/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Integrate in seconds, <br />not days.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Whether you are pulling standard application data or publishing highly secure financial endpoints, APIs Connect handles the complex gateway routing so you can focus exclusively on writing logic.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: Theme.lightGreen }} /> Supported in JS, Python, Go, and Ruby
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: Theme.lightGreen }} /> Automatic CORS configuration
              </li>
            </ul>
          </div>

          {/* Fake Code IDE Window */}
          <div className="w-full bg-[#05070B] rounded-lg border border-white/10 font-mono text-xs text-gray-300 overflow-hidden shadow-2xl">
            <div className="bg-white/[0.03] px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-gray-500 ml-4 text-[11px]">api-fetch.js</span>
            </div>
            <pre className="p-6 overflow-x-auto leading-relaxed">
              <code>
{`const response = await fetch("https://api.connect.dev/v1/endpoint", {
  headers: {
    "Authorization": "Bearer apis_connect_live_tk_9a22f",
    "Content-Type": "application/json"
  }
});

const data = await response.json();
console.log(\`Bridge Connected: \${data.status}\`);`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION (CTA) */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Ready to scale your application infrastructure?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
          Join thousands of developers routing their application logic through our secure, lightning-fast network bridges.
        </p>
        <div className="flex items-center justify-center gap-4 max-sm:flex-col">
          <Link 
            style={{ backgroundColor: Theme.darkGreen }} 
            href="/view" 
            className="px-8 py-3.5 rounded-sm font-medium text-white transition hover:opacity-90 max-sm:w-full"
          >
            Get Your Free Token
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-3.5 rounded-sm border border-white/20 text-white transition hover:bg-white/5 max-sm:w-full"
          >
            Read Documentation
          </Link>
        </div>
      </section>
    </main>
  );
}
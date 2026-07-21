import Link from "next/link";
import Image from "next/image";
import { Theme } from "@/components/Theme";
import { FiArrowRight, FiTerminal, FiGlobe, FiGitBranch } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#090D14] border-t border-white/10 font-sans text-gray-400 text-xs">
      {/* Top Banner: Newsletter / CTA Box */}
      <div className="max-w-6xl mx-auto px-6 py-8 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-white font-medium text-sm flex items-center gap-2">
            <FiTerminal style={{ color: Theme.lightGreen }} /> Stay updated on API schema releases
          </h4>
          <p className="text-gray-500 font-light">No spam. Just engineering logs and system feature updates.</p>
        </div>
        <form className="flex w-full md:w-auto max-w-sm border border-white/10 rounded-sm overflow-hidden bg-black/40 focus-within:border-white/30 transition">
          <input 
            type="email" 
            placeholder="developer@domain.com" 
            className="bg-transparent px-3 py-2 text-white placeholder-gray-600 outline-none w-full text-xs"
          />
          <button 
            type="submit" 
            style={{ backgroundColor: Theme.darkGreen }} 
            className="px-4 text-white hover:opacity-95 flex items-center justify-center transition"
          >
            <FiArrowRight />
          </button>
        </form>
      </div>

      {/* Middle Grid: Dynamic Quicklinks */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* Simplified Logo Hub */}
        <div className="col-span-2 lg:col-span-1 space-y-3">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Image
              src="/logo.png"
              alt="API Connect logo"
              width={24}
              height={24}
              className="w-6 h-6 grayscale opacity-80"
            />
            <span className="font-medium tracking-tight">api_connect</span>
          </Link>
          <p className="text-gray-600 font-mono text-[11px] leading-relaxed">
            v2.4.1-stable <br />
            built_for_scale.exe
          </p>
        </div>

        {/* Links: Discover */}
        <div className="space-y-2.5">
          <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider block">01 // Discover</span>
          <ul className="space-y-2 font-light">
            <li><Link href="/view" className="hover:text-white transition">Explore Endpoints</Link></li>
            <li><Link href="/post" className="hover:text-white transition">Submit Integration</Link></li>
            <li><a href="#" className="hover:text-white transition">Global Graph</a></li>
          </ul>
        </div>

        {/* Links: Platform */}
        <div className="space-y-2.5">
          <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider block">02 // Network</span>
          <ul className="space-y-2 font-light">
            <li><a href="#" className="hover:text-white transition">Edge Cache Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Gateway Security</a></li>
            <li><a href="#" className="hover:text-white transition">System Metrics</a></li>
          </ul>
        </div>

        {/* Links: Docs */}
        <div className="space-y-2.5">
          <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider block">03 // Resources</span>
          <ul className="space-y-2 font-light">
            <li><a href="#" className="hover:text-white transition">Dev Guides</a></li>
            <li><a href="#" className="hover:text-white transition">SDK Wrappers</a></li>
            <li><a href="#" className="hover:text-white transition">OpenAPI Spec</a></li>
          </ul>
        </div>

        {/* Links: Corporate */}
        <div className="space-y-2.5">
          <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider block">04 // Core</span>
          <ul className="space-y-2 font-light">
            <li><Link href="/about" className="hover:text-white transition">Our Team</Link></li>
            <li><a href="#" className="hover:text-white transition">Legal Matrix</a></li>
            <li><a href="#" className="hover:text-white transition">Support Ticket</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Technical Strip */}
      <div className="border-t border-white/5 bg-black/40 text-[11px] text-gray-600 font-mono">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} APIS_CONNECT_INC</span>
            <span className="flex items-center gap-1"><FiGlobe /> region: global-edge</span>
            <span className="flex items-center gap-1"><FiGitBranch /> branch: main</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-500">latency: 7ms to edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
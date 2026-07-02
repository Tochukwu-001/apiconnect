import Link from "next/link";
import { Theme } from "@/components/Theme";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-gray-800 bg-[#0d1117] pt-16 pb-8 text-gray-400 w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Branding Column */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-semibold font-mono tracking-tight">
            <span style={{ color: Theme.lightGreen }}>&lt;/&gt;</span> APIConnect
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            The universal bridge for your data architectures. Connect apps, handle webhooks, and scale pipelines seamlessly.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4 font-mono">Platform</h4>
          <ul className="space-y-2.5 text-sm font-light">
            <li>
              <Link href="/View" className="hover:text-white transition-colors">Explore APIs</Link>
            </li>
            <li>
              <Link href="/Post" className="hover:text-white transition-colors">Publish Endpoints</Link>
            </li>
            <li>
              <Link href="#metrics" className="hover:text-white transition-colors">System Metrics</Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4 font-mono">Resources</h4>
          <ul className="space-y-2.5 text-sm font-light">
            <li>
              <Link href="/docs" className="hover:text-white transition-colors">API Documentation</Link>
            </li>
            <li>
              <Link href="/status" className="hover:text-white transition-colors flex items-center gap-2">
                System Status
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-white transition-colors">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Developer Ecosystem */}
        <div className="space-y-3">
          <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4 font-mono">Developer Ecosystem</h4>
          <p className="text-xs text-gray-500 font-light">
            Built for rapid payload delivery. Designed to streamline structural payload routing.
          </p>
          <div className="text-xs font-mono pt-1 text-gray-500">
            Region: <span style={{ color: Theme.lightGreen }}>Global-Edge</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} APIConnect. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
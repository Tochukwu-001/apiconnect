import { Theme } from "@/components/Theme";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Explore APIs", url: "/view" },
        { name: "Publish Endpoints", url: "/post" },
        { name: "Documentation", url: "/docs" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Careers", url: "/careers" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-0.5 text-white">
              <Image
                src="/logo.png"
                alt="API Connect logo"
                width={500}
                height={500}
                className="w-6 h-6 brightness-90"
              />
              <span className="text-lg font-light">
                Connect
              </span>
            </Link>
            <p className="text-sm font-light text-neutral-500 max-w-xs leading-relaxed">
              The universal bridge for your data. Powering modern digital products with clean, reliable, and secure API structures.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-2 text-sm font-light">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.url} 
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-600">
          <p>© {currentYear} API Connect. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <span className="flex items-center gap-1.5 font-medium" style={{ color: Theme.lightGreen }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: Theme.lightGreen }}></span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { LuTrash2 } from "react-icons/lu";
import { Theme } from "@/components/Theme";

export default function View() {
  // Mock data array sticking directly to your structure for clean rendering
  const mockApis = [
    {
      author: "Samuel Chukwuma",
      avatar: "/logo.png",
      title: "Dummy Products API",
      date: "2/7/2026",
      description: "Instant placeholder data for E-commerce layouts, store inventories, and cart testing mechanics. Perfect for frontend developers building commercial prototypes."
    },
    {
      author: "Alex Johnson",
      avatar: "/logo.png",
      title: "User Auth Matrix",
      date: "2/5/2026",
      description: "Generates mock token handshakes, user profile configurations, and secure permission layers for testing client-side routing blocks."
    },
    {
      author: "Miracle Adebayo",
      avatar: "/logo.png",
      title: "Weather Stream Array",
      date: "1/28/2026",
      description: "Real-time lookalike geographic data streams, barometric pressure models, and dynamic temperature matrices localized for modern dashboards."
    }
  ];

  return (
    <main className="min-h-screen bg-[#070a0e] text-white max-md:p-4 p-10 selection:bg-blue-600/30">
      
      {/* Page Header Area */}
      <div className="max-w-6xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-400">
          SYSTEM REGISTRY ACTIVE
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
          Discover, Test, and Integrate Production-ready APIs Instantly
        </h1>
        <p className="text-sm text-gray-400 font-light max-w-xl">
          Explore shared endpoints, view documentation, and reference structured data pipelines directly inside your client-side modules.
        </p>
      </div>

      {/* Grid Layout Container */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockApis.map((api, index) => (
          <div 
            key={index} 
            className="bg-[#0d1117] border border-gray-900 rounded-xl p-5 space-y-5 hover:border-gray-800 transition-colors duration-200 shadow-xl flex flex-col justify-between"
          >
            
            {/* Card Header Node */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={api.avatar} 
                  alt={api.author} 
                  className="w-8 h-8 rounded-full border border-gray-800 object-cover bg-white/5"
                />
                <h3 className="text-sm font-medium text-gray-300">{api.author}</h3>
              </div>

              {/* Functional Trash Action Element */}
              <button 
                className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors focus:outline-none"
                aria-label="Delete endpoint record"
              >
                <LuTrash2 className="text-base" />
              </button>
            </div>

            {/* Card Body Core Content */}
            <div className="space-y-2 flex-grow">
              <h2 className="font-semibold text-lg text-gray-100 group-hover:text-white transition-colors">
                {api.title}
              </h2>
              
              <article className="space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-wider text-gray-600">
                  Documentation
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                  {api.description}
                </p>
              </article>
            </div>

            {/* Card Footer Node */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-900/60 mt-auto">
              <p className="text-gray-600 text-xs font-mono">{api.date}</p>
              
              <Link 
                href="#" 
                style={{ backgroundColor: Theme.darkGreen || '#059669' }} 
                className="text-white flex items-center text-xs gap-1 font-medium rounded-md px-4 py-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-emerald-950/20"
              >
                View Docs
                <GoArrowUpRight className="text-sm" />
              </Link>
            </div>

          </div>
        ))}
      </section>

    </main>
  );
}
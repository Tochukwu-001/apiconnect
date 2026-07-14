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
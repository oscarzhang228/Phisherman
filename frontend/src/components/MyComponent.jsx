import * as React from "react";

function MyComponent() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1
              className="text-7xl md:text-9xl font-bold glitch-text"
              data-text="Phisherman"
            >
              <span className="bg-gradient-to-r from-[#ff4800] to-[#ff8400] bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
                Phisherman
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              AI-powered phishing simulations & deepfake security training to
              test and train employees before real hackers strike.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <button
                className="group relative px-8 py-4 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105"
                x-data="{ hover: false }"
                x-on:mouseenter="hover = true"
                x-on:mouseleave="hover = false"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff4800] to-[#ff8400] transition-transform duration-300"
                  x-bind:class="{ 'scale-x-100': hover, 'scale-x-0': !hover }"
                  style="transform-origin: left;"
                />
                <div
                  className="absolute inset-0 bg-[#ff4800] transition-transform duration-300"
                  x-bind:class="{ 'scale-x-0': hover, 'scale-x-100': !hover }"
                  style="transform-origin: right;"
                />
                <span className="relative inline-flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="font-medium">Get Started</span>
                </span>
                <div
                  className="absolute inset-0 border border-white/20 rounded-full transition-opacity duration-300"
                  x-bind:class="{ 'opacity-0': hover, 'opacity-100': !hover }"
                />
              </button>
              <button
                className="group relative px-8 py-4 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105"
                x-data="{ hover: false }"
                x-on:mouseenter="hover = true"
                x-on:mouseleave="hover = false"
              >
                <div
                  className="absolute inset-0 border-2 border-[#ff4800] rounded-full transition-all duration-300"
                  x-bind:class="{ 'opacity-100 scale-105': hover, 'opacity-50 scale-100': !hover }"
                />
                <span className="relative inline-flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#ff4800] group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium text-[#ff4800] group-hover:text-white transition-colors duration-300">
                    Watch Demo
                  </span>
                </span>
                <div className="absolute inset-0 bg-[#ff4800]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4800] to-[#ff8400] rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300" />
              <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ff4800]/20 text-[#ff4800] text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#ff4800] animate-pulse mr-2" />
                    <span>Live</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#ff4800]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>Attack Simulation Dashboard</span>
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-4 rounded-lg bg-black/30 backdrop-blur-lg border border-white/5">
                    <div className="text-sm text-white/50 mb-1">
                      Active Threats
                    </div>
                    <div
                      className="text-3xl font-bold text-[#ff4800]"
                      x-text="threats"
                    >
                      15
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/30 backdrop-blur-lg border border-white/5">
                    <div className="text-sm text-white/50 mb-1">
                      Success Rate
                    </div>
                    <div
                      className="text-3xl font-bold text-green-500"
                      x-text="successRate + '%'"
                    >
                      79%
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/30 backdrop-blur-lg border border-white/5">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 animate-pulse" />
                      <div>
                        <div className="text-yellow-500 font-medium">
                          Phishing Attempt Detected
                        </div>
                        <div className="text-sm text-white/50">Just Now</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/30 backdrop-blur-lg border border-white/5">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 animate-ping" />
                      <div>
                        <div className="text-red-500 font-medium">
                          Deepfake Call Initiated
                        </div>
                        <div className="text-sm text-white/50">2m ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ff4800] rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none" />
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#ff8400] rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

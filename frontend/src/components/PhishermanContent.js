"use client";
import React from "react";


const PhishermanContent = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-[#0a0a0a] font-['Space_Grotesk'] text-white overflow-x-hidden">
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span>What is </span>
            <span className="bg-gradient-to-r from-[#ff4800] to-[#ff8400] bg-clip-text text-transparent">
              Phisherman?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-[#ff4800]/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 text-[#ff4800]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Phishing Simulations
              </h3>
              <p className="text-white/70">
                Simulates real-world attacks via LinkedIn, email, SMS & deepfake
                CEO calls.
              </p>
            </div>
            <div className="group bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-[#ff4800]/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 text-[#ff4800]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.62 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Live Attack Tracking</h3>
              <p className="text-white/70">
                Monitor employee responses to cyber threats in real-time with
                risk analysis.
              </p>
            </div>
            <div className="group bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-[#ff4800]/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 text-[#ff4800]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Adaptive Security Training
              </h3>
              <p className="text-white/70">
                AI assigns personalized micro-training modules based on employee
                mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span>How It </span>
            <span className="bg-gradient-to-r from-[#ff4800] to-[#ff8400] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff4800]/20 via-[#ff8400]/20 to-[#ff4800]/20" />
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="group bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-[#ff4800]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#ff4800]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff4800]/40 transition-colors">
                  <span className="text-[#ff4800]">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Select an Employee</h3>
                <p className="text-white/70">
                  AI personalizes phishing attacks based on their role.
                </p>
              </div>
              <div className="group bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-[#ff4800]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#ff4800]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff4800]/40 transition-colors">
                  <span className="text-[#ff4800]">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  AI Generates & Launches Attack
                </h3>
                <p className="text-white/70">
                  Simulated phishing email, LinkedIn scam, or deepfake call.
                </p>
              </div>
              <div className="group bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-[#ff4800]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#ff4800]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff4800]/40 transition-colors">
                  <span className="text-[#ff4800]">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Monitor in Real-Time</h3>
                <p className="text-white/70">
                  See if they click, reply, or fall for the bait.
                </p>
              </div>
              <div className="group bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-[#ff4800]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#ff4800]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff4800]/40 transition-colors">
                  <span className="text-[#ff4800]">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Generate Cyber Awareness Score
                </h3>
                <p className="text-white/70">
                  AI adapts training to their weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span>Live Cybersecurity </span>
            <span className="bg-gradient-to-r from-[#ff4800] to-[#ff8400] bg-clip-text text-transparent">
              Scoreboard
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#ff4800] mb-2">4321</div>
              <div className="text-white/70">Phishing Attacks Simulated</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#ff4800] mb-2">87%</div>
              <div className="text-white/70">Attack Detection Rate</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#ff4800] mb-2">1204</div>
              <div className="text-white/70">Employees Trained</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#ff4800] mb-2">24/7</div>
              <div className="text-white/70">Active Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#ff4800] to-[#ff8400] bg-clip-text text-transparent mb-4">
                Phisherman
              </div>
              <p className="text-white/70">
                Protecting your organization from phishing attacks with
                AI-powered security training.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhishermanContent;

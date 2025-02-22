import React from "react";

interface DashboardCardProps {
  threats: number;
  successRate: number;
  children: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  threats,
  successRate,
  children,
}) => {
  return (
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Attack Simulation Dashboard</span>
        </h3>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="p-4 rounded-lg bg-black/30 backdrop-blur-lg border border-white/5">
            <div className="text-sm text-white/50 mb-1">Active Threats</div>
            <div className="text-3xl font-bold text-[#ff4800]">{threats}</div>
          </div>
          <div className="p-4 rounded-lg bg-black/30 backdrop-blur-lg border border-white/5">
            <div className="text-sm text-white/50 mb-1">Success Rate</div>
            <div className="text-3xl font-bold text-green-500">
              {successRate}%
            </div>
          </div>
        </div>
        <div className="space-y-4">{children}</div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ff4800] rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none" />
        <div className="absolute top-0 left-0 w-24 h-24 bg-[#ff8400] rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none" />
      </div>
    </div>
  );
};

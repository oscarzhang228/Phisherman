import React from "react";
import { Button } from "./Button";
import { DashboardCard } from "./DashboardCard";
import { NotificationItem } from "./NotificationItem";

interface PhishermanHeroProps {
  threats: number;
  successRate: number;
}

export const PhishermanHero: React.FC<PhishermanHeroProps> = ({
  threats,
  successRate,
}) => {
  return (
    <div className="flex flex-col max-w-screen min-h-screen bg-[#0a0a0a] font-['Space_Grotesk'] text-white overflow-hidden">
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
                <Button variant="primary" icon="lightning">
                  Get Started
                </Button>
                <Button variant="secondary" icon="play">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="max-w-2xl mx-auto mt-8">
              <DashboardCard threats={threats} successRate={successRate}>
                <NotificationItem
                  type="warning"
                  title="Phishing Attempt Detected"
                  time="Just Now"
                />
                <NotificationItem
                  type="danger"
                  title="Deepfake Call Initiated"
                  time="2m ago"
                />
              </DashboardCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

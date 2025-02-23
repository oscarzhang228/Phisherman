import PhishermanContent from "../components/PhishermanContent";
import { PhishermanHero } from "../components/PhishermanHero";

export default function Home() {
  return (
    <main className="text-white max-w-screen overflow-hidden">
      {/* Hero Section with Grid Background */}
      <PhishermanHero threats={15} successRate={79} />

      {/* Other Sections Below (No Grid Background) */}
      <div className="relative">
        <PhishermanContent />
      </div>
    </main>
  );
}

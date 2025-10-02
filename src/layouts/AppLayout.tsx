import Navbar from "@/components/Navbar";
import FuturisticCursor from "@/components/FuturisticCursor";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <FuturisticCursor />
      {children}
    </main>
  );
}

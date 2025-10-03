import Navbar from "@/components/Navbar";
import FuturisticCursor from "@/components/FuturisticCursor";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <FuturisticCursor />
      {children}
    </main>
  );
}

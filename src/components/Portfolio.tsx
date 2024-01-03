import { portfolio } from "@/data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <section id="work" className="grid gap-2 place-items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem {...project} />
          ))}
        </div>
      </section>
    </>
  );
}

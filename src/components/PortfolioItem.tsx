interface PortfolioItemProps {
  title: string;
  image: string;
  stack: string[];
  link: string;
}

export default function PortfolioItem({
  title,
  image,
  stack,
  link,
}: PortfolioItemProps) {
  return (
    <>
      <a href={link} target="_blank">
        <article className="grid place-items-center w-[350px]">
          <h2 className="text-2xl mb-4 text-center w-full">{title}</h2>
          <img src={image} alt={title} className="w-[350px] h-[200px]" />

          <div className="flex gap-10">
            {stack.map((item) => (
              <p className="border-2 border-black w-full p-1 my-2 rounded-md">
                {item}
              </p>
            ))}
          </div>
        </article>
      </a>
    </>
  );
}

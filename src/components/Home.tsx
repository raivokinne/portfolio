import { Button } from "./ui/button";

export default function Home() {
  return (
    <>
      <section className="grid place-items-center h-screen">
        <article className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-semibold">
            Wellcome
          </h1>
          <h3 className="text-3xl">This is my portfolio</h3>
          <p className="w-[400px] text-center">
            "Beyond the pixels, behind the code, my portfolio tells the story of
            turning ideas into immersive experiences—where creativity meets
            functionality, and innovation becomes tangible."
          </p>
          <Button className="w-[200px]">
            <a href="#about">About me</a>
          </Button>
        </article>
      </section>
    </>
  );
}

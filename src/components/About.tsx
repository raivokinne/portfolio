import { Button } from "./ui/button";

export default function About() {
  return (
    <>
      <section id="about" className="grid place-items-center h-screen">
        <article className="grid place-items-center gap-4 lg:grid-cols-2">
          <div className="grid place-items-center gap-4">
            <h2 className="text-3xl font-semibold">About me</h2>
            <p className="w-[400px] text-center text-wrap">
              Hi, I'm Raivo Ķinne. I'm a software engineer and a full-stack
              developer. I enjoy creating things that live on the internet. My
              interest in web development started back in 2022 when I decided to
              go in school. I started learning HTML, CSS, and JavaScript. I'm
              currently learning React and TypeScript, Laravel, PHP, and MySQL.
              I'm always looking for new and exciting projects to work on. If
              you like what you see, please feel free to contact me. I'll get
              back to you as soon as possible.
            </p>
          </div>
          <img
            src="/about-me.jpg"
            alt="about me image"
            className="rounded-xl w-[200px]"
          />
          <Button>Contact me</Button>
        </article>
      </section>
    </>
  );
}

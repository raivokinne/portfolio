export default function Contact() {
  return (
    <>
      <section id="contact" className="grid place-items-center h-screen">
        <article className="grid place-items-center gap-4">
          <h2 className="text-3xl font-semibold">Contact me</h2>
          <form
            action="https://getform.io/f/5eeb975d-1034-4142-a92b-ed8597a43399"
            method="POST"
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
                className="border-2 border-black w-[300px] p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-lg font-semibold">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your e-mail"
                required
                className="border-2 border-black w-[300px] p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                required
                className="border-2 border-black w-[300px] p-2 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-[300px] p-2 bg-black text-white rounded-md"
              >
                Send
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}

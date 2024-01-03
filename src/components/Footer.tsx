import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-2 place-items-center h-[600px]">
        <div>
          <p>© 2022 Raivo Ķinne</p>
          <p>All rights reserved</p>
          <p>Powered by React.js + Vite + Tailwindcss</p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/RaivoKinne"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <FaGithub />
          </div>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/raivokinne"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <FaTwitter />
          </div>
        </div>
      </footer>
    </>
  );
}

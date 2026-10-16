import { config } from "../../constants/config";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
        <div>
          <p className="text-sm font-semibold text-white">
            Henok{" "}
            <span className="mx-2 text-[#00cea8]" aria-hidden="true">
              /
            </span>{" "}
            Senior Software Engineer
          </p>
          <p className="text-secondary mt-2 text-xs">
            © {new Date().getFullYear()} Henok. Built with care, delivered with purpose.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-[#aaa6c3]"
        >
          <a href="https://github.com/henokwon" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={`mailto:${config.html.email}`}>Email ↗</a>
          <a href="#top" className="footer-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import { navLinks } from "../../constants";
import { menu, close } from "../../assets";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!toggle) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setToggle(false);
        menuButtonRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setToggle(false);
    };
    window.addEventListener("keydown", dismiss);
    window.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("pointerdown", outside);
    };
  }, [toggle]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let sectionId = "";
      sections.forEach((current) => {
        if (current.getBoundingClientRect().top <= 140) sectionId = current.id;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        sectionId = "contact";
      }
      setActive(sectionId === "tech" || sectionId === "projects" ? "work" : sectionId);
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav aria-label="Main navigation" className={`portfolio-nav ${scrolled ? "is-scrolled" : ""}`}>
      <motion.div
        aria-hidden="true"
        className="nav-reading-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative mx-auto flex w-full max-w-7xl items-center gap-3">
        <Link
          to="/"
          className="nav-avatar-node shrink-0"
          aria-label="Back to top"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src="/avatar-henok-small.png" alt="Henok avatar" width="46" height="46" />
        </Link>

        <Link
          to="/"
          className="mr-auto flex items-center"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="flex cursor-pointer text-[15px] font-bold tracking-[0.12em] text-white sm:text-[17px]">
            ሄኖክ · ܚܢܘܟ
          </p>
        </Link>

        <ul className="hidden list-none flex-row items-center gap-1 lg:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-sm font-medium`}
            >
              <a
                className="nav-link"
                href={`#${nav.id}`}
                aria-current={active === nav.id ? "location" : undefined}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div
          ref={menuRef}
          className="relative flex items-center justify-end lg:hidden"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setToggle(false);
          }}
        >
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={toggle ? "Close navigation" : "Open navigation"}
            aria-expanded={toggle}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-lg"
            onClick={() => setToggle((open) => !open)}
          >
            <img src={toggle ? close : menu} alt="" className="h-7 w-7 object-contain" />
          </button>

          <div
            id="mobile-navigation"
            className={`${
              !toggle ? "hidden" : "flex"
            } nav-mobile-panel absolute right-0 top-14 z-10 min-w-[200px] rounded-2xl p-2`}
          >
            <ul className="flex flex-1 list-none flex-col gap-1">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                >
                  <a
                    className="nav-link"
                    href={`#${nav.id}`}
                    aria-current={active === nav.id ? "location" : undefined}
                    onClick={() => setToggle(false)}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

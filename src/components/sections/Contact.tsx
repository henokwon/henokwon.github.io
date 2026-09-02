import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const phoneNumber = "+251989305925";
const normalizedPhoneNumber = phoneNumber.replace("+", "");

const contactChannels = [
  {
    name: "WhatsApp",
    label: "Message on WhatsApp",
    href: `https://wa.me/${normalizedPhoneNumber}`,
    accent: "from-[#25D366] to-[#00cea8]",
    icon: (
      <path d="M20.5 6.5A13.7 13.7 0 0 0 7.1 22.9L5 30.5l7.8-2.1a13.7 13.7 0 1 0 7.7-21.9Zm0 25a11 11 0 0 1-5.6-1.5l-.4-.3-4.6 1.2 1.2-4.5-.3-.5a11 11 0 1 1 9.7 5.6Zm6-8.2c-.3-.2-2-1-2.3-1.1-.3-.1-.6-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1a9 9 0 0 1-2.7-1.7 10 10 0 0 1-1.9-2.4c-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.5 0-.6l-1.1-2.5c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.3 2.4 3.7 5.8 5.2.8.3 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4Z" />
    ),
  },
  {
    name: "Telegram",
    label: "Open Telegram",
    href: `tg://resolve?phone=${normalizedPhoneNumber}`,
    accent: "from-[#2AABEE] to-[#229ED9]",
    icon: (
      <path d="m29.6 8.7-4.4 20.8c-.3 1.5-1.2 1.9-2.4 1.2l-6.6-4.9-3.2 3.1c-.4.4-.7.7-1.4.7l.5-6.8L24.4 12c.5-.5-.1-.8-.8-.3L8.3 21.3l-6.6-2.1c-1.4-.4-1.5-1.4.3-2.1L27.8 7.2c1.2-.5 2.2.3 1.8 1.5Z" />
    ),
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 relative flex-[0.75] overflow-hidden rounded-2xl p-8"
      >
        <div className="green-pink-gradient absolute -left-24 top-10 h-56 w-56 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-[#915EFF]/20" />
        <div className="relative">
          <Header useMotion={false} {...config.contact} />
          <p className="text-secondary mx-auto mt-6 max-w-lg text-center text-[16px] leading-[28px]">
            {config.contact.content}
          </p>

          <div className="mt-10 grid gap-4">
            {contactChannels.map((channel, index) => (
              <motion.a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.12, duration: 0.45 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="border-white/10 bg-tertiary/80 group flex flex-col items-center gap-4 rounded-2xl border p-5 text-center backdrop-blur sm:flex-row sm:text-left"
              >
                <span
                  className={`bg-gradient-to-br ${channel.accent} flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-black/30`}
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="h-8 w-8 fill-current"
                    aria-hidden="true"
                  >
                    {channel.icon}
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="block text-[18px] font-bold text-white">
                    {channel.name}
                  </span>
                  <span className="text-secondary mt-1 block text-[14px]">
                    {channel.label}
                  </span>
                </span>
                <span className="text-secondary group-hover:text-white">
                  {phoneNumber}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative h-[360px] md:h-[560px] xl:h-auto xl:flex-1"
      >
        <div className="absolute inset-0 rounded-full border border-[#915EFF]/20 blur-[1px]" />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#00cea8]/30"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#bf61ff]/20"
        />
        <div className="absolute left-8 top-10 z-10 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur">
          WhatsApp ready
        </div>
        <div className="absolute bottom-12 right-8 z-10 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur">
          Telegram open
        </div>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

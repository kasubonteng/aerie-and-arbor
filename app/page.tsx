"use client";

import Gallery from "@/components/gallery";
import { Button } from "@/components/ui/button";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  {
    link: "https://www.facebook.com/aerisandarbor",
    icon: IconBrandFacebook,
  },
  {
    link: "https://www.instagram.com/aerisandarbor",
    icon: IconBrandInstagram,
  },
  {
    link: "https://www.twitter.com/aerisandarbor",
    icon: IconBrandX,
  },
  {
    icon: IconBrandWhatsapp,
    link: "https://wa.me/233554872445",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <motion.h1
            className="font-monoton text-4xl sm:text-6xl md:text-8xl lg:text-9xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aeris And Arbor
          </motion.h1>

          <motion.p
            className="max-w-3xl font-geist-mono text-sm sm:text-base md:text-lg lg:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            PERGOLA | MIST FANS | TABLES | ASTROTURF | COUPLE CHAIRS
          </motion.p>

          <div
            id="contact"
            className="mt-12 flex flex-col items-center justify-center gap-8 font-geist-mono text-lg sm:flex-row"
          >
            <motion.div
              className="text-center sm:text-left"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="mb-2">Find us on</p>
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                {socials.map(({ link, icon: Icon }) => (
                  <motion.div
                    key={link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-white bg-opacity-10 text-white transition-all duration-300 hover:bg-opacity-20 hover:text-gray-800"
                    >
                      <Link href={link} target="_blank" rel="noreferrer">
                        <Icon size={24} />
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center sm:text-left"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="mb-2">Or call us on</p>
              <p className="font-semibold">+233 554 872 445</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
}

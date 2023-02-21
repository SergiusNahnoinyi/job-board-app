import Link from "next/link";

import { socialMedia } from "@/constants/socialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-400">
          Follow me on social media for more info.
        </p>
        <div className="mt-2 flex justify-center space-x-6">
          {socialMedia.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{link.name}</span>
              <link.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center  text-lg text-gray-600">
          If you ever need my services on a similar project, I{"'"}d love to
          help! <br />
          <Link
            href="https://t.me/sergiusnahnoinyijr"
            target="_blank"
            className="text-liftedgreen-700 hover:text-liftedgreen-800"
          >
            Write me a message
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

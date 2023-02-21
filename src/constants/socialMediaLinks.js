import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export const socialMedia = {
  links: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/sergius.nahnoinyi.3",
      icon: () => <FaFacebook />
    },
    {
      name: "GitHub",
      href: "https://github.com/SergiusNahnoinyi",
      icon: () => <FaGithub />
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sergiusnahnoinyi",
      icon: () => <FaLinkedin />
    }
  ]
};

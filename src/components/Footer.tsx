import React, { FC } from "react";
import { useForm } from "@formspree/react";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";

const Footer: FC = () => {
  const [state, handleSubmit] = useForm("mgvadgqw");

  {state.succeeded && (
    <p className="text-green-500 font-medium mb-4">
      Thanks for sending your message!!
    </p>
  )}  

  const menuOne = [
    "Support Center",
    "Customer Support",
    "About Us",
    "Project",
    "Return Policy",
  ];
  const menuTwo = ["Press Inquiries", "Social Media Support", "Site Map"];

  return (
    <footer className="bg-default-950/40 backdrop-blur-3xl">
      <div className="container py-20 lg:px-20">
        <div
          className="grid grid-cols gap-10
      lg:grid-cols-12 lg:gap-16"
        >
          <div
            className="col-span-2 sm:col-span-1
        lg:col-span-3"
          >
            <ul className="flex flex-col gap-3">
              <h5
                className="text-default-200 mb-2 font-medium
            lg:text-lg xl:text-xl"
              >
                About Us
              </h5>
              {menuOne.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-default-300 text-base transition-all
                  hover:text-white"
                  >
                    <i
                      data-lucide="gauge-circle"
                      className="me-2 inline-block h-4 w-4"
                    ></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-span-2 sm:col-span-1
        lg:col-span-3"
          >
            <ul className="flex flex-col gap-3">
              <h5
                className="text-default-200 mb-2 font-medium
            lg:text-lg xl:text-xl"
              >
                My Contact
              </h5>
              {menuTwo.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-default-300 text-base transition-all
                  hover:text-white"
                  >
                    <i
                      data-lucide="gauge-circle"
                      className="me-2 inline-block h-4 w-4"
                    ></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-6">
            <div className="bg-primary/20 rounded-xl">
              <div className="p-10">
                <h6 className="mb-4 text-xl text-white">NewsLetter</h6>
                <p
                  className="text-default-200 mb-6 text-base
              font-medium"
                >
                  Signup and receive the latest tips & news
                </p>
                {state.succeeded && (
    <p className="text-green-500 font-medium mb-4">
      Thanks for sending your message!!
    </p>
  )}
                <form onSubmit={handleSubmit} className="mb-6 space-y-2">
                  <label
                    htmlFor="email"
                    className="text-base
                text-white"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-default-950/60 pe-40 ps-4 h-12
                  w-full rounded-lg border-white/10 py-4
                  text-white backdrop-blur-3xl
                  focus:border-white/10 focus:ring-0"
                    />

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="hover:bg-primary-hover hover:border-primary-hover
                  border-primary bg-primary end-[6px] absolute top-[6px]
                  inline-flex h-9 items-center justify-center gap-2 rounded-md
                  px-6 text-white transition-all"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>

                <div>
                  <h6 className="mb-4 text-base text-white">Follow Us</h6>
                  <ul className="flex flex-wrap items-center gap-1">
                    {[
                      {
                        icon: <FaDiscord />,
                        url: "https://discord.com/users/882154335927156778",
                      },
                      {
                        icon: <TiSocialLinkedin />,
                        url: "https://www.linkedin.com/in/rahul-singh-rawat-783a98243/",
                      },
                      {
                        icon: <TiSocialTwitter />,
                        url: "https://x.com/Rawat_ji_7788",
                      },
                      {
                        icon: <TiSocialYoutube />,
                        url: "https://www.youtube.com/@Rawatji_7788",
                      },
                    ].map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-primary group inline-flex
        h-10 w-10 items-center justify-center rounded-lg
        border border-white/10 transition-all duration-500"
                        >
                          <span className="text-default-300 text-xl group-hover:text-white">
                            {social.icon}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CopyRight */}
      <div className="border-t border-white/10 py-6">
        <div
          className="md:text-start container flex h-full
      flex-wrap items-center justify-center gap-4 text-center
      md:justify-between lg:px-20"
        >
          <p className="text-default-400 text-base font-medium">
            @ SolanaAI --
            <a href="#">
              Designed & Created{" "}
              <i
                data-lucide="heart"
                className="inline h-4
            w-4 fill-red-500 text-red-500"
              ></i>
              by Rahul with 💖
            </a>
          </p>
          <p className="text-default-400 text-base font-medium">
            Terms Conditions & Policies @ 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

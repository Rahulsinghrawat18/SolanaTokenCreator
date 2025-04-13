import React, { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuArrowRightFromLine } from "react-icons/lu";

interface MyComponentProps {
  setOpenSendTransaction: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAirdrop: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenTokenMetadata: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToolView: FC<MyComponentProps> = ({
  setOpenAirdrop,
  setOpenContact,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetadata,
}) => {
  const tools = [
    {
      name: "Create Token",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "Token Metadata",
      icon: <MdGeneratingTokens />,
      function: setOpenTokenMetadata,
    },
    {
      name: "Contact Us",
      icon: <MdGeneratingTokens />,
      function: setOpenContact,
    },
    {
      name: "Airdrop",
      icon: <MdGeneratingTokens />,
      function: setOpenAirdrop,
    },
    {
      name: "Send Transaction",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "Buddy Token",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "Top Tokens",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "Solana Explorer",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
  ];
  return (
    <section id="tools" className="py-20">
      <div className="container">
        <div
          className="mb-10 flex items-end
      justify-between"
        >
          <div
            className="mx-auto max-w-2xl
        text-center"
          >
            <h2
              className="mb-4 text-3xl font-medium
          capitalize text-white"
            >
              Solana Powerfull Tools
            </h2>
            <p
              className="text-default-200 text-sm
          font-medium"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              dolorem perspiciatis, nesciunt, dolores fuga voluptas delectus
              quae esse minus vitae repellendus, sed pariatur iste possimus!
              Inventore numquam provident ut earum.
            </p>
          </div>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2
      lg:grid-cols-4"
        >
          {tools.map((tool, index) => (
            <div
              className="bg-default-950/40 cursor-pointer
          rounded-xl backdrop-blur-3xl"
              onClick={() => tool.function(true)}
            >
              <div className="p-6">
                <div
                  className="mb-4 flex items-center
              gap-4"
                >
                  <div
                    className={`inline-flex
                  h-10 w-10 items-center justify-center
                  rounded-lg bg-red-500/20
                  ${
                    index == 0
                      ? "text-red-500"
                      : index == 1
                      ? "text-sky-500"
                      : index == 2
                      ? "text-indigo-500"
                      : index == 3
                      ? "text-yellow-500"
                      : "text-teal-500"
                  }`}
                  >
                    <i data-lucide="dribble" className="">
                      {tool.icon}
                    </i>
                  </div>

                  <h3
                    className="text-default-200
                  text-xl font-medium"
                  >
                    {tool.name}
                  </h3>
                </div>

                <a
                  className="text-primary group relative
                inline-flex items-center gap-2"
                >
                  <span
                    className="
                  text-cyan-300 
                  drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] 
                  bg-primary/80 absolute 
                  -bottom-0 h-1 w-7/12 rounded 
                  transition-all duration-500 
                  group-hover:w-full"
                  ></span>
                  Select & Try
                  <i data-lucide={"move-right"}>
                    <LuArrowRightFromLine className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            className="hover:bg-primary-hover bg-primary
          inline-flex items-center justify-center gap-2
          rounded-full px-6 py-2 text-white transition-all
          duration-500 cursor-pointer"
          >
            More Tools
            <i>
              <IoIosArrowRoundForward />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

import { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

//Internal Import
import pkg from "../../../package.json";

export const HomeView: FC<{
  setOpenCreateModal: (val: boolean) => void;
}> = ({ setOpenCreateModal }) => {
  return (
    <section id="home" className="relative pb-20 pt-[72px] overflow-hidden">
      <div className="px-6 py-4">
        <div className="bg-default-950/40 rounded-2xl">
          <div className="container">
            <div className="p-6">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 relative z-10">

              <div className="bg-primary/10
              -z-1 start-0 absolute top-0 h-14 w-14
              animate-[spin_10s_linear_infinite]
              rounded-tl-none">
              <div className="bg-primary/20
              -z-1 end-0 absolute bottom-0 h-14 w-14
              animate-ping rounded-full">
              </div>                
              </div>


                {/* Left: Text & Buttons */}
                <div className="flex flex-col justify-center space-y-4">
                  <span className="text-primary bg-primary/20 rounded-md px-3 py-1 text-sm font-medium uppercase tracking-wider w-max">
                    CREATE SOLANA TOKEN {pkg.version}
                  </span>

                  <h1 className="md:text-5xl/tight max-w-lg text-4xl font-medium text-white">
                    Now Create Solana Token With Ease without Code
                  </h1>

                  <p className="text-default-300 md:text-lg max-w-lg">
                    Launch, manage, and share your SPL tokens instantly!<br />
                    All in one Solana development.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a
                      onClick={() => setOpenCreateModal(true)}
                      className="hover:bg-primary-hover group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 cursor-pointer"
                    >
                      <span className="bg-primary/20 text-primary me-2 flex h-11 w-11 items-center justify-center rounded-full group-hover:bg-white/10 group-hover:text-white">
                        <MdGeneratingTokens />
                      </span>
                        Create
                    </a>
                    <div className="relative z-50
                    text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                      <WalletMultiButton />
                    </div>
                  </div>
                </div>

                {/* Right: Image Transition */}
                <div className="overflow-hidden h-[600px] pt-6 pb-6 flex items-center">
                  <div className="marquee grid grid-cols-2 gap-6">
                    <div className="relative m-auto flex flex-col gap-6 overflow-hidden">
                      <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-center gap-6">
                        {["img-9", "img-14", "img-21", "img-22", "img-10"].map((image, index) => (
                          <img key={index} src={`assets/images/ai/${image}.jpg`} alt="" className="aspect-1 h-full w-60 rounded-xl object-cover" />
                        ))}
                      </div>
                      <div aria-hidden="true" className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-7", "img-8", "img-10", "img-11", "img-13"].map((image, index) => (
                          <img key={index} src={`assets/images/ai/${image}.jpg`} alt="" className="aspect-1 h-full w-60 rounded-xl object-cover" />
                        ))}
                      </div>
                    </div>

                    <div className="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                      <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-6", "img-10", "img-11", "img-22", "img-13"].map((image, index) => (
                          <img key={index} src={`assets/images/ai/${image}.jpg`} alt="" className="aspect-1 h-full w-60 rounded-xl object-cover" />
                        ))}
                      </div>
                      <div aria-hidden="true" className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-9", "img-14", "img-21", "img-22", "img-10"].map((image, index) => (
                          <img key={index} src={`assets/images/ai/${image}.jpg`} alt="" className="aspect-1 h-full w-60 rounded-xl object-cover" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { FC } from "react";

export const FaqView: FC = () => {
  const questions = [
    {
      question: "How do I connect my wallet?",
      answer:
        "Click on the 'Connect Wallet' button at the top right. We support Phantom, Solflare, and other Solana-compatible wallets.",
      id: "faq-1",
    },
    {
      question: "What is the Solana NFT Marketplace?",
      answer:
        "It's a decentralized platform where users can mint, buy, and sell NFTs using Solana. Transactions are fast and cost-effective.",
      id: "faq-2",
    },
    {
      question: "How do I mint an NFT?",
      answer:
        "Go to the 'Create' section, upload your artwork, set metadata like name and royalties, and click 'Mint'. Make sure your wallet has enough SOL for fees.",
      id: "faq-3",
    },
    {
      question: "What are the fees for listing NFTs?",
      answer:
        "Listing is free. However, we charge a small marketplace fee (e.g., 2%) when your NFT is sold.",
      id: "faq-4",
    },
    {
      question: "Can I transfer NFTs to another wallet?",
      answer:
        "Yes, go to your collection, select the NFT, and click 'Transfer'. Enter the recipient's Solana wallet address.",
      id: "faq-5",
    },
    {
      question: "Is my NFT data stored on-chain?",
      answer:
        "The ownership and metadata are stored on-chain, while the media (images, videos) is hosted on Arweave or IPFS for permanence and reliability.",
      id: "faq-6",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-white">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Any Questions
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              maiores veritatis quia temporibus illo molestias eligendi ipsum at
              voluptates maxime. Quaerat laudantium repudiandae ab inventore
              beatae necessitatibus enim magnam distinctio.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {questions.map((question, index) => (
            <details
              key={index}
              className="group bg-default-950/40 overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl transition-all"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-x-3 px-6 py-4 text-white">
                <h5 className="flex text-base font-semibold capitalize">
                  <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
                  {question.question}
                </h5>
                <i className="transition-transform duration-300 group-open:rotate-180">
                  ▼
                </i>
              </summary>
              <div className="px-6 pb-4 pt-0">
                <p className="text-default-300 mb-2 text-sm font-medium">
                  {question.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
        <p className="text-cyan-300 text-2xl mt-10 font-medium text-center drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          Fueling the decentralized dream. Let&apos;s create magic. ✨
        </p>
      </div>
    </section>
  );
};

import React, { FC } from 'react';

export const OfferView: FC = ({}) => {
  return (
    <section id="price" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Solana Token Popularity
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Explore the most powerful tools in the Solana ecosystem. From launching your own token to analyzing top performers, everything you need to build and grow is right here.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* CARD 1 */}
          <ToolCard
            title="Create a Custom Token"
            description="Launch your own SPL token on Solana within seconds. Choose the name, symbol, and supply — no coding required."
          />
          {/* CARD 2 */}
          <ToolCard
            title="Airdrop Tokens"
            description="Distribute tokens to your community easily with our airdrop tool. Perfect for giveaways, marketing, or testing."
          />
          {/* CARD 3 */}
          <ToolCard
            title="Track Top Tokens"
            description="Stay updated with the most popular tokens on Solana. View rankings by market cap, volume, and holders."
          />
          {/* CARD 4 */}
          <ToolCard
            title="Send Transactions"
            description="Send and receive tokens instantly on Solana. Experience fast, low-cost transactions on a scalable chain."
          />
          {/* CARD 5 */}
          <ToolCard
            title="Explore Solana"
            description="Dive into Solana Explorer to track blocks, tokens, and wallet activities in real-time across the network."
          />
          {/* CARD 6 */}
          <ToolCard
            title="Mint NFT Collections"
            description="Create NFT collections backed by your token. Add metadata, supply caps, and royalty settings with ease."
          />
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="space-y-6">
    <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
      <div className="p-10">
        <i className="text-primary h-10 w-10"></i>
        <h3 className="mb-4 mt-8 text-2xl font-medium text-white">{title}</h3>
        <p className="text-default-100 mb-4 text-sm font-medium">{description}</p>
        <a href="#" className="text-primary group relative inline-flex items-center gap-2">
          <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
            Read More
          </span>
        </a>
      </div>
    </div>
  </div>
);

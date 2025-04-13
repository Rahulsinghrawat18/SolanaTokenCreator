import { FC } from "react";
import dynamic from "next/dynamic";

import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";
import NetworkSwitcherSVG from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();
  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
        <NetworkSwitcherSVG />
        <select
          value={networkConfiguration}
          onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
          className="bg-transparent border-none text-white px-4 py-2 rounded-md"
          >
          <option value="mainnet-beta" 
          className="bg-gray-900 text-white p-10"
          >
            Main
          </option>
          <option value="devnet" 
          className="bg-gray-900 text-white p-2"
          >
            Dev
          </option>
          <option value="testnet" 
          className="bg-gray-900 text-white p-2"
          >
            Test
          </option>
        </select>
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});

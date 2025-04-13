import create, { State } from "zustand";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

interface UserSOLBalanceStore extends State {
  balance: number;
  getUserSOLBalance: (publickey: PublicKey, connection: Connection) => void;
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publickey, Connection) => {
    let balance = 0;

    try {
      balance = await Connection.getBalance(publickey, "confirmed");
      balance = balance / LAMPORTS_PER_SOL;
    } catch (error) {
      console.log("Balance:", balance);
    }
  },
}));

export default useUserSOLBalanceStore;

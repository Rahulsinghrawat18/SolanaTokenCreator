import create, { State } from "zustand";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

interface UserSOLBalanceStore extends State {
  balance: number;
  getUserSOLBalance: (publickey: PublicKey, connection: Connection) => void;
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publickey, connection) => { 
    let balance = 0;

    try {
      balance = await connection.getBalance(publickey, "confirmed");
      balance = balance / LAMPORTS_PER_SOL;
      set({ balance });
    } catch (error) {
      console.error("Error fetching balance:", error);
      set({ balance: 0 }); 
    }
  },
}));

export default useUserSOLBalanceStore;

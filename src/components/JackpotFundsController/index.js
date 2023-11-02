import React, { useEffect, useState } from "react";
import ConnectButton from "../ConnectButton";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { addFund, getFund } from "../../utils/contract";
import "./JackpotFundsController.css";

const JackpotFundsController = () => {
  const [jackpotFunds, setJackpotFunds] = useState(0);
  const [enteredAmount, setEnteredAmount] = useState("");

  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const wallet = useWallet();

  const handleAmountChange = (event) => setEnteredAmount(event.target.value);

  const handleAddFunds = async () => {
    if (!publicKey) {
      alert("Please connect wallet");

      return;
    }
    const amount = parseInt(enteredAmount, 10);

    if (!isNaN(amount) && amount > 0) {
      const { status } = await addFund(connection, wallet, amount);
      if (status) {
        getUserFund();
        setJackpotFunds(jackpotFunds + amount);
      }
    } else {
      alert("Please enter a valid positive integer amount.");
    }
    setEnteredAmount("");
  };
  const getUserFund = async () => {
    const { data } = await getFund(connection, wallet);
    setJackpotFunds(data);
  };
  useEffect(() => {
    getUserFund();
  }, []);
  return (
    <div className="jackpot-funds-controller">
      <ConnectButton />
      <h2>Jackpot Funds: {jackpotFunds}</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={enteredAmount}
        onChange={handleAmountChange}
      />
      <button onClick={handleAddFunds}>Add Funds</button>
    </div>
  );
};

export default JackpotFundsController;

import { AnchorProvider, BN, Program } from "@project-serum/anchor";
import idl from "./idl.json"
import { PublicKey } from "@solana/web3.js";
//Contract abi
const Abi = idl
const programID = new PublicKey(idl.metadata.address)
const account = new PublicKey("X76WPHcZmzEcd8Nis817TGBFXq2j6Cf9DQqMHhCqJ2s")
export const getFund = async (connection, wallet) => {
    try {
        const program =await  getProvider(connection, wallet)
        const funds = await program.account.fund.fetch(account)
        return { status: true, message: 'Deleted successfully', data: funds.fund.toNumber() }
    }
    catch (e) {
        console.log(e)
        return { status: false, message: 'something went wrong!', data: 0 }
    }
}


export const addFund = async (connection, wallet, amount) => {
    try {
        const program = await getProvider(connection, wallet)
        const funds = await (await program).methods.addFund(new BN(amount)).accounts({
            fund: account,
            owner: wallet.publicKey
        }
        ).signers([]).rpc()

        return { status: true, message: 'Deleted successfully', data: funds }
    }
    catch (e) {
        console.log(e)
        return { status: false, message: 'something went wrong!', data: "" }
    }
}

const getProvider = async (connection, wallet) => {
    // creating the provider to interact with contract
    const provider = new AnchorProvider(connection, wallet, { preflightCommitment: 'processed', commitment: 'processed' })
    //Contract instance
    const program = new Program(Abi, programID, provider);
    return program
}
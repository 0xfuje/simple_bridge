import { createContext } from "react";
import { Hop, Chain } from '@hop-protocol/sdk'
import { IProviderProps } from "../interfaces";

const { Wallet } = require('ethers')

export const Context = createContext(null);

function Provider(props: IProviderProps) {
    const privateKey = process.env.PRIVATE_KEY
    const signer = new Wallet(privateKey)
    const hop = new Hop('mainnet', signer)
    console.log(hop.version)
    console.log(hop)

    return (
        <Context.Provider value={null}>
            {props.children}
        </Context.Provider>

    )
}

export default Provider;
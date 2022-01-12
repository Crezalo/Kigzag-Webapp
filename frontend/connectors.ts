import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [137, 80001, 43114, 43113, 56, 97, 250, 4002, 1285, 1287],
});

// Polygon, Avalance, BSC, Fantom, Moonriver

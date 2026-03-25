import "dotenv/config";

import {
  createSmartWalletClient,
  alchemyWalletTransport,
} from "@alchemy/wallet-apis";

import { arbitrumSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { zeroAddress } from "viem";

async function main() {
  const client = createSmartWalletClient({
    transport: alchemyWalletTransport({
      apiKey: process.env.ALCHEMY_API_KEY!,
    }),
    chain: arbitrumSepolia,
    signer: privateKeyToAccount(process.env.PRIVATE_KEY! as `0x${string}`),
    paymaster: {
      policyId: process.env.POLICY_ID!,
    },
  });

  console.log("🚀 Sending transaction...");

  const { id } = await client.sendCalls({
    calls: [
      {
        to: zeroAddress,
        value: 0n,
      },
    ],
  });

  console.log("🆔 Operation ID:", id);

  const status = await client.waitForCallsStatus({ id });

  const txHash = status.receipts?.[0]?.transactionHash;

  console.log("✅ Tx Hash:", txHash);
  console.log(`🔗 https://sepolia.arbiscan.io/tx/${txHash}`);
}

main().catch(console.error);
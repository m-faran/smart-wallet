import { createThirdwebClient } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const clientId = process.env.EXPO_PUBLIC_THIRDWEB_CLIENT_ID!;

if (!clientId) {
  throw new Error("Missing EXPO_PUBLIC_THIRDWEB_CLIENT_ID in .env file");
}

export const client = createThirdwebClient({
  clientId,
});

export const chain = sepolia;
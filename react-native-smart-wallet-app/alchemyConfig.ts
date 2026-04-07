import { createConfig } from '@account-kit/react-native';
import { sepolia, alchemy } from '@account-kit/infra';

export const config = createConfig({
  transport: alchemy({ apiKey: process.env.EXPO_PUBLIC_ALCHEMY_API_KEY! }),
  chain: sepolia,
  policyId: process.env.EXPO_PUBLIC_GAS_POLICY_ID!,
});
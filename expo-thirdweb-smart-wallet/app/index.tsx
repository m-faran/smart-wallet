import { StyleSheet, View, useColorScheme } from "react-native";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";
import { sepolia } from "thirdweb/chains"; // 1. Imported Ethereum Sepolia
import { client } from "@/constants/thirdweb";

// 2. Stripped out MetaMask, Coinbase, TrustWallet, etc.
const wallets = [
    inAppWallet({
        auth: {
            // Keep only the login methods you want your users to see
            options: [
                "email",
                "phone",
                "google",
                "apple",
                "facebook"
            ],
        },
        smartAccount: {
            chain: sepolia, // 3. Set Smart Account to deploy on Eth Sepolia
            sponsorGas: true, // Gasless enabled!
        },
    }),
];

export default function HomeScreen() {
    const theme = useColorScheme();

    return (
        <View style={styles.container}>
            {/* 4. Removed the ParallaxScrollView and all the demo fluff */}
            <ConnectButton
                client={client}
                theme={theme || "dark"}
                wallets={wallets}
                chain={sepolia} // 5. Set the UI to interact with Eth Sepolia
                connectButton={{
                    label: "Sign in to Smart Wallet",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212", // Clean, dark background to make the button pop
    },
});
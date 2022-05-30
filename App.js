import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                source={require("./assets/woman-2592247_1920.jpg")}
            ></ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

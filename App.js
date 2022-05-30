import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                source={require("./assets/woman-2592247_1920.jpg")}
            >
                <View style={styles.btnFather}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.startBtn}>Let's Start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    btnFather: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: 30,
        marginBottom: 150,

        justifyContent: "flex-end",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "blue",
    },
    startBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});

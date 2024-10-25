
import { Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const imagens = {
    boleto:require("../img/boleto.png"),
    pix: require("../img/pix.png"),
    dinheiro: require("../img/dinheiro.png"),
   
    // boleto: require("../img/boleto.png"),
    // boleto: require("../img/boleto.png"),
    // boleto: require("../img/boleto.png"),
}

export default function Card({texto, imagem, onPress}) {

    return (


        <TouchableOpacity style={styles.footerCard} onPress={onPress}>
            <Image source={imagens[imagem]} />
            <Text style={styles.footerCardText}>{texto}</Text>
        </TouchableOpacity>


    )




}

const styles = StyleSheet.create({

    footerCard: {
        marginTop: 37,
        marginLeft: 8,
        width: 100,
        height: 127,
        elevation: 5,
        borderRadius: 27,
        backgroundColor: "#9500F6",
        justifyContent: "space-between",
        padding: 15,
    },
    footerCardText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "600",
    },
});

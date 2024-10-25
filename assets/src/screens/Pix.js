import { useState } from "react"
import { Button, View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function Pix({ navigation, route }) {

    const { saldo, setSaldo } = route.params;
    const [chavePix, setChavePix] = useState("");
    const [valorPix, setValorPix] = useState("");
    const enviarPix = () => {

        const valor = parseFloat(valorPix);

        if (valor <= saldo) {

            setSaldo(saldo - valor);

            navigation.goBack();




        } else {

            alert("Saldo insuficiente")

        }


    }
    return (


        <View style={styles.container}>

            <Text style={styles.title}>Chave Pix</Text>
            <TextInput style={styles.input} placeholder="Insira uma chave pix" value={chavePix} onChangeText={setChavePix} />


            
            <TextInput style={styles.input} placeholder="Digite um valor" value={valorPix} onChangeText={setValorPix} keyboardType="numeric" />
            <Button title="Enviar pix" onPress={enviarPix} />




        </View>


    );






}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#820AD1', // fundo roxo
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
    },
});

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";



import Mastercard from "../img/mastercard.png";
import Setting from "../img/setting.png";
import Wallet from "../img/Wallet.png";
import { useState } from "react";
import Card from "../components/Card";


import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../Context/ThemeContext";


export default function Home({ navigation }) {
  const [saldo, setSaldo] = useState(200);
  const { isDarkMode, toggleTheme } = useTheme();
  const handlePix = () => { navigation.navigate("Pix", { saldo, setSaldo }) }


  const styles = isDarkMode ? dark : light



  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={require("../img/logo.png")} />

          <TouchableOpacity onPress={toggleTheme}>
            <Image source={Setting} />

          </TouchableOpacity>

        </View>


        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={Mastercard} />
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Luqueta</Text>
            <View />
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
            <Image source={Wallet} />
          </View>
          <Text style={styles.cardDetailsTextValue}>R${saldo}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>
        <ScrollView
          style={styles.footerScrollCardContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >

          <Card texto="Fazer Pix" imagem="pix" onPress={handlePix} />
          <Card texto="Pagar um boleto" imagem="boleto" onPress={handlePix} />
          <Card texto="Fazer um depósito" imagem="dinheiro" onPress={handlePix} />
          <Card texto="Fazer Pix" imagem="pix" onPress={handlePix} />
          <Card texto="Fazer Pix" imagem="pix" onPress={handlePix} />
          <Card texto="Fazer Pix" imagem="pix" onPress={handlePix} />

        </ScrollView>
      </View>
    </View>
  );
}


const dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooter: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooterText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 36,
  },
  cardDetails: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    height: 120,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeaderText: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  cardDetailsTextValue: {
    color: "#FFF",
    fontSize: 36,
    lineHeight: 54,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    paddingTop: 32,
  },
  footerText: {
    marginLeft: 50,
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  footerScrollCardContainer: {
    width: "100%",
    height: 300,
    paddingHorizontal: 19,
  },
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

const light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooter: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooterText: {
    fontSize: 24,
    color: "black",
    fontWeight: "600",
    lineHeight: 36,
  },
  cardDetails: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    height: 120,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeaderText: {
    color: "black",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  cardDetailsTextValue: {
    color: "black",
    fontSize: 36,
    lineHeight: 54,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    paddingTop: 32,
  },
  footerText: {
    marginLeft: 50,
    color: "black",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  footerScrollCardContainer: {
    width: "100%",
    height: 300,
    paddingHorizontal: 19,
  },
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
    color: "black",
    fontSize: 12,
    fontWeight: "600",
  },
});

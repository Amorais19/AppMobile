import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide";
import { IPagina } from "../../../App";

export function RolePassTree({ setPageI }: IPagina) {
    const cogumelos = require('../../assets/Wallpapper.png')
    const money = require('../../assets/bolsa-de-dinheiro.png')
    return(
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styles.container}>
                <View style={styles.flex}>
                    <Text style={styles.title}>Life Style</Text>
                    <Image source={money}/>
                    <Text style={styles.words}>Cuide do seu financeiro, controle seus gastos....</Text>
                </View>
                </View>
            <View style={styles.button}>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
                </View> 
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} />
                </View> 
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(3)} />
                </View> 
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(4)} />
                </View> 
            </View>
        </ImageBackground>
    )
}
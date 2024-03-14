import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { IPagina } from "../../../App";

export function RolePassTwo({ setPageI }: IPagina) {
    const cogumelos = require('../../assets/Wallpapper.png')
    const list = require('../../assets/lista-de-tarefas.png')
    return (
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styles.container}>
                <View style={styles.flex}>
                    <Text style={styles.title}> Life Style </Text>
                    <Image source={list} />
                    <Text style={styles.words}>Anote seus afazeres diários, não esqueça suas tarefas....</Text>
                </View>
            </View>
            <View style={styles.button}>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false} />
                </View>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={true} />
                </View>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false} />
                </View>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={false} />
                </View>
            </View>
        </ImageBackground>
    )
}
import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide";
import { IPagina } from "../../../App";

export function RolePassFor({ setPageI }: IPagina) {
    const cogumelos = require('../../assets/Wallpapper.png')
    return(
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View style={styles.flex}>
                    <Text style={styles.title}> Life Style </Text>
                    <Text style={styles.words}>Seja bem-vindo ao <Text style={styles.titleText}>Life Style</Text>!
                    Aqui você consegue se manter organizado utilizando nossas 
                    mais fáceis ferramentas de uso diário.</Text>
                    <View>
                        <Text style={styles.buttonRegistrar}>Registre-se</Text>
                        <Text style={styles.textEntrar}>Já possui conta? Entrar</Text>
                    </View>
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
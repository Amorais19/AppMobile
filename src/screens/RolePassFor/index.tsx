import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
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
                        <View>
                            <ButtonSlides onPressI={() => setPageI(5)}>
                                <Text style={styles.buttonRegister}>Registre-se</Text>
                            </ButtonSlides>
                        </View>
                        <Text style={styles.textEntrar}>Já possui conta? <Text style={styles.textNegrito}>Entrar</Text></Text>
                    </View>
                </View>
            </View>
            <View style={styles.button}>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false}/>
                </View> 
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false}/>
                </View> 
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false}/>
                </View> 
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={true}/>
                </View> 
            </View>
        </ImageBackground>
    )
}
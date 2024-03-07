import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide";
import { IPagina } from "../../../App";

export function RolePassOne({ setPageI }: IPagina) {
    const cogumelos = require('../../assets/Wallpapper.png')
    const calendar = require('../../assets/calendar.png')
    return(
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View style={styles.flex}>
                    <Text style={styles.title}>Life Style</Text>
                    <Image source={calendar}/>
                    <Text style={styles.words}>Organize sua agenda, marque seus compromissos....</Text>
                </View>
            </View>
            <View>
                <ButtonSlide onPressI={() => setPageI(1)} />
                <ButtonSlide onPressI={() => setPageI(2)} />
                <ButtonSlide onPressI={() => setPageI(3)} />
                <ButtonSlide onPressI={() => setPageI(4)} />
            </View> 
        </ImageBackground>
    )
}
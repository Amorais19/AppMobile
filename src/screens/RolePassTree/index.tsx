import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"

export function RolePassOne() {
    const cogumelos = require('../../assets/Wallpapper.png')
    return(
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View style={styles.flex}>
                    <Text style={styles.title}> Life Style </Text>
                    <Text style={styles.words}>Seja bem-vindo ao Life Style!
                    Aqui você consegue se manter organizado utilizando nossas 
                    mais fáceis ferramentas de uso diário.</Text>
                    
                </View>
            </View>
        </ImageBackground>
    )
}
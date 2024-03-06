import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"

export function RolePassOne() {
    const cogumelos = require('../../assets/Wallpapper.png')
    const list = require('../../assets/lista-de-tarefas.png')
    return(
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View style={styles.flex}>
                    <Text style={styles.title}> Life Style </Text>
                    <Image source={list}/>
                    <Text style={styles.words}>Anote seus afazeres diários, não esqueça suas tarefas....</Text>
                </View>
            </View>
        </ImageBackground>
    )
}
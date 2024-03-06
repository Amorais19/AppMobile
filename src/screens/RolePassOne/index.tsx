import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"

export function RolePassOne() {
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
        </ImageBackground>
    )
}
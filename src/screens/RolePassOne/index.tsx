import { ImageBackground, View, Text, Image, ViewComponent } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"

export function RolePassOne() {
    const cogumelos = require('../../assets/Wallpapper.png')
    const calendar = require('../../assets/calendar.png')
    return(
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View style={styles.flex}>
                    <Text> Life Style </Text>
                    <View style={styleContainer.container}>
                        <Image source={calendar} style={styles.cont}/>
                        <Text style={styles.words}>Organize sua agenda, marque seus compromissos....</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
import { ImageBackground, View, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"

export function RolePassOne() {
    const cogumelos = require('../../assets/Wallpapper.png')
    const calendar = require('../../assets/calendar.png')
    return(
        <ImageBackground source={cogumelos} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View>
                    <Text> Life Style </Text>
                </View>
                <View>
                    <Image source={calendar}/>
                </View>
                <View>
                    <Text style={styles.title}>Organize sua agenda, marque seus compromissos....</Text>
                </View>
            </View>
        </ImageBackground>
    )
}
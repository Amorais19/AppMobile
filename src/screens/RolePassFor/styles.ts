import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    flex: {
        flex: 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        width: 350,
    },
    words: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 23,
    },
    title: {
        color: '#FFF',
        fontSize: 40,
        fontFamily: 'Slackey_400Regular'
    },
    titleText: {
        color: '#FFF',
        fontFamily: 'Slackey_400Regular'
    },
    button: {
        flexDirection: 'row',
        paddingBottom: 20,
        alignItems: 'center'
    },
    buttonSpace: {
        paddingHorizontal: 15,
    },
    buttonRegistrar: {
        color: '#FFF',
        fontSize: 25,
        backgroundColor: '#5F9898',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        textAlign: 'center'
    },
    textEntrar: {
        color: '#FFF',
        textAlign: 'center'
    }
  });
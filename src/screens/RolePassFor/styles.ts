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
        fontFamily: 'Slackey_400Regular',
        paddingTop: 25,
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
    buttonRegister: {
        color: '#FFF',
        fontSize: 30
    },
    textEntrar: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15
    },
    textNegrito: {
        fontWeight: 'bold',
    },
  });
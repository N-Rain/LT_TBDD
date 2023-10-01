import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';

function Page_1b() {

    return (
        <View style={styles.container}>
            <View style={[styles.ctn1, { flex: 2 }]}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.ellipseIcon}
                        source={require('../assets/Ellipse1.png')}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 66 }}>
                        <Text style={styles.text1}>GROW</Text>
                        <Text style={styles.text1}>YOUR BUSINESS</Text>
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <Text style={[styles.text1, { fontSize: '15px' }]}>We will help you to grow your business using</Text>
                        <Text style={[styles.text1, { fontSize: '15px' }]}>online server</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.ctn1, { flex: 1 }]}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.loginButton]}
                        onPress={() => console.log('Login pressed')}
                    >
                        <Text style={[styles.buttonText, styles.loginText]}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={{ width: '50px' }}></View>
                    <TouchableOpacity
                        style={[styles.button, styles.signupButton]}
                        onPress={() => console.log('Signup pressed')}
                    >
                        <Text style={[styles.buttonText, styles.signupText]}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #00CCF9 0%, #00CCF9 100%)',
        alignItems: 'center',
        justifyContent: 'center',


    },
    ctn1: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ellipseIcon: {
        width: '142px',
        height: '142px',
        marginTop: 69,
    },
    text1: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: '700',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: '15%',
        // marginBottom: '94px'
        // marginTop:'100px'
    },
    loginButton: {
        backgroundColor: '#E3C000',
    },

    signupButton: {
        backgroundColor: '#E3C000',
    },
    button: {
        width: 119,
        height: 48,
        borderRadius: 10, // Độ bo tròn để làm góc bo tròn
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 24,
    },
    loginText: {
        color: '#000',
    },
    signupText: {
        color: '#000',
    },
});

export default Page_1b;
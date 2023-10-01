import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-web';

function Page_1b() {

    return (
        <View style={styles.container}>
            <View style={[styles.ctn1, { flex: 1 }]}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/lock.png')}
                    />
                </View>
                <View style={{ }}>
                    <View style={{ marginTop: 37 }}>
                        <Text style={styles.text1}>FORGET</Text>
                        <Text style={styles.text1}>PASSWORD</Text>
                    </View>
                    <View style={{ marginTop: 50}}>
                        <Text style={[styles.text1, { fontSize: '15px' }]}>Provide your account's email for which you</Text>
                        <Text style={[styles.text1, { fontSize: '15px' }]}>want to reset your password</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.ctn1, { flex: 1, marginTop:10 }]}>
                <View style={[{flexDirection:'row', backgroundColor:'#C4C4C4',marginBottom:43},styles.ctn1]}>
                    <Image style={{width: '48px', height: '45px', }}
                        source={require('../assets/mail.png')}
                    />
                    <TextInput
                    style = {[{width: '305px', height:'45px',fontSize:'15px'}]}
                    placeholder='Email'
                    placeholderTextColor='#000'
                    
                
                    />

                    
                </View>


                <View style={[styles.buttonContainer,{}]}>
                    <TouchableOpacity
                        style={[styles.button, styles.nextButton, { width: '353px' }]}
                        onPress={() => console.log('Next pressed')}
                    >
                        <Text style={[styles.buttonText, styles.nextText]}>NEXT</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #C7F4F6 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
        alignItems: 'center',
        justifyContent: 'center',


    },
    ctn1: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: '105px',
        height: '117px',
        marginTop: 76,
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
    nextButton: {
        backgroundColor: '#E3C000',
    },

    signupButton: {
        backgroundColor: '#E3C000',
    },
    button: {
        width: 305,
        height: 45,
        // borderRadius: 10, // Độ bo tròn để làm góc bo tròn
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
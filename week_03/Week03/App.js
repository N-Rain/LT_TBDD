import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>

      
      <View style={{ flex: 1 }}>
        <Image
          style={styles.ellipseIcon}
          source={require('./assets/Ellipse8.png')} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text1}>GROW<br />YOUR BUSINESS</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.text1, { fontSize: '15px', marginTop:'90px', height: '36px' }]}>We will help you to grow your business using
          <br />online server</Text>
      </View>

      <View style={[styles.buttonContainer, { flex: 1 }]}>
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

      <StatusBar style="auto" />
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
  ellipseIcon: {
    width: '140px',
    height: '140px',
    marginTop: '105px',
    // marginBottom:'52px'


  },
  text1: {
    // flex: 2,
    fontSize: '25px',
    fontWeight: "700",
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontStyle: 'normal',
    height: '58px',
    marginTop: '140px'


  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: '15%',
    // marginBottom: '94px'
    marginTop:'100px'
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

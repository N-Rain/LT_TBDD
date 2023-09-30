import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Image
        style={styles.ellipseIcon}
        source={require('./assets/Ellipse8.png')}
      />

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
    // marginBottom: '395px',
    // marginTop:'105px',
    marginHorizontal: '150'
  }



});

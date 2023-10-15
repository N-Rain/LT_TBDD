import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

function Page_2() {
  return (
    <View style={styles.container}>
        <View style = {[styles.btn2,{backgroundColor:'pink'}]}>

        </View>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
    paddingHorizontal:13,
    paddingVertical:13
  },
  ctn1:{
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    
  },
  ctn2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    
  },
  ctn3:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    
  },
  text:{
    
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontWeight:'400'
  },
  text1:{
    color:'#000',
    fontSize:15,
  },
  text2:{
    color:'#000',
    fontSize:15,
  },
  img:{
    width:"80%",
    height:"100%",
    
  },
  btnXong:{
    
    
  }
});

export default Page_2;
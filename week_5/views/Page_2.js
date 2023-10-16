import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Pressable } from 'react-native';

function Page_2({navigation}) {
    const[img, setImg] = useState(require('../assets/img/vs_red.png'))
    const[textColor, setTextColor] = useState('xanh')

    const changeColor = (color)=>{
      setTextColor(color)
    }
  return (
    <View style={styles.container}>
        <View style = {[styles.ctn2,{flex:1}]}>
            <View style = {[styles.ctn2,{flex:1}]}>
                <Image
                    style = {styles.img}
                    source={img}
                    resizeMode='contain'
                />
            </View>
            <View style = {[styles.ctn3,{flex:2}]}>
                <View style = {styles.ctnText}>
                    <Text style = {[styles.text]}>Điện Thoại Vsmart Joy 3</Text>
                    <Text style = {[styles.text]}>Hàng chính hãng</Text>
                </View>
                <View style = {[styles.ctnText,{}]}>
                    <Text style = {[styles.text]}>Màu: 
                        <Text style = {[styles.text, styles.text1]}> {textColor}</Text>
                    </Text>
                </View>
                <View style = {[styles.ctnText,{}]}>
                    <Text style = {[styles.text]}>Cung cấp bởi 
                        <Text style = {[styles.text, styles.text1]}> Tiki Tradding</Text>
                    </Text>
                </View>
                <View style = {[styles.ctnText,{}]}>
                    <Text style = {[styles.text, styles.text2]}>1.790.000 đ</Text>
                </View>
            </View>
        </View>
        <View style = {[styles.ctn3,{flex:3,backgroundColor:'#C4C4C4'}]}>
            
            <View style = {{flex:6}}>
                <View style = {{marginVertical:13, marginHorizontal:17}}>
                    <Text style = {[styles.text,{fontSize:18}]}>Chọn một màu bên dưới:</Text>
                </View>
                <View style = {[styles.ctn1,{flex:6}]}>
                    <Pressable
                        style = {[styles.pChonMau1,{backgroundColor:'#C5F1FB'}]}
                        onPress={()=>{
                            setImg(require('../assets/img/vs_silver.png'))
                            changeColor('bạc')
                        }}
                    />
                    <Pressable
                        style = {[styles.pChonMau2,{backgroundColor:'#F30D0D'}]}
                        onPress={()=>{
                            setImg(require('../assets/img/vs_red.png'))
                            changeColor('đỏ')
                        }}
                    />
                    <Pressable
                        style = {[styles.pChonMau3,{backgroundColor:'#000'}]}
                        onPress={()=>{
                            setImg(require('../assets/img/vs_black.png'))
                            changeColor('đen')
                        }}
                    />
                    <Pressable
                        style = {[styles.pChonMau4,{backgroundColor:'#234896'}]}
                        onPress={()=>{
                            setImg(require('../assets/img/vs_blue.png'))
                            changeColor('xanh')
                        }}
                        
                    />
                </View>
                <View style = {{flex:1, alignItems:'center'}}>
                    <TouchableOpacity
                        style = {[styles.btnXong,{}]}
                        onPress={()=>{
                            navigation.navigate('Page_1',img)
                        }}
                    >
                        <View style = {{alignItems:'center'}}>
                            <Text style={[styles.text,styles.textBtn]}>XONG</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            
            
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
    // paddingHorizontal:17,
    // paddingVertical:17
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
    // paddingVertical:'17',
    // paddingHorizontal:'10',
    // alignItems:'center',
    // justifyContent:'center',
    width:'100%',
    height:'100%',
    
  },
  ctnText:{
    marginVertical:9,
    marginLeft:20
  },
  text:{
    color:'#000',
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontWeight:'400',
    fontSize:15,
  },
  text1:{
    color:'#000',
    fontWeight:'700',
    fontSize:15,
    
  },
  text2:{
    color:'#000',
    fontWeight:'700',
    fontSize:18,
    
  },
  textBtn:{
    color:'#F9F2F2',
    fontWeight:'700',
    fontSize:20,
    
  },
  img:{
    
    width:"95%",
    height:"100%",
    
  },
  pChonMau1:{
    width:'22.8%',
    height:'16.8%',
    marginVertical:13,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    shadowRadius:9.51,
    shadowOffset: {
        width: 0,
        height: 4, 
      },
    elevation:4,
    
    
  },
  pChonMau2:{
    width:'22.8%',
    height:'16.8%',
    marginVertical:13,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    shadowRadius:9.51,
    shadowOffset: {
        width: 0,
        height: 4, 
      },
    elevation:4,
    
    
  },
  pChonMau3:{
    width:'22.8%',
    height:'16.8%',
    marginVertical:13,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    shadowRadius:9.51,
    shadowOffset: {
        width: 0,
        height: 4, 
      },
    elevation:4,
    
    
  },
  pChonMau4:{
    width:'22.8%',
    height:'16.8%',
    marginVertical:13,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    shadowRadius:9.51,
    shadowOffset: {
        width: 0,
        height: 4, 
      },
    elevation:4,
    
    
  },
  btnXong:{
    backgroundColor:'rgba(25, 82, 226, 0.58)',
    
    justifyContent:'center',
    width:'90%',
    height:'80%',
    borderRadius:10
  }
});

export default Page_2;
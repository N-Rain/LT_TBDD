import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

function Page_1() {
  return (
    <View style={styles.container}>
      <View style={[styles.ctn3,{flex:8}]}>
            <View style={[styles.ctn1,{flex:5}]}>
                <Image
                    style ={styles.img}
                    source={require('../assets/img/vs_blue.png')}
                    resizeMode='contain'
                />
            </View>
            <View style={[styles.ctn1,{flex:3}]}>
                <View style={[styles.ctn1,{flex:1}]}>
                    <Text style={[styles.text,styles.text1,{}]}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>
                
                <View style={[styles.ctn2,{flex:1}]}>
                    <View style={[styles.ctn2,{flex:1}]}>
                        <Image
                            style ={styles.star}
                            source={require('../assets/img/star.png')}
                            resizeMode='contain'
                        />
                        <Image
                            style ={styles.star}
                            source={require('../assets/img/star.png')}
                            resizeMode='contain'
                        />
                        <Image
                            style ={styles.star}
                            source={require('../assets/img/star.png')}
                            resizeMode='contain'
                        />
                        <Image
                            style ={styles.star}
                            source={require('../assets/img/star.png')}
                            resizeMode='contain'
                        />
                        <Image
                            style ={styles.star}
                            source={require('../assets/img/star.png')}
                            resizeMode='contain'
                        />
                    </View>
                <View style = {[styles.ctn1,{flex:1}]}>
                    <Text style={[styles.text,styles.text2,{}]}>(Xem 828 đánh giá)</Text>
                </View>
            </View>
                <View style = {[styles.ctn2,{flex:1, justifyContent:'space-around'}]}>
                    <Text style={[styles.text,styles.text3,{}]}>1.790.000 đ</Text>
                    <Text style={[styles.text,styles.text4,{}]}>1.790.000 đ</Text>
                </View>
                <View style = {[styles.ctn2,{flex:1,justifyContent:'flex-start', width:'85%'}]}>
                    <Text style={[styles.text,styles.text5,{}]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image
                        style ={styles.star}
                        source={require('../assets/img/Group1.png')}
                        resizeMode='contain'
                    />
                </View>
                <View style = {[styles.ctn1,{flex:2, justifyContent:'flex-start'}]}>
                    <TouchableOpacity
                        style = {[styles.btnChonMau,{}]}
                        onPress={()=>alert('af')}
                    >
                        <View style = {[styles.ctn2,{}]}>
                            <View style = {{flex:2,alignItems:'center'}}>
                                <Text style={[styles.text,styles.text1]}>4 MÀU-CHỌN MÀU</Text>
                            </View>
                            <Image
                                style ={[styles.vector,{}]}
                                source={require('../assets/img/Vector.png')}
                                resizeMode='contain'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>

      <View style={[styles.ctn2,{flex:1}]}>
            <TouchableOpacity
                style = {[styles.btnMua,{}]}
                onPress={()=>alert('af')}
            >
                <View style = {{alignItems:'center'}}>
                    <Text style={[styles.text,styles.text6]}>CHỌN MUA</Text>
                </View>
            </TouchableOpacity>
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
  text3:{
    fontSize:18,
    fontWeight:'700'
  },
  text4:{
    color:'rgba(0, 0, 0, 0.58)',
    fontSize:15,
    fontWeight:'700',
    textDecorationLine:'line-through',
    
  },
  text5:{
    color:'#FA0000',
    fontSize:12,
    fontWeight:700
  },
  text6:{
    fontSize:20,
    color:'#FFF',
    fontWeight:'700'
  },
  img:{
    width:"80%",
    height:"100%",
    
  },
  star:{
    width:"15%",
    height:"65%"
  },
  icon1:{
    width:"15%",
    height:"65%"
  },
  vector:{
    width:"15%",
    height:"65%"
  },
  btnChonMau:{
    width:'90%',
    height:'45%',
    paddingVertical:8,
    borderColor:'rgba(0, 0, 0, 0.46)',
    borderWidth:1, 
    borderStyle:'solid',
    borderRadius:10,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    
  },
  btnMua:{
    width:'90%',
    height:'60%',
    backgroundColor:'#EE0A0A',
    paddingVertical:9,
    borderColor:'#CA1536',
    borderWidth:1, 
    borderStyle:'solid',
    borderRadius:10,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    
    
  }
});

export default Page_1;
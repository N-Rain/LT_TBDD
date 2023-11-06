import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity } from 'react-native';

function Page_4() {
  const [data, setData] = useState([]);
  const [txtOrder, setTxtOrder] = useState('');
  const changeTxtOrder = (txt)=>{
    setTxtOrder(txt);
  };
  useEffect(()=>{
      fetch("https://65096472f6553137159b5888.mockapi.io/week_6_shop")
      .then((response) => response.json())
      .then((json)=>{
        setData(json);
      })
  },[]);

  return (
    <View style={styles.container}>
      <View style = {[styles.ctn1,{flex:1, flexDirection:'row',justifyContent: 'space-between'}]}>
          <View style = {{flex:2,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Image
              style = {styles.icon}
              source={require("../assets/img/icon_back.png")}
            />
            <Text style = {[styles.title,{}]}>Your orders</Text>
          </View>
          
          <View style = {{flex:1, alignItems:'flex-end'}}>
            <Image
              style = {styles.icon}
              source={require("../assets/img/icon_search.png")}
            />
          </View>
          
      </View>
      <View style = {[styles.ctn1,{flex:10, alignItems:'flex-start', justifyContent:'flex-start'}]}>
      {
          data.map((item)=>{
            return item.product.map((product)=>{
              if(product.name_prod){
                return(
                  <TouchableOpacity key = {product.id} onPress={()=>changeTxtOrder()}>
                    <View style = {{flex:1,flexDirection:'row', margin:8, justifyContent:'space-between',width:350, borderColor:'#BCC1CA', borderWidth:1, borderRadius:4}}>
                          <View style = {{flex:3,flexDirection:'row', justifyContent:'flex-start'}}>
                            <Image
                              style = {{width:60, height:60}}
                              source={product.image_prod}
                              
                            />
                            <View style = {{justifyContent:'space-between', paddingVertical:7, paddingHorizontal:7}}>
                              <Text style = {{color:'#171A1F',fontSize:16, fontWeight:'700'}}>{product.name_prod}</Text>
                              <Text style = {{color:'#171A1F',fontSize:12, fontWeight:'400'}}>
                                <Image source={require('../assets/img/Frame.png')} style = {{width:12, height:12, alignItems:'center'}}/>
                                ${product.price}
                              </Text>
                            </View>
                          </View>
                          <View style = {{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:8}}>
                            <Image
                              style = {{width:20, height:20}}
                              source={require('../assets/img/icon_tru.png')}
                            />
                            <Image
                              style = {{width:20, height:20}}
                              source={require('../assets/img/icon_them.png')}
                            />
                          </View>
                          
                    </View>
                  </TouchableOpacity>
              
                )
              }
              
          });
          })
        }
        
        
      </View>
      <View style = {[styles.ctn1,{flex:1}]}>
          <TouchableOpacity style = {styles.btn}>
            <Text style = {styles.txtBtn}>GO TO CART</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(222, 225, 230, 0.00)',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
    paddingHorizontal:22,
    paddingVertical:22
  },
  ctn1: {
    alignItems: 'center',
    justifyContent: 'center',
   
    width:'100%',
    height:'100%'
  },
  icon:{
    width:20,
    height:20
  },
  img:{
    width:347,
    height:114
  },
  title:{
    fontSize:24,
    fontWeight:'700',
    color:'#171A1F',
  },
  btn:{
    backgroundColor:'#EFB034',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'95%',
    borderRadius:6
  },
  txtBtn:{
    color:'#FFF',
    fontSize:16
  }
});

export default Page_4;

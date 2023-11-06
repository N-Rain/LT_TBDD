import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

function Page_2({navigation}) {
  const [data, setData] = useState([]);
 
  useEffect(()=>{
      fetch("https://65096472f6553137159b5888.mockapi.io/week_6_shop")
      .then((response) => response.json())
      .then((json)=>{
        setData(json);
        setIsLoading(false);
      })
  },[]);

  return (
    <View style={styles.container}>
      <View style = {[styles.ctn1,{flex:1, flexDirection:'row',justifyContent: 'space-between'}]}>
          <Image
            style = {styles.icon}
            source={require("../assets/img/icon_back.png")}
          />
          <Text style = {styles.title}>Shops Near Me</Text>
          <Image
            style = {styles.icon}
            source={require("../assets/img/icon_search.png")}
          />
      </View>
      <View style = {[styles.ctn1,{flex:20}]}>
        {
          data.map((item)=>{
            return(
              
              <TouchableOpacity key={item.id} 
                onPress={()=>{
                  navigation.navigate('Page_3')
                }}
            >
                <View style = {{margin:6,backgroundColor:'#fff', height:200, shadowColor:'rgba(18, 15, 40, 0.12)', shadowOffset:{width:5, height:5}, shadowOpacity:'0.5', shadowRadius:6}}>
                  <View style = {{flex:1, borderRadius:5}}>
                    <Image
                        source={item.image}
                        style = {styles.img}
                    />
                    <View style = {{paddingHorizontal:8,flexDirection:'row', justifyContent:'space-between', marginTop:2}}>
                        <Image
                          style = {styles.icon}
                          source={item.gioHang}
                        />
                        <Text style = {{color:'#DE3B40',fontSize:14}}>Tempory Unavailable</Text>
                        <Image
                          style = {styles.icon}
                          source={item.iconTime}
                        />
                        <Text style = {{color:'#DE3B40',fontSize:14}}>{item.time}</Text>
                        <Image
                          style = {styles.icon}
                          source={item.iconAddress}
                        />
                    </View>
                    <View style = {{alignItems:'flex-start', padding:5}}>
                      <Text style = {{color:'#171A1F',fontSize:16, fontWeight:'700'}}>{item.name}</Text>
                      <Text style = {{color:'#171A1F',fontSize:14}}>{item.address}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              
            );
          })
        }
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
  }
});

export default Page_2;

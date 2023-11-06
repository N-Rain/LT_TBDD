import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

// function getRandomImagesCafe(data, count) {
//     const cafeImages = data.map((cafe) => cafe.image);
//     const randomImagesCafe = [];
    
//     while (randomImagesCafe.length < count) {
//       const randomIndex = Math.floor(Math.random() * cafeImages.length);
//       const randomImage = cafeImages[randomIndex];
      
//       if (!randomImagesCafe.includes(randomImage)) {
//         randomImagesCafe.push(randomImage);
//       }
//     }
    
//     return randomImagesCafe;
//   }
function Page_1({navigation}) {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [randomImages, setRandomImages] = useState([]);
//   useEffect(()=>{
//       fetch("https://65096472f6553137159b5888.mockapi.io/week_6_shop")
//       .then((response) => response.json())
//       .then((json)=>{
//         setData(json);
//         setIsLoading(false);
//         const randomImages = getRandomImagesCafe(json,3);
//         setRandomImages(randomImages);
//       })
//   },[]);

  return (
    <View style={styles.container}>
      <View style = {[styles.ctn1,{flex:1}]}>
        <Text style = {[styles.title,{}]}>Welcome to Cafe world</Text>
          
      </View>
      <View style = {[styles.ctn1,{flex:5, justifyContent:'space-around'}]}>
            
                    <Image
                        
                        style = {styles.img}
                        source={require('../assets/img/Image.png')}
                    />
                    <Image
                        
                        style = {styles.img}
                        source={require('../assets/img/Image2.png')}
                    />
                    <Image
                        
                        style = {styles.img}
                        source={require('../assets/img/Image_rong.png')}
                    />
        </View>
      <View style = {[styles.ctn1,{flex:1}]}>
          <TouchableOpacity 
            style = {styles.btn}
            onPress={()=>{
                navigation.navigate('Page_2')
            }}
          >
            <Text style = {styles.txtBtn}>GET STARTED</Text>
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
    width:200,
    height:62
  },
  title:{
    fontSize:24,
    fontWeight:'700',
    color:'#171A1F',
  },
  btn:{
    backgroundColor:'#00BDD6',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'60%',
    borderRadius:6
  },
  txtBtn:{
    color:'#FFF',
    fontSize:16
  }
});

export default Page_1;

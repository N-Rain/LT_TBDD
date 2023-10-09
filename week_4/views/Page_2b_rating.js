import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
// import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { AirbnbRating } from 'react-native-ratings';

function Page_2b_rating() {
    
    const [isSended, setSend] = useState(false);

    const handleSend = ()=>{
        setSend(!isSended);
    };
      
    return ( 
        <View style = { styles.container } >

            <View style = {[styles.ctn1,{flex:1}]}>
                <Image style = {styles.imgSP}
                    source={require('../assets/usb.png') }
                />
                <View>
                    <Text style = {[styles.text, styles.text1]}>USB Bluetooth Music Receiver</Text>
                    <Text style = {[styles.text, styles.text1]}>HJX-001- Biến loa thường thành loa</Text>
                    <Text style = {[styles.text, styles.text1]}>bluetooth</Text>
                </View>
            </View>

            <View style = {[styles.ctn2,{flex:4}]}>
                <View style = {[styles.ctn2,{flex:1}]}>
                    <Text style = {[styles.text, styles.text2]}>Cực kỳ hài lòng</Text>
                    {/* rating */}
                    <AirbnbRating
                        reviews={[""]}
                        count={5}
                    />
                </View>

                <View style = {[styles.ctn2,{flex:2, flexDirection:'column'}]}>
                    <TouchableOpacity style = {[styles.btnThem,{flex:1}]}
                        onPress={()=>alert('Đã thêm')}
                    >
                        <View style = {[styles.ctn2,{flexDirection:'row'}]}>
                            <Image style = {styles.imgThem}
                                source={require('../assets/camera.png') }
                            />
                            <Text style = {[styles.text, styles.text2]}>Thêm hình ảnh</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <View style = {[styles.input, styles.text,{flex:4}]}>
                        <TextInput
                            placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
                            multiline={true}     
                        >
                        </TextInput>

                    </View>

                </View>

                <View style = {[styles.ctn2,{flex:1}]}>
                    <TouchableOpacity style = {[styles.btnGui, ] }
                        onPress = {handleSend => alert('Thành công')}>
                        <Text style = {[styles.text,styles.sendText] } > Gửi </Text> 
                    </TouchableOpacity> 
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding:8,
        width:'100%',
        height:'100%',
        paddingHorizontal:33,
        paddingVertical:17

    },
    ctn1:{
       flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        
        

    },
    ctn2:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        
    },
    imgSP:{
        width:70,
        height:70,

    },
    text:{
        color:'#000',
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontStyle:'normal',
        
    },
    text1:{
        fontSize:16
    },
    text2:{
        fontSize:18,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    btnThem:{
        // flex:1,
        borderRadius:5,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#1511EB',
        width:'100%',
        height:'auto',
        padding:16,
        marginBottom:15,
        marginTop:30
    },
    input:{
        flex:2,
        borderRadius:5,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#C4C4C4',
        width:'100%',
        // height:'auto',
        fontSize:18,
        padding:15

    },
    imgThem:{
        width:39,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        marginRight:5
    },
    btnGui:{
        width:'100%',
        backgroundColor:'#0D5DB6',
        padding:10,
        borderRadius:5,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#1511EB'
    },
    sendText:{
        color:'#FFF',
        textAlign:'center',
        fontSize:20
    }




});



export default Page_2b_rating;
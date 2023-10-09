import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
// import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { AirbnbRating } from 'react-native-ratings';
import CheckBox from 'expo-checkbox';


function Page_2c_pw() {
    
    
      
    return ( 
        <View style = { styles.container } >
            <View style = { styles.ctn1 }>

                <View style = {[styles.ctn1,{flex:2}]} >
                    <Text style = {[styles.text, styles.text1]}>PASSWORD</Text>
                    <Text style = {[styles.text, styles.text1]}>GENERATOR</Text>
                    <View style = {styles.ctn3}>
                        <Text style = {[styles.text, styles.text2,styles.txtPW]}></Text>
                    </View>
                    
                </View>

                <View style = {[styles.ctn1,{flex:3}]}>
                    <View style = {[styles.ctn2,{flex:1,justifyContent:'space-between',marginBottom:33}]}>
                        <Text style = {[styles.text, styles.text2]}>Password length</Text>
                        <TextInput
                            style = {[styles.text, styles.text2, styles.input]}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style = {[styles.ctn3,{flex:4}]}>
                        <View style = {[styles.ctn2,{justifyContent:'space-between'}]}>
                            <Text style = {[styles.text, styles.text2]}>Include lower case letters</Text>
                            <CheckBox
                            
                            />  
                        </View>
                        <View style = {[styles.ctn2,{justifyContent:'space-between'}]}>
                            <Text style = {[styles.text, styles.text2]}>Include lower case letters</Text>
                            <CheckBox
                            
                            />
                        </View>
                        <View style = {[styles.ctn2,{justifyContent:'space-between'}]}>
                            <Text style = {[styles.text, styles.text2]}>Include lower case letters</Text>
                            <CheckBox
                            
                            />
                        </View>
                        <View style = {[styles.ctn2,{justifyContent:'space-between'}]}>
                            <Text style = {[styles.text, styles.text2]}>Include lower case letters</Text>
                            <CheckBox
                            
                            />
                        </View>
                        
                    </View>
                        
                </View>

                <View style = {[styles.ctn1,{flex:1}]}>

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage:'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0.00) 87.36%)',
        alignItems: 'center',
        justifyContent: 'center',
        padding:8,
        width:'100%',
        height:'100%',
        paddingHorizontal:19,
        paddingVertical:16

    },
    ctn1:{
        flex: 1,
        backgroundColor:'#23235B',
        alignItems: 'center',
        justifyContent: 'center',
        padding:13,
        width:'100%',
        height:'100%',
        paddingHorizontal:13,
        paddingVertical:35,
        borderRadius:15,
        shadowRadius:'rgba(0, 0, 0, 0.25)'
        
        

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
        color:'#FFF',
        textAlign:'center',
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontStyle:'normal',
        fontWeight:'bold'
        
    },
    text1:{
        fontSize:25
    },
    text2:{
        fontSize:20
    },
    text3:{
        fontSize:18
    },
    input:{
        color:'#151537',
        width:118,
        height:33,
        backgroundColor:'#FFF',
        marginLeft:20

    },
    txtPW:{
        width:'100%',
        height:'50%',
        backgroundColor:'#151537',
        
        
    }
    




});



export default Page_2c_pw;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
// import Modal from 'react-native-modal';
import React, { useState } from 'react';

function Page_2a() {
    //khai báo
    const [isLogged, setIsLogged] = useState(false);
    const [isLoginModal, setLoginModal] = useState(false);

    //xử lý
    const handleLogin = ()=>{
        setIsLogged(!isLogged);
        setLoginModal(true);
    };
    const closeModal = ()=>{
        setLoginModal(false)
    }
      
    return ( 
        <View style = { styles.container } >

            <View style = {[styles.ctn1, { flex: 2 }] } >
                {/* <View style = {{ flex: 1 ,flexDirection: 'row'} } >
                    <Text style = {[styles.loginText, styles.ctn1] } > LOGIN </Text> 
                    <View></View>
                 </View> 
                  */}
                <View style = {[styles.ctn1, { flex: 2 }] } >
                    <View style = {[styles.loginCtn]}>
                        <Text style = {[styles.loginText,{color:'#000',fontSize:30}]} > LOGIN </Text>  
                    </View> 
                    <View style = {[styles.input] } >
                        <Image style = { styles.img }
                                source = {require('../assets/avatar_user.png') }/> 
                        <TextInput style = { styles.textInput }
                                placeholder = 'Name' />
                    </View> 
                    <View style = {[styles.input] } >
                        <Image style = { styles.img }
                            source = {require('../assets/lock.png') }/> 
                        <TextInput style = { styles.textInput }
                            placeholder = 'Password' />
                        <Image style = {[styles.imgRight] }
                            source = {require('../assets/eye.png') }/> 
                    </View>

                </View> 
            </View> 
            <View style = {{ flex: 1 } } >
                <View style = {[styles.buttonContainer, {}] } >
                    <TouchableOpacity style = {[styles.button, styles.loginButton, { width: 330 }] }
                        onPress = {handleLogin => alert('Thành công')}>
                        <Text style = {[styles.loginText] } > LOGIN </Text> 
                    </TouchableOpacity> 
                    
                    {/* <Modal 
                        modal = {isLoginModal}
                        onBackdropPress = {closeModal}
                        animationType='fade'
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Bạn đã đăng nhập thành công!</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={styles.closeButton}>Đóng</Text>
                            </TouchableOpacity>
                        </View>
                       
                    </Modal> */}

                </View> 
                <View style = {[styles.forgotCtn,{ margin: 54}]} >
                    <Text> Forgot your password </Text> 
                </View> 
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #000',


    },
    loginText: {

        top: '8%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: 'bold',



    },
    ctn1: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    loginCtn:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:98,
        
    
        
    },
    img: {
        width: '32px',
        height: '32px',
        marginLeft: 9,
        marginRight: 21

    },
    imgRight: {
        width: '32px',
        height: '32px',
        marginRight: 3

    },
    textInput: {
        width: 330,
        height: 54,
        borderColor: '#F2F2F2',
        fontWeight: 'bold'
    },
    input: {
        width: 330,
        height: 58,
        flexDirection: 'row',
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        borderColor: '#F2F2F2',
        borderStyle: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: '15%',
        // marginBottom: '94px'
        // marginTop:'100px'
    },
    loginButton: {
        backgroundColor: '#060000',
        width: 330,
        height: 45,
        borderRadius: 2,
        padding: 10

    },
    loginText: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center'
        

    },
    forgotText:{
        textAlign:'center',
        fontSize:20,
        fontFamily: '',
        fontWeight:'bold',
        width: '239px',
        height: '27px',
        
    },
    forgotCtn:{
        alignItems:'center',
        justifyContent:'center',

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
      },
      closeButton: {
        fontSize: 16,
        color: 'blue',
      },




});



export default Page_2a;
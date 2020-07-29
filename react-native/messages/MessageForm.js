import React,{useState,useCallback,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import {TouchableRipple} from "react-native-paper"
import Icon from 'react-native-vector-icons/FontAwesome';
import {newMessageAdded,addImage,receiveMsg} from '../../redux/actions/conversations';
import ImagePicker from 'react-native-image-picker';

const ws = new WebSocket('wss://echo.websocket.org');

const domain=Platform.OS ==="ios" ?"localhost" : "192.168.56.1";
const MessageForm = ({messages}) => {
    const dispatch=useDispatch();

    const [text,setText]=useState("");

    useEffect(() => {
        ws.onopen = () => {
            console.log('Websocket opened.');
        };
    }, []);
    ws.onmessage = (e) => {
        console.log(`Received: ${e.data}`);
        const msg=JSON.parse(e.data);
        console.log("taha");
        handleReceive(msg);
    };
    ws.onerror = (e) => {
        console.log(`Error: ${e.message}`);
    };
    ws.onclose = (e) => {
        console.log(e.code, e.reason);
    };
    const handleReceive=(msg)=>{
        dispatch(receiveMsg(msg))
    };

    const submitHandler=useCallback(()=>{
        ws.send(JSON.stringify(text));
        dispatch(newMessageAdded(text,time));
        setText("")
    });

    const time=new Date().getTime();

    const handlePickAndSendImage=()=>{
        const options={
            title:"Fotoğraf Seçiniz",
            storeOptions:{
                skipBackup:true,
                path:"images"
            }
        };
        ImagePicker.showImagePicker(options,(response)=>{
            if(response.didCancel){
                console.log("Cancelled")
            }else if(response.error){
                console.log("Error : ", response.error )
            }else if(response.customButton){
                console.log("Tapped: ", response.customButton)
            }else{
                dispatch(addImage(response.uri))
            }
        })

    };

    return (
        <View style={styles.bottomSide}>
            <Icon style={{marginLeft:10 }} name={"plus"} size={20} color={"#05C0F3"}/>
            <TextInput value={text}
                       onChangeText={text=>setText(text)}
                       onSubmitEditing={submitHandler}
                       style={styles.messageInput}
            />
            <View >
                {
                    text!==""? <TouchableRipple  onPress={submitHandler}>
                             <Icon style={styles.sameIcon} name={"play"} color={"#05C0F3"} size={20}/>
                        </TouchableRipple>
                    :<View style={styles.subIcon}>
                        <TouchableRipple onPress={handlePickAndSendImage}>
                            <Icon style={styles.sameIcon} name={"camera"} color={"#05C0F3"} size={20}/>
                        </TouchableRipple>
                        <TouchableRipple>
                            <Icon style={styles.sameIcon} name={"microphone"} color={"#05C0F3"} size={20}/>
                        </TouchableRipple>
                    </View>
                }

            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    sameIcon:{
        marginRight:30
    },
    subIcon:{
        flexDirection:"row",
    },
    messageInput:{
        backgroundColor: "#444",
        width:"70%",
        color:"#fff",
        borderRadius:12,
        padding:0,
        paddingHorizontal:15,
        height:25,
        alignItems:"center"
    },
    bottomSide:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:0,
        marginBottom:10
    },
});

export default MessageForm;

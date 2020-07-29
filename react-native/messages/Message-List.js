import React from 'react';
import {useSelector} from 'react-redux';
import {View,StyleSheet,FlatList,TouchableOpacity} from "react-native"
import {Avatar,Title} from "react-native-paper"
import MessageForm from './MessageForm';
import Icon from "react-native-vector-icons/FontAwesome"
import Messages from './Messages';
import {SafeAreaView} from 'react-navigation';




const MessageList = ({navigation}) => {
    const messages=useSelector(state=>state.conversationsReducer.selectedConversation);
    let MessageItems=null;
    if(messages.messages && messages.messages.length>0){
       MessageItems=()=> {return (<FlatList
            data={messages.messages}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>(
                <Messages key={index}  isMyMessage={item.isMyMessage}  message={item}/>
            )}
        />)}
    }
    const turnChat=()=>{
        navigation.navigate("Dashboard")
    }
   // <Messages key={index}  isMyMessage={message.isMyMessage}  message={message}/>
    return (
        <SafeAreaView style={styles.detail}>
            <View style={styles.topSide}>
                <TouchableOpacity onPress={turnChat}>
                    <Icon  style={{marginTop: 5,marginLeft: 10}} name={"arrow-left"} color={"#05C0F3"} size={20}/>
                </TouchableOpacity>
                <View style={styles.avatar}>
                    <Avatar.Image source={require("../../images/profiles/douglas.png")}
                                  size={25}
                    />
                    <Title style={styles.title}>{messages.title}</Title>
                </View>
                <View style={styles.icons}>
                    <Icon style={styles.sameIcon} name={"video-camera"} color={"#05C0F3"} size={21}/>
                    <Icon style={styles.sameIcon} name={"phone"} color={"#05C0F3"} size={21}/>
                </View>
            </View>
            <MessageItems/>
            <MessageForm messages={messages.messages}/>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    detail:{
        flex:1,
        backgroundColor:"#1A191B"
    },
    topSide:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    },
    avatar:{
        alignItems:"center",
        justifyContent: "center",
        flexDirection: "row"
    },
    icons:{
        alignItems:"center",
        justifyContent: "center",
        flexDirection: "row"
    },

    title:{
        color:"#fff",
        fontSize:18,
        marginLeft:8
    },
    scrollContainer:{
        flex:1,
        marginBottom: 10,
    },

    sameIcon:{
        marginRight:30
    },



});


export default MessageList;

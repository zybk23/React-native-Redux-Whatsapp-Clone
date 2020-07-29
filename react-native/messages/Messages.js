import React from 'react';
import {Text,View,StyleSheet,Image} from "react-native"
import {formatTime} from '../time/Time';




const Messages = ({isMyMessage,message}) => {
    return (
        <View style={isMyMessage?styles.leftSide:styles.rightSide}>
            {
                message.photo && <Image style={styles.image} source={{uri:message.photo}}/>
            }
            <Text style={styles.text}>{message.content}</Text>
            <Text style={styles.messageTime}>{formatTime(message.timestamp)}</Text>
        </View>
    );
};
const styles=StyleSheet.create({
    rightSide:{
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        padding: 5,
        backgroundColor: '#1976d2',
        borderRadius: 10,
        marginBottom: 10,
        marginTop:10,
        flexDirection: 'row',
        maxWidth: 300,
    },
    leftSide:{
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#00796b',
        borderRadius: 10,
        marginTop: 10
    },

    text:{
        color: '#fff',
        fontSize: 15,
        marginEnd: 40,
        padding: 5,
    },
    messageTime: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.7,
        marginStart: 10,
        position: 'absolute',
        end: 10,
        bottom: 10,
    },
    imageButton: {
        width: 24,
        height: 24,
        tintColor: '#448aff',
    },
    image: {
        height: 100,
        flex: 1,
    },
});
export default Messages;

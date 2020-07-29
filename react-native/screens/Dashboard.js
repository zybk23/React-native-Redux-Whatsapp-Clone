import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {conversationChanged} from '../../redux/actions/conversations';
import {TextInput,StyleSheet,View,ScrollView} from "react-native"
import {Avatar,Title,Text,TouchableRipple} from "react-native-paper"
import {formatTime} from '../time/Time';


const Dashboard = (props) => {
    const dispatch=useDispatch();
    const conversations=useSelector(state=>state.conversationsReducer.conversations);

    const [filter,setFilter]=useState("");

    const onConversationItemSelected=(id)=>{
      dispatch(conversationChanged(id))
    };
    const search=conversations.filter(item=>{
        return item.title.toLowerCase().indexOf(
            filter.toLowerCase()
        )!==-1
    });

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>
                <Text style={styles.titleTop}>Sohbetler</Text>
                <TextInput value={filter}
                           onChangeText={text=>setFilter(text)}
                           placeholderTextColor={"white"}
                           placeholder={"ara"}
                           style={styles.input}/>
                {
                    search.map((item,index)=>
                        <View key={index} style={styles.userInfoSection}>
                            <TouchableRipple
                                style={{flex:1}}
                                onPress={()=>{onConversationItemSelected(item.id);
                                    props.navigation.navigate("detail")}} >
                                <View style={{flexDirection:"row",marginTop:15,flex:1}}>
                                    <View style={styles.leftPart}>
                                        <Avatar.Image
                                            source={item.imageUrl}
                                            size={35}
                                        />
                                        <View style={{marginLeft:20}}>
                                            <Title style={[styles.title]}>{item.title}</Title>
                                            <Text style={styles.latest}>{item.latestMessageText}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.time}>{formatTime(item.timestamp)}</Text>
                                </View>
                            </TouchableRipple>
                        </View>)
                }
            </ScrollView>
        </View>
    );
};

const styles=StyleSheet.create({

    container:{
        backgroundColor: "#1A191B",
        color: "#333",
    },
    time:{
        color:"#fff",
        marginTop: 8,
        flexDirection: 'row',
        justifyContent:"flex-end",
        flex: 1

    },
    leftPart:{
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width:"90%"
    },
    latest:{
      color:"#818081",
        fontSize: 12
    },
    title:{
        fontSize: 15,
        fontWeight: "bold",
        color:"#fff"
    },
    userInfoSection:{
        paddingHorizontal: 20,
        marginBottom:25,
        width: "100%",
        flex:1
    },
    titleTop:{
      marginLeft:"40%",
        marginTop:20,
        color:"#fff"
    },
    input:{
        backgroundColor: "#444",
        width:"80%",
        color:"#fff",
        borderRadius:12,
        padding:0,
        paddingHorizontal:15,
        height:25,
        alignItems:"center",
        flex:1,
        justifyContent:"center",
        marginLeft:"8%"
    }
});

export default Dashboard;

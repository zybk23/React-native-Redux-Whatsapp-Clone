import React from 'react';
import {View,Text,TextInput,StyleSheet,FlatList} from "react-native"
import {Avatar} from "react-native-paper"
import Icon from 'react-native-vector-icons/FontAwesome';
import {Camera,Edit2} from "../exstra/icons/index"

const DATA = [
    {
        id:1,
        img: require('../../images/profiles/douglas.png'),
        name: 'Taha Zeybek',
        time:"1s önce"
    },
    {
        id:2,
        img: require('../../images/profiles/stan.jpeg'),
        name: 'Ammar Çelenk',
        time:"2s önce"
    },
    {
        id:3,
        img: require('../../images/profiles/stacey.jpeg'),
        name: 'Fatih Çiçek',
        time:"3s önce"
    },
];

const Contact = ({navigation}) => {
    return (
        <View style={styles.status} >
            <View style={styles.view1}>
                <Text style={styles.case1}>Durum</Text>
                <View style={styles.search}>
                    <Icon style={styles.searchIcon} name={"search"} color={"#A9A9A9"} size={20}/>
                    <TextInput style={styles.input}/>
                </View>
            </View>
            <View style={styles.view2}>
                <View style={styles.texts}>
                    <View style={styles.avatar}>
                        <Avatar.Image source={require("../../images/profiles/douglas.png")}
                                      size={60}
                        />
                        <View style={styles.plus}>
                            <Icon name={"plus"} size={12} color={"#fff"}/>
                        </View>
                    </View>

                    <View style={{marginLeft:15}}>
                        <Text style={styles.text1}>Durumum</Text>
                        <Text style={styles.text2}>Durumuma ekle</Text>
                    </View>
                </View>
                <View style={styles.icons}>
                    <View style={styles.camera}>
                        <Camera  stroke={"#1E91FE"}/>
                    </View>
                    <View style={styles.camera}>
                        <Edit2 stroke={"#1E91FE"}/>
                    </View>
                </View>
            </View>
            <Text style={styles.updateText}>Son Güncellemeler</Text>
            <View style={styles.view3}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        (<View style={styles.info}>
                                <View style={styles.avatarBorder}>
                                    <Avatar.Image source={item.img}
                                                  size={60}
                                    />
                                </View>
                                <View style={styles.group}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                            </View>
                        )}
                />
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    status:{
        backgroundColor: "#101010",
        flex:1
    },
    view1:{
        flexDirection: "column",
    },
    search:{
        flexDirection:"row",
        justifyContent:"center",
    },
    searchIcon:{
        paddingTop: 10,
        marginRight:-45,
        zIndex:1,
    },
    input:{
        backgroundColor: "#444",
        width:"85%",
        color:"#fff",
        borderRadius:12,
        padding:0,
        paddingLeft:40,
        paddingHorizontal:15,
        height:40,
        alignItems:"center",
        marginLeft:20
    },
    avatar:{
        flexDirection:"row"
    },
    case1:{
        marginTop:20,
        marginBottom:10,
        marginLeft:40,
        fontSize:30,
        color:"#fff"
    },
    view2:{
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop: 60,
        backgroundColor:"#3C3C3C",
        padding: 15
    },
    texts:{
        flexDirection:"row",
    },
    text1:{
        color:"#fff",
        fontSize: 20
    },
    text2:{
        color:"#A9A9A9",
        fontSize: 15
    },
    icons:{
        flexDirection:"row"
    },
    plus:{
        marginTop:38,
        marginLeft:-15,
        padding:8,
        borderRadius: 200,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor:"#1E91FE",
    },
    camera:{
        marginRight: 20,
        backgroundColor:"#686868",
        padding:20,
        borderRadius: 200,
        alignItems: "center",
        justifyContent:"center"
    },
    view3:{
        backgroundColor:"#3C3C3C",
        padding:15
    },
    updateText:{
        color:"#A9A9A9",
        fontSize:20,
        marginBottom: 15,
        marginLeft:40,
        marginTop:40,
    },
    title:{
        color:"#fff"
    },
    time:{
        color:"#A9A9A9",
        marginTop:5,
        marginBottom:3
    },
    group:{
        marginLeft:15,
        borderBottomWidth:1,
        borderBottomColor:"#A9A9A9",
        flex:1
    },
    info:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15
    },
    avatarBorder:{
        padding:5,
        borderColor:"#1E91FE",
        borderRadius:50,
        borderWidth:3,
    }
});

export default Contact;

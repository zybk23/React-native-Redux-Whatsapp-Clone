
import React from 'react';
import { View, StyleSheet ,ScrollView} from 'react-native';
import {Avatar,Title,Text,Caption,TouchableRipple} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {SafeAreaView} from 'react-navigation';

const ProfileScreen = (props) => {
    return (
        <View style={styles.settings}>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:"row",marginTop:15}}>
                            <Avatar.Image
                                source={require("../../images/600.jpg")}
                                size={80}
                            />
                            <View style={{marginLeft:20}}>
                                <Title style={[styles.title,{marginTop:15,marginBottom:5,color:"#fff"}]}>Taha Zeybek</Title>
                                <Caption style={styles.caption}>@_zybk23 </Caption>
                            </View>
                        </View>
                    </View>
                    <View style={styles.userInfoSection}>
                        <View style={styles.row}>
                            <Icon name={"map-marker-radius"} color={"#777777"} size={20}/>
                            <Text style={styles.profileInfo}>Turkey/Istanbul</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name={"phone"} color={"#777777"} size={20}/>
                            <Text style={styles.profileInfo}>0534569820</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name={"email"} color={"#777777"} size={20}/>
                            <Text style={styles.profileInfo}>tahazeybek5@gmail.com</Text>
                        </View>
                    </View>
                    <View style={styles.infoBoxWrapper}>
                        <View style={[styles.infoBox,{
                            borderRightColor:"#777777",
                            borderRightWidth:1
                        }]}>
                            <Title style={styles.simpleText}>10 GB</Title>
                            <Caption style={styles.simpleText}>Veri Saklama Alanı</Caption>
                        </View>
                        <View style={styles.infoBox}>
                            <Title style={styles.simpleText}>12 <Icon name={"alpha-b-box"} color={"#FF6347"} size={25}/></Title>
                            <Caption style={styles.simpleText}>Bildirimler</Caption>
                        </View>
                    </View>
                    <View styel={styles.menuWrapper}>
                        <TouchableRipple onPress={()=>{}}>
                            <View style={styles.menuItem}>
                                <Icon name={"heart-outline"} color={"#FF6347"} size={25}/>
                                <Text style={styles.menuItemText}>Favoriler</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{}}>
                            <View style={styles.menuItem}>
                                <Icon name={"key"} color={"#FF6347"} size={25}/>
                                <Text style={styles.menuItemText}>Hesap</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{}}>
                            <View style={styles.menuItem}>
                                <Icon name={"whatsapp"} color={"#FF6347"} size={25}/>
                                <Text style={styles.menuItemText}>sohbetler</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{}}>
                            <View style={styles.menuItem}>
                                <Icon name={"help"} color={"#FF6347"} size={25}/>
                                <Text style={styles.menuItemText}>Yardım</Text>
                            </View>
                        </TouchableRipple>

                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    settings:{
        backgroundColor: "#101010",
        flex:1
    },
    container: {
        flex: 1,
        marginBottom:9
    },
    userInfoSection:{
        paddingHorizontal: 30,
        marginBottom:25
    },
    profileInfo:{
        color:"#fff",
        marginLeft: 20
    },
    row:{
        flexDirection:"row",
        alignItems: "center",
        marginBottom: 10
    },
    title:{
      fontSize: 24,
      fontWeight: "bold"
    },
    infoBoxWrapper:{
      borderBottomColor:"#dddddd",
      borderBottomWidth:1,
      borderTopColor:"#dddddd",
      borderTopWidth:1,
      flexDirection:"row",
      height:100
    },
    infoBox:{
      width:"50%",
      alignItems: "center",
      justifyContent: "center"
    },
    simpleText:{
        color:"#fff"
    },
    menuWrapper:{
        marginTop:10,
    },
    caption:{
        color:"#fff"
    },
    menuItem:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
        paddingHorizontal:30
    },
    menuItemText:{
        color:"#fff",
        marginLeft:20,
        fontWeight:"600",
        fontSize:16,
        lineHeight:26
    }
});

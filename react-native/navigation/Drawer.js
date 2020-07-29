import React,{useState} from 'react';
import {Block,Text} from "expo-ui-kit"
import {Image,StyleSheet,View} from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {createDrawerNavigator,
    DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import LinearGradient from "react-native-linear-gradient"
import {MessageCircle,Target,Settings} from "../exstra/icons/index"

import Dashboard from '../screens/Dashboard';
import Profile from "../screens/Profile"
import Contact from "../screens/Contact"
import MessageList from '../messages/Message-List';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens=({navigation,style})=>{
    return (
        <Animated.View style={[{flex:1, overflow:"hidden"},style]} >
            <Stack.Navigator
                screenOptions={{
                    headerTransparent:true,
                    headerTitle: null,
                    headerLeft:()=>(
                        <FontAwesome white padding marginHorizontal onPress={()=>{navigation.openDrawer()}}
                            name={"list"} size={22} color={"#818081"} style={styles.list}/>
                    )
                }}
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Messages" component={Profile} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="detail" component={MessageList} />
            </Stack.Navigator>
        </Animated.View>
    )
};

const DrawerContent=props=>{
    return (
        <DrawerContentScrollView {...props}>
            <Block>
                <Block flex={0.4} margin={20} bottom>
                    <Image
                        source={require("../../images/600.jpg")}
                        resizeMode={"center"}
                        style={{borderRadius:200 , width:100,height:100 , marginTop:40}}
                    />
                    <Text title white>Taha Zeybek</Text>
                    <Text size={15} white>@_Zybk23</Text>
                </Block>
                <Block>
                    <View style={styles.rows}>
                        <MessageCircle stroke={"#fff"}/>
                        <DrawerItem icon={()=>{} }
                                    labelStyle={{color:"white",fontSize:25}}
                                    label={"Sohbet"}
                                    onPress={()=>{props.navigation.navigate("Dashboard")}}/>
                    </View>
                    <View style={styles.rows}>
                        <Settings stroke={"#fff"}/>
                        <DrawerItem labelStyle={{color:"white",fontSize:25}}
                                    label={"Ayarlar"} onPress={()=>{props.navigation.navigate("Messages")}}
                                    icon={()=>{}  }
                        />
                    </View>
                    <View style={styles.rows}>
                        <Target stroke={"#fff"}/>
                        <DrawerItem label={"Durum"} labelStyle={{color:"white",fontSize:25}}
                                    onPress={()=>{props.navigation.navigate("Contact")}}/>
                    </View>
                </Block>
            </Block>

        </DrawerContentScrollView>

    )
};

const Drawers = () => {

    const [progress,setProgress]=useState(new Animated.Value(0));
    const scale=Animated.interpolate(progress,{
        inputRange:[0,1],
        outputRange:[1,0.8]
    });
    const borderRadius=Animated.interpolate(progress,{
        inputRange:[0,1],
        outputRange:[0,10]
    });

    const screenStyles={borderRadius,transform:[{scale}]};
    return (
            <LinearGradient colors={['#EF4F1C', '#71BF22', '#192f6a']} style={styles.linearGradient}>
                <Drawer.Navigator
                    drawerType={"slide"}
                    overlayColor={"transparent"}
                    drawerStyle={{width:"50%",backgroundColor:"transparent"}}
                    drawerContentOptions={{
                        activeBackgroundColor:"transparent",
                        activeTintColor:"green",
                        inactiveTintColor:"green"
                    }}
                    sceneContainerStyle={{backgroundColor:"transparent"}}
                    initialRouteName="Dashboard"
                                  drawerContent={(props)=>{
                                      setProgress(props.progress);
                                      return <DrawerContent {...props}/>
                                  }}>
                    <Drawer.Screen  name="Screens">
                        {props=><Screens {...props} style={screenStyles}/>}
                    </Drawer.Screen>
                </Drawer.Navigator>
            </LinearGradient>

    );
};
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    list:{
        marginLeft:10,
        marginBottom:15
    },
    rows:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft: 10
    },
});
export default Drawers;

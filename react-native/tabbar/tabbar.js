import React from "react"
import { View, Text, TouchableOpacity ,Animated,StyleSheet} from 'react-native';
import {Settings,MessageCircle,Target} from './icons/index';





function MyTabBar({ state, descriptors, navigation }) {

    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    return (
        <View style={{ flexDirection: 'row',backgroundColor:"#fff" }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };


                return (
                    <View key={index} style={styles.tabbar}>
                        {
                            label==="Sohbet" && (
                                <View key={index}
                                      style={[styles.sohbet,
                                          isFocused && styles.chooseSohbet
                                      ]}>
                                    <TouchableOpacity  onPress={onPress}>
                                        <View style={[styles.sohbetView,{backgroundColor:isFocused?"#416AE5":"#EFF1F0"}]}>
                                            <MessageCircle  stroke={isFocused?"#fff":"red"}/>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            )
                        }
                        {
                            label==="Contact" && (
                                <View key={index} style={[styles.sohbet,isFocused && styles.chooseSohbet]}>
                                    <TouchableOpacity  onPress={onPress}>
                                        <View style={[styles.sohbetView,{backgroundColor:isFocused?"#416AE5":"#EFF1F0"}]}>
                                            <Target stroke={isFocused?"#fff":"red"}/>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            )
                        }
                        {
                            label==="Profile" && (
                                <View key={index} style={[styles.sohbet,isFocused && styles.chooseSohbet]}>
                                    <TouchableOpacity  onPress={onPress}>
                                        <View style={[styles.sohbetView,{backgroundColor:isFocused?"#416AE5":"#EFF1F0"}]}>
                                            <Settings stroke={isFocused?"#fff":"red"}/>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            )
                        }

                    </View>
                );
            })}
        </View>
    );
}

const styles=StyleSheet.create({
    tabbar:{
        flexDirection:"column",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        backgroundColor:"#262626"
    },
    sohbet:{
        padding:15,
        backgroundColor:"#262626",
    },
    chooseSohbet:{
        borderRadius:50,
        marginTop:-15
    },
    sohbetView:{
        borderRadius: 50,
        padding:15,
        backgroundColor:"red"
    },
    bottom:{
        paddingTop:8,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        height:56,
        flex:1,
    },
    dot:{
        borderRadius:50,
        width:4,
        height: 4,
        backgroundColor: "red",
        marginTop: 8
    }
});


export default MyTabBar;

// ...

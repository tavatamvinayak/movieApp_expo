
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchTab from '../Tabs/SearchTab';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import HomeTab from '../Tabs/HomeTab';
import Categories from '../Tabs/Categories';


const Tab = createBottomTabNavigator();

const screenOptions ={
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60
    }
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name="Home" 
            component={HomeTab}
            options={{tabBarIcon:({focused})=><Ionicons name={focused ? "home" : "home-outline"} 
                size={24}
                // color={""} 
            />}} />
       <Tab.Screen 
            name="Search" 
            component={SearchTab}
            options={{tabBarIcon:({focused})=><Ionicons name={"search-sharp"} 
                size={24}
                // color={""} 
            />}}
         />
        <Tab.Screen 
            name="Categories" 
            component={Categories}
            options={{tabBarIcon:({focused})=><MaterialIcons name="category" size={24} color="black" />}}
         /> 
       </Tab.Navigator>
    )
}

export default BottomTabNavigation
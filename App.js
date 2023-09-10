import React from "react";
import Home from "./Home";
import Login from "./Login";
import { View, StyleSheet, ScrollView } from "react-native";
import Whether from "./Whether";
import GovernmentSchemesComponent from "./GovernmentSchemesComponent";
import schemes from "./Schemes";
import Model_Farming from './Model_Farming'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header2 from "./Header2";
import ExpertPanel from "./ExpertPanel ";
import Crop_Plan from "./Model_farm/Crop_Plan";
import CropPlan from "./DayWise_Component/CropPlan";



const Stack = createNativeStackNavigator();
const key = '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';
export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Weather" component={Whether}/>
         <Stack.Screen name="Schemes">{(props)=><GovernmentSchemesComponent {...props} schemes={schemes}/>}</Stack.Screen>
        <Stack.Screen name = "header2" component={Header2}/>
        <Stack.Screen name = "Model Form" component={Model_Farming}/>
        <Stack.Screen name="ExpertPanel" component={ExpertPanel}/>
        <Stack.Screen name='Crop_Plan' component = {Crop_Plan}/>
        <Stack.Screen name="CropPlan" component={CropPlan}/>
       

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react'
import Hearder from './Hearder';
import Header2 from './Header2';
import MyCarousel from './MyCarousel';
import Cards from './Cards';
import Whether from './Whether';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Home({navigation}) {
  return (
    <View style = {styles.view_1}>
      
    
    <Hearder></Hearder>
    <Header2 navigation={navigation}></Header2>
    <MyCarousel></MyCarousel>
    <Cards></Cards>
   
  </View>
  );
}

const styles = StyleSheet.create({
    view_1:{
      marginTop:15,
      overflow: 'visible',
    }
   
  });

export default Home

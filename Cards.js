import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

function Cards() {
  const img1 = 'https://cdn.shopify.com/s/files/1/0489/5922/6015/files/1_3_480x480.jpg?v=1640864075';
  const img2 = 'data:image/png;base64,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';
  const img3 = 'https://t4.ftcdn.net/jpg/02/14/03/95/360_F_214039536_0Dc6M95D9HQwTatguaVmYXMOR3v5I2m8.jpg';
  const img4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyy5fHwTR-FIqzHESAf-srbrBMPC5WQWaaw&usqp=CAU';
  const img5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57cc_6ujlN4L6-xylxgIk4ZTfPENeLlbl6A&usqp=CAU';
  const img6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06TofusKM_CK3Hhgo_bsgV8-wSd8uDQuSEw&usqp=CAU';
  return (
    <View style={styles.BigView}>
      <View style={styles.View_1}>
        <Card   image = {img1} tittle = {'Model Farm'}></Card>
        <Card image = {img2} tittle = {'Weather Forecast'}></Card>
        <Card image = {img3} tittle = {'Gov Schemes'}></Card>
      </View>
      <View style={styles.View_1}>
        
        <Card image = {img5} tittle={'Disease Prev.'}></Card>
        <Card image={img4} tittle = {'Articles'}></Card>
        <Card image = {img6} tittle = {'querry'} ></Card>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  View_1: {
    display: "flex",
    flexDirection: "row",
    marginLeft:20
    
    
  },
  BigView: {
    display: "flex",
    marginTop:20
   
  },
});

export default Cards;

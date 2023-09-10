import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Dimensions } from "react-native";

function Hearder() {
  const img = 'https://cdn.icon-icons.com/icons2/1446/PNG/512/22333sheafofrice_98735.png';
  const img2 = 'https://cdn-icons-png.flaticon.com/512/7216/7216128.png';

  return (
    <View style={styles.big}>
     <Image style={{height:40,width:40,marginTop:10}} source={{uri:img2}}></Image>
     <View style={styles.View_1}>
     
     <Image style = {{height:40,width:40}}source={{ uri:img }}></Image>
     <Text style={styles.Text_1}>Growing Agro</Text>
     
   </View>
    </View>
    
  );
}
const screenWidth = Dimensions.get("window").width;
const hundredVw = screenWidth;

const styles = StyleSheet.create({
  View_1: {
    width: hundredVw,
    height: 60,
    display: "flex",
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20
    
    
  },
  Text_1: {
    color: "Black",
    marginLeft: 4,
    fontWeight: "bold",
    fontSize: 27,
    marginBottom: 22,
    marginTop:18
  },
  big:{
    display:'flex',
    flexDirection:'row',
    
  }

});

export default Hearder;

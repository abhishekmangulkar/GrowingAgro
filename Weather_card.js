import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
function Weather_card(props) {
  console.log(props);
  const temp = Math.round(props.props.temp - 273 )
  return (
    <View>
     
     <View style = {styles.View_1}></View>
     <Text style = {styles.text_1}>  Date :  {props.props.date}  </Text>
     <Text style = {styles.text_2}>    {temp}°C ,   {props.props.desc}    </Text>

    </View>
  )
}
const styles = StyleSheet.create({
   text_1:{
    marginTop:30,
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'#F5F0BB'
   },
   text_2:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:0,
    backgroundColor:'#F5F0BB'
   },
   View_1:{
    backgroundColor:'#B799FF'
   }

})

export default Weather_card

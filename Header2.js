import React from 'react'
import { View ,StyleSheet, Button} from 'react-native'
import { Dimensions } from 'react-native';




const Header2 = ({navigation}) =>{
  
 
  return (
    <View style = {styles.View_1}>
      <Button color= '#05BFDB' style = {styles.btn}title='Home' >Home</Button>
     <Button color= '#05BFDB'  style = {styles.btn}title='E-PANCHANG' onPress={()=>navigation.navigate('Weather')
    }>Home</Button>
     <Button color= '#05BFDB' style = {styles.btn}title='MODEL Form' onPress={()=>navigation.navigate('Model Form')}>Home</Button>
     <Button color= '#05BFDB' style = {styles.btn}title='Govt-Schemes' onPress={()=>navigation.navigate('Schemes')}>Home</Button>
     <Button  color= '#05BFDB' title='Querry' onPress={()=>navigation.navigate('ExpertPanel')}>Home</Button>
    </View>
  )
}
const screenWidth = Dimensions.get('window').width;
const hundredVw = screenWidth;

const styles = StyleSheet.create({
     View_1:{
        display:'flex',
        flexDirection:'row',
        width:hundredVw,
        justifyContent:'space-between',
        backgroundColor:'#05BFDB',
        marginTop:20,
        marginBottom:25
     },
     btn:{
       border:'none'
     },
    
})

export default Header2

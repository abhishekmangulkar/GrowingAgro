import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import Weather_card from "./Weather_card";

const screenWidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height * 0.25;

function Whether() {
  const [data, setdata] = useState([]);
  const [temp, setTemp] = useState(0);
  const[des,setDes] = useState("");

  const [day1,SetDay1] = useState({});
  const [day2,SetDay2] = useState({});
  const [day3,SetDay3] = useState({});
  const [day4,SetDay4] = useState({});
  const [day5,SetDay5] = useState({});
  

  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=21.145800&lon=79.088158&appid=0285fbbef481b90760f73bf3bfacab7b";

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setdata(json.list);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => fetchData(), []);
  useEffect(() => {
    Object.values(data)
      .slice(0, 1)
      .map((e) => {
        console.log(e);
       
        
        setTemp(e.main.feels_like);
        setDes(e.weather[0].description);
      });
  }, [data]);

 let i = 0;
 
  useEffect(()=>{
   Object.values(data).map((e)=>{
   i++;
   if(i == 4){
    SetDay1({temp:e.main.feels_like,date:e.dt_txt.slice(0,10),desc:e.weather[0].description})
   }
   else if( i == 12){
    SetDay2({temp:e.main.feels_like,date:e.dt_txt.slice(0,10),desc:e.weather[0].description})
   }
   else if(i == 18){
    SetDay3({temp:e.main.feels_like,date:e.dt_txt.slice(0,10),desc:e.weather[0].description})
   }
   else if(i == 24){
    SetDay4({temp:e.main.feels_like,date:e.dt_txt.slice(0,10),desc:e.weather[0].description})
   }
   else if(i == 30){
    SetDay5({temp:e.main.feels_like,date:e.dt_txt.slice(0,10),desc:e.weather[0].description})
   }
   })
  },[data])

  


  return (
    <View>
      <View style={styles.View_1}>
        <ImageBackground
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2KwDH5GxeVLa99EQAg1cksOMtzpTBu7DSA&usqp=CAU",
          }}
          style={styles.img_1}
        >
          <Text
            style={{
              marginTop: 40,
              fontSize: 40,
              fontWeight: "bold",
              marginLeft: 30,
              color: "#FFF7D4",
            }}
          >
            Nagpur
          </Text>
          <View style={{display:"flex",flexDirection:'row',alignItems:"center"}}>
          <Text style={{color:'white',fontSize:60,marginLeft:30,marginTop:30}}>{Math.round(temp-273)}°C</Text>
          <Text style={{color:'white',fontSize:25,marginTop:45,marginLeft:30,fontWeight:"bold"}}>{des}</Text>
          </View>
          
          
        </ImageBackground>
       <Text style={{color:'Black',fontSize:30,marginLeft:screenWidth*0.12,fontWeight:"bold",marginTop:10}}>Next Five Day Weather</Text>

        <Weather_card props = {day1}></Weather_card>
        <Weather_card props = {day2}></Weather_card>
        <Weather_card props = {day3}></Weather_card>
        <Weather_card props = {day4}></Weather_card>
        <Weather_card props = {day5}></Weather_card>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img_1: {
    height: screenheight,
    width: screenWidth,
  },
  View_1: {
    marginTop: 0,
  },
});

export default Whether;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Crop_Plan = ({navigation}) => {
  const handlesubmit = () => {
    navigation.navigate('CropPlan')
  };
  const getCropRecommendations = (soilType, region, area) => {
    if (soilType === "black soil" && region === "Maharashtra" && area <= 2.5) {
      return [
        { name: "Wheat", season: "Rabi", yield: "25-30 quintals/acre" },
        { name: "Cotton", season: "Kharif", yield: "10-12 quintals/acre" },
        { name: "Soybean", season: "Kharif", yield: "15-20 quintals/acre" },
        { name: "Peanuts", season: "Kharif", yield: "8-10 quintals/acre" },
      ];
    } else {
      return [
        {
          name: "No specific crop recommendations available.",
          season: "",
          yield: "",
        },
      ];
    }
  };

  const crops = getCropRecommendations("black soil", "Maharashtra", 2.5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crop Recommendations</Text>
      <Text style={styles.subtitle}>Black Soil, Maharashtra</Text>

     
      <ScrollView style={styles.scrollView}>
        {crops.map((crop, index) => (
        
            <View key={index} style={styles.cropContainer}>
              <TouchableOpacity onPress={handlesubmit}>
              <Text style={styles.cropName}>{crop.name}</Text>
              <Text style={styles.cropInfo}>Season: {crop.season}</Text>
              <Text style={styles.cropInfo}>Yield: {crop.yield}</Text>
              </TouchableOpacity>
            

            </View>
          
        ))}
      </ScrollView>

      
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  cropContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  cropName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cropInfo: {
    fontSize: 16,
  },
});

export default Crop_Plan;

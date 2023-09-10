import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { Button } from 'react-native';




const ModelFarmingComponent = ({navigation}) => {
  let fmap = new Map(
    [
     ["first","component1"],
     ["second","component2"],
     ["third","component3"]
    ]
  );
  //console.log(fmap.size);
  const [agroClimaticZone, setAgroClimaticZone] = useState('');
  const [farmingSituation, setFarmingSituation] = useState('');
  const [farmerClass, setFarmerClass] = useState('');
  const [irrigationType, setIrrigationType] = useState('');

  const handleSubmit = () => {
    // Handle the form submission here
    console.log('Form submitted!');
    console.log('Agro-Climatic Zone:', agroClimaticZone);
    console.log('Farming Situation:', farmingSituation);
    console.log('Farmer Class:', farmerClass);
    console.log('Irrigation Type:', irrigationType);
    let str = agroClimaticZone+farmingSituation+farmerClass+irrigationType;
    console.log(str);
    //console.log(fmap.get("first"));
    navigation.navigate('Crop_Plan');
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Agro-Climatic Zone:</Text>
      <Picker
        style={styles.dropdown}
        selectedValue={agroClimaticZone}
        onValueChange={(value) => setAgroClimaticZone(value)}
      >
        <Picker.Item label="Maharashtra" value="Maha" />
        <Picker.Item label="Maharashtra-Vidharbha" value="Mahavid" />
        
      </Picker>

      <Text style={styles.label}>Farming Situation:</Text>
      <Picker
        style={styles.dropdown}
        selectedValue={farmingSituation}
        onValueChange={(value) => setFarmingSituation(value)}
      >
        <Picker.Item label="Black Soil" value="s1" />
        <Picker.Item label="Laterite Soil" value="s2" />
        <Picker.Item label="red Soil" value="s3" />
        <Picker.Item label="Clay Soil" value="s4" />
      </Picker>

      <Text style={styles.label}>Farmer Class:</Text>
      <Picker
        style={styles.dropdown}
        selectedValue={farmerClass}
        onValueChange={(value) => setFarmerClass(value)}
      >
        <Picker.Item label="marginal (Area:Upto 2.5 Acre)" value="mar" />
        <Picker.Item label="Small(Area:Upto 2.51-5.0 Acre)" value="sm" />
        <Picker.Item label="Medium(Area:Upto 5.1-10 Acre)" value="med" />
      </Picker>

      <Text style={styles.label}>Irrigated/Rained:</Text>
      <Picker
        style={styles.dropdown}
        selectedValue={irrigationType}
        onValueChange={(value) => setIrrigationType(value)}
      >
        <Picker.Item label="Irrigated" value="irrigated" />
        <Picker.Item label="Rained" value="rained" />
      </Picker>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  submitButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModelFarmingComponent;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CropPlan = () => {
    const wheatCropPlan = [
        {
          day: 'Day 1',
          task: 'Prepare the soil',
          description:
            'Clear the field of any debris or weeds. Loosen the soil using a tiller or plow to promote good root development. Ensure the soil is well-drained and has proper fertility.',
        },
        {
          day: 'Day 2',
          task: 'Sow the seeds',
          description:
            'Plant the wheat seeds at the appropriate depth and spacing. Follow the recommended seed rate for your specific variety. Ensure the seeds are evenly distributed and cover them with soil.',
        },
        {
          day: 'Day 3',
          task: 'Water the field',
          description:
            'Provide sufficient water to the field to ensure proper germination of the seeds. Avoid overwatering, as it can lead to waterlogging and affect seedling growth.',
        },
        {
          day: 'Day 4',
          task: 'Apply fertilizer',
          description:
            'Apply the recommended fertilizer based on soil test results or general guidelines. Ensure even distribution of the fertilizer and avoid excessive application, which can lead to nutrient imbalances.',
        },
        {
          day: 'Day 5',
          task: 'Monitor for pests and diseases',
          description:
            'Inspect the crop for any signs of pests or diseases. Take appropriate measures to control and manage them, such as applying insecticides or fungicides if necessary.',
        },
        {
          day: 'Day 6',
          task: 'Irrigate the field',
          description:
            'Provide regular irrigation to meet the crops water requirements. Monitor soil moisture levels and adjust the irrigation schedule accordingly.',
        },
        {
          day: 'Day 7',
          task: 'Monitor growth and health',
          description:
            'Observe the crops overall growth and health. Look for any nutrient deficiencies, wilting, or abnormal growth patterns. Take corrective actions if required.',
        },
        {
          day: 'Day 8',
          task: 'Apply additional fertilizer if needed',
          description:
            'Assess the crops nutrient requirements based on visual observations and soil test recommendations. Apply additional fertilizer if there are signs of nutrient deficiencies.',
        },
        {
          day: 'Day 9',
          task: 'Weed the field',
          description:
            'Remove any weeds that compete with the wheat crop for resources. Use manual or mechanical methods to control weed growth and maintain a weed-free field.',
        },
        {
          day: 'Day 10',
          task: 'Monitor for pests and diseases',
          description:
            'Continue monitoring the crop for any signs of pests or diseases. Implement appropriate pest and disease management strategies as needed.',
        },
        {
          day: 'Day 11',
          task: 'Irrigate the field',
          description:
            'Ensure the crop receives sufficient water by irrigating as required. Adjust the irrigation schedule based on weather conditions and crop needs.',
        },
        {
          day: 'Day 12',
          task: 'Monitor growth and health',
          description:
            'Keep a close eye on the crops growth and health. Address any issues promptly to maintain optimal crop development.',
        },
        {
          day: 'Day 13',
          task: 'Harvest the wheat crop',
          description:
            'Once the wheat crop reaches maturity, harvest the crop using appropriate machinery or manual methods. Ensure proper post-harvest handling and storage to maintain grain quality.',
        },
      ];
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crop Plan for Wheat</Text>
      <ScrollView style={styles.scrollView}>
        {wheatCropPlan.map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.day}>{task.day}</Text>
            <View style={styles.taskDetails}>
              <Text style={styles.task}>{task.task}</Text>
              <Text style={styles.description}>{task.description}</Text>
            </View>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  day: {
    width: 80,
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDetails: {
    flex: 1,
  },
  task: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default CropPlan;

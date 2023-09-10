import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const GovernmentSchemesComponent = ({ schemes }) => {
  const renderSchemeItem = ({ item }) => {
    return (
      <View style={styles.schemeItem}>
        <Text style={styles.schemeTitle}>{item.title}</Text>
        <Text style={styles.schemeDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Government Schemes</Text>
      <FlatList
        data={schemes}
        renderItem={renderSchemeItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginTop:40
  },
  listContent: {
    paddingTop: 16,
  },
  schemeItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  schemeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  schemeDescription: {
    fontSize: 16,
    color: '#666666',
  },
});

export default GovernmentSchemesComponent;
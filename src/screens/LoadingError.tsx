import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingErrorView = ({ isLoading, isError }) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6334db" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error loading data</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#6334db',
  },
  errorText: {
    color: '#e74c3c',
  },
})

export default LoadingErrorView

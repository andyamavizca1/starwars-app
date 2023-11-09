import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import { fetchPlanets } from '../api/swapi'
import { Planet } from '../types/Planet'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './Details'
import LoadingErrorView from './LoadingError'

const PlanetsScreen = () => {
  const [page, setPage] = useState(1)
  const pageSize = 10
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const { data, isLoading, isError } = useQuery(['planets', page], () => fetchPlanets(page, pageSize))

  if (isLoading || isError) {
    return <LoadingErrorView isLoading={isLoading} isError={isError}></LoadingErrorView>
  }

  const planets: Planet[] = data.data.results

  const navigateToDetails = (item: Planet) => {
    navigation.navigate('Details', { planet: item })
  }

  return (
    <View>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              padding: 10,
            }}
            onPress={() => navigateToDetails(item)}
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <Button
          title="Previous"
          onPress={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }}
        />
        <Button
          title="Next"
          onPress={() => {
            if (data.data.next) {
              setPage(page + 1)
            }
          }}
        />
      </View>
    </View>
  )
}

export default PlanetsScreen

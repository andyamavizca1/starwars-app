import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import { fetchPeople } from '../api/swapi'
import { Person } from '../types/Person'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './Details'
import LoadingErrorView from './LoadingError'

const PeopleScreen = () => {
  const [page, setPage] = useState(1)
  const pageSize = 10
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const { data, isLoading, isError } = useQuery(['people', page], () => fetchPeople(page, pageSize))

  if (isLoading || isError) {
    return <LoadingErrorView isLoading={isLoading} isError={isError}></LoadingErrorView>
  }

  const people: Person[] = data.data.results

  const navigateToDetails = (item: Person) => {
    navigation.navigate('Details', { person: item })
  }

  return (
    <View>
      <FlatList
        data={people}
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

export default PeopleScreen

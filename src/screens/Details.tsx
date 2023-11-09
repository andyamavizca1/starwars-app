import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Person } from '../types/Person'
import { Planet } from '../types/Planet'
import { Spaceship } from '../types/Spaceship'

const Details = ({ route }) => {
  const { spaceship, person, planet } = route.params

  return (
    <View style={styles.container}>
      {spaceship && (
        <>
          <Text style={styles.label}>Name:</Text>
          <Text>{spaceship.name}</Text>

          <Text style={styles.label}>Model:</Text>
          <Text>{spaceship.model}</Text>

          <Text style={styles.label}>Manufacturer:</Text>
          <Text>{spaceship.manufacturer}</Text>

          <Text style={styles.label}>Cost in Credits:</Text>
          <Text>{spaceship.cost_in_credits}</Text>

          <Text style={styles.label}>Length:</Text>
          <Text>{spaceship.length}</Text>

          <Text style={styles.label}>Max Atmosphering Speed:</Text>
          <Text>{spaceship.max_atmosphering_speed}</Text>

          <Text style={styles.label}>Crew:</Text>
          <Text>{spaceship.crew}</Text>

          <Text style={styles.label}>Passengers:</Text>
          <Text>{spaceship.passengers}</Text>

          <Text style={styles.label}>Cargo Capacity:</Text>
          <Text>{spaceship.cargo_capacity}</Text>

          <Text style={styles.label}>Consumables:</Text>
          <Text>{spaceship.consumables}</Text>

          <Text style={styles.label}>Hyperdrive Rating:</Text>
          <Text>{spaceship.hyperdrive_rating}</Text>

          <Text style={styles.label}>MGLT:</Text>
          <Text>{spaceship.MGLT}</Text>

          <Text style={styles.label}>Starship Class:</Text>
          <Text>{spaceship.starship_class}</Text>
        </>
      )}

      {person && (
        <>
          <Text style={styles.label}>Name:</Text>
          <Text>{person.name}</Text>

          <Text style={styles.label}>Height:</Text>
          <Text>{person.height}</Text>

          <Text style={styles.label}>Mass:</Text>
          <Text>{person.mass}</Text>

          <Text style={styles.label}>Hair Color:</Text>
          <Text>{person.hair_color}</Text>

          <Text style={styles.label}>Skin Color:</Text>
          <Text>{person.skin_color}</Text>

          <Text style={styles.label}>Eye Color:</Text>
          <Text>{person.eye_color}</Text>
        </>
      )}

{planet && (
        <>
          <Text style={styles.label}>Name:</Text>
          <Text>{planet.name}</Text>

          <Text style={styles.label}>Rotation Period:</Text>
          <Text>{planet.rotation_period}</Text>

          <Text style={styles.label}>Orbital Period:</Text>
          <Text>{planet.orbital_period}</Text>

          <Text style={styles.label}>Diameter:</Text>
          <Text>{planet.diameter}</Text>

          <Text style={styles.label}>Climate:</Text>
          <Text>{planet.climate}</Text>

          <Text style={styles.label}>Gravity:</Text>
          <Text>{planet.gravity}</Text>

          <Text style={styles.label}>Terrain:</Text>
          <Text>{planet.terrain}</Text>

          <Text style={styles.label}>Surface Water:</Text>
          <Text>{planet.surface_water}</Text>

          <Text style={styles.label}>Population:</Text>
          <Text>{planet.population}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
})

export type RootStackParamList = {
  Details: { spaceship?: Spaceship; person?: Person; planet?: Planet } | undefined
}

export default Details

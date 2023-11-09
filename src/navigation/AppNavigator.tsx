import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import PeopleScreen from '../screens/PeopleScreen'
import SpaceshipsScreen from '../screens/SpaceshipsScreen'
import PlanetsScreen from '../screens/PlanetsScreen'
import Details from '../screens/Details'

const Tab = createBottomTabNavigator()
const PeopleStack = createStackNavigator()
const SpaceshipsStack = createStackNavigator()
const PlanetsStack = createStackNavigator()

const PeopleStackScreen = () => (
  <PeopleStack.Navigator>
    <PeopleStack.Screen options={{title: 'People'}}  name="PeopleScreen" component={PeopleScreen} />
    <PeopleStack.Screen options={{title: 'Person Details'}}  name="Details" component={Details} />
  </PeopleStack.Navigator>
)

const SpaceshipsStackScreen = () => (
  <SpaceshipsStack.Navigator>
    <SpaceshipsStack.Screen options={{title: 'Spaceships'}}  name="SpaceshipsScreen" component={SpaceshipsScreen} />
    <SpaceshipsStack.Screen options={{title: 'Spaceship Details'}}  name="Details" component={Details} />
  </SpaceshipsStack.Navigator>
)

const PlanetsStackScreen = () => (
  <PlanetsStack.Navigator>
    <PlanetsStack.Screen options={{title: 'Planets'}} name="PlanetsScreen" component={PlanetsScreen} />
    <PlanetsStack.Screen options={{title: 'Planet Details'}}  name="Details" component={Details} />
  </PlanetsStack.Navigator>
)

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="People" component={PeopleStackScreen} />
      <Tab.Screen options={{headerShown: false}} name="Spaceships" component={SpaceshipsStackScreen} />
      <Tab.Screen options={{headerShown: false}} name="Planets" component={PlanetsStackScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigator

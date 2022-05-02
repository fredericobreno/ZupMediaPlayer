import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/home'
import NewSongScreen from './screens/new-song'

export type RootStackParamList = {
  Home: undefined
  NewSong: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='NewSong' component={NewSongScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import { RootStackParamList } from '../../App'
import styles from './styles'

type NewSongScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'NewSong'
>

const NewSongScreen: React.FC = () => {
  const { navigate } = useNavigation<NewSongScreenProp>()
  const [textInput, setTextInput] = React.useState('')

  const handleAddSongPress = () => {
    if (textInput) {
      TrackPlayer.add({
        url: textInput,
      })
      navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={textInput}
        onChangeText={setTextInput}
      />
      <TouchableOpacity onPress={handleAddSongPress}>
        <View style={styles.button}>
          <Text>Add Song</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NewSongScreen

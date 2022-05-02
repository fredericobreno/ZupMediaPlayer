import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import TrackPlayer, { Track as TrackType } from 'react-native-track-player'
import { RootStackParamList } from '../../App'
import Track from '../track'
import styles from './styles'

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const TrackList: React.FC = () => {
  const [tracks, setTracks] = React.useState<TrackType[]>([])
  const { navigate } = useNavigation<HomeScreenProp>()

  const handleAddPress = () => {
    navigate('NewSong')
  }

  useFocusEffect(
    useCallback(() => {
      ;(async () => {
        const queue = await TrackPlayer.getQueue()
        setTracks(queue)
      })()
    }, []),
  )

  return (
    <FlatList<TrackType>
      style={styles.container}
      data={tracks}
      ListHeaderComponent={() => (
        <Track
          preset='add'
          track={{ url: '', title: 'Add song' }}
          onPress={() => handleAddPress()}
        />
      )}
      renderItem={({ item, index }) => (
        <Track
          track={item}
          onPress={() => {
            TrackPlayer.skip(index)
            TrackPlayer.play()
          }}
        />
      )}
    />
  )
}

export default TrackList

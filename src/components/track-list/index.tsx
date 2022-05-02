import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import TrackPlayer, { Track as TrackType } from 'react-native-track-player'
import Track from '../track'
import styles from './styles'

const TrackList: React.FC = () => {
  const [tracks, setTracks] = React.useState<TrackType[]>([])

  useEffect(() => {
    TrackPlayer.getQueue().then(setTracks)
  }, [])

  const handleAddPress = () => {
    TrackPlayer.add({
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    })
    TrackPlayer.getQueue().then(setTracks)
  }

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
          }}
        />
      )}
    />
  )
}

export default TrackList

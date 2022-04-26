import React from 'react'
import { FlatList } from 'react-native'
import { TrackType } from '../track'
import Track from '../track'
import styles from './styles'

const TrackList: React.FC = () => {
  return (
    <FlatList<TrackType>
      style={styles.container}
      data={[
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
        { title: 'track 1' },
      ]}
      renderItem={({ item: { title } }) => <Track title={title} />}
    />
  )
}

export default TrackList

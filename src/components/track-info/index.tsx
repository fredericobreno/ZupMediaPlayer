import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import styles from './styles'
import AddIcon from '../../assets/svg/add.svg'
import { Track as TrackType } from 'react-native-track-player'

export type TrackInfoProps = {
  track?: TrackType
  preset?: 'add' | 'small'
  style?: StyleProp<ViewStyle>
}

const TrackInfo: React.FC<TrackInfoProps> = props => {
  const { preset, track, style } = props

  return (
    <View style={[styles.container, style]}>
      {preset === 'add' ? (
        <AddIcon style={styles.imageContainer} fill='#ddd' />
      ) : (
        <View
          style={[
            styles.imageContainer,
            styles.image,
            preset === 'small' && styles.smallImage,
          ]}
        />
      )}
      <Text
        style={[styles.title, preset === 'small' && styles.smallTitle]}
        numberOfLines={1}
      >
        {track?.title || 'No title'}
      </Text>
    </View>
  )
}

export default TrackInfo

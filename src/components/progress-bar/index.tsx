import Slider from '@react-native-community/slider'
import React from 'react'
import { Text, View } from 'react-native'
import TrackPlayer, { ProgressState } from 'react-native-track-player'
import styles from './styles'

type Props = {
  progress: ProgressState
}

const ProgressBar: React.FC<Props> = props => {
  const { progress } = props

  const getTimeFromSeconds = (seconds: number) => {
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.clock}>{getTimeFromSeconds(progress.position)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        value={progress.position}
        maximumValue={progress.duration}
        step={1}
        thumbTintColor='transparent'
        minimumTrackTintColor='#ddd'
        maximumTrackTintColor='#aaa'
        onValueChange={value => TrackPlayer.seekTo(value)}
      />
      <Text style={styles.clock}>{getTimeFromSeconds(progress.duration)}</Text>
    </View>
  )
}

export default ProgressBar

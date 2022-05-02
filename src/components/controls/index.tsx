import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import NextIcon from '../../assets/svg/next.svg'
import PlayIcon from '../../assets/svg/play.svg'
import PauseIcon from '../../assets/svg/pause.svg'
import TrackPlayer, {
  Event,
  State,
  Track as TrackType,
  useTrackPlayerEvents,
} from 'react-native-track-player'
import styles from './styles'
import TrackInfo from '../track-info'

type Props = {
  state: State
  currentTrack?: TrackType
}

const Controls: React.FC<Props> = props => {
  const { state, currentTrack } = props
  const [disablePreviousButton, setDisablePreviousButton] = React.useState(
    false,
  )
  const [disableNextButton, setDisableNextButton] = React.useState(false)

  const handlePreviousPress = () => {
    TrackPlayer.skipToPrevious()
  }

  const handleNextPress = () => {
    TrackPlayer.skipToNext()
  }

  const handlePlayPausePress = () => {
    state === State.Playing ? TrackPlayer.pause() : TrackPlayer.play()
  }

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    const queue = await TrackPlayer.getQueue()

    setDisablePreviousButton(event.nextTrack === 0)
    setDisableNextButton(event.nextTrack === queue.length - 1)
  })

  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {currentTrack && <TrackInfo track={currentTrack} preset='small' />}
      </View>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={() => !disablePreviousButton && handlePreviousPress()}
        >
          <NextIcon
            width={32}
            height={32}
            fill={disablePreviousButton ? '#aaa' : '#fff'}
            transform={[{ scale: -1 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePlayPausePress()}>
          {state === State.Playing ? (
            <PauseIcon width={42} height={42} fill='#fff' />
          ) : (
            <PlayIcon width={42} height={42} fill='#fff' />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => !disableNextButton && handleNextPress()}
        >
          <NextIcon
            width={32}
            height={32}
            fill={disableNextButton ? '#aaa' : '#fff'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.side} />
    </View>
  )
}

export default Controls

import React, { useEffect, useRef } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import TrackPlayer, {
  Event,
  Track,
  useProgress,
} from 'react-native-track-player'
import Slider from '@react-native-community/slider'

const getMinutesAndSeconds = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time - minutes * 60)
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

const App: React.FC = () => {
  const { duration, position } = useProgress()
  const [url, setUrl] = React.useState(
    'https://ia800504.us.archive.org/10/items/testmp3testfile/mpthreetest.mp3',
  )
  const [tracks, setTracks] = React.useState<Track[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState<number>(0)
  const trackId = useRef(0)

  const handleAddPress = async () => {
    await TrackPlayer.add({ id: trackId.current++, url })
    setTracks(await TrackPlayer.getQueue())
  }
  const handlePlayPress = async () => {
    TrackPlayer.play()
  }
  const handlePausePress = async () => {
    TrackPlayer.pause()
  }
  const handleStopPress = async () => {
    TrackPlayer.stop()
  }
  const handleNextPress = async () => {
    TrackPlayer.skipToNext()
  }
  const handlePreviousPress = async () => {
    TrackPlayer.skipToPrevious()
  }

  useEffect(() => {
    TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async () => {
      setCurrentTrackIndex(await TrackPlayer.getCurrentTrack())
    })
  }, [])

  return (
    <View style={styles.container}>
      {/* mp3 input */}
      <View style={styles.mp3InputContainer}>
        <TextInput style={styles.mp3Input} value={url} onChangeText={setUrl} />
        <TouchableOpacity onPress={handleAddPress}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      {/* playlist */}
      <View style={styles.playlistContainer}>
        <Text>Playlist</Text>
        {tracks.map((track, i) => (
          <View
            key={track.id}
            style={[
              styles.track,
              i === currentTrackIndex && styles.activeTrack,
            ]}
          >
            <Text>{track.url}</Text>
          </View>
        ))}
      </View>

      {/* progress bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarClocks}>
          <Text>{getMinutesAndSeconds(position)}</Text>
          <Text>{getMinutesAndSeconds(duration)}</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          value={position}
          maximumValue={duration}
          step={1}
          minimumTrackTintColor='green'
          maximumTrackTintColor='#000000'
          onValueChange={value => TrackPlayer.seekTo(value)}
        />
      </View>

      {/* controls  */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={handlePlayPress}>
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePausePress}>
          <Text>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStopPress}>
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPress}>
          <Text>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePreviousPress}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  mp3InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mp3Input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 0,
    marginRight: 24,
  },
  playlistContainer: {
    backgroundColor: 'lightgray',
  },
  track: {
    backgroundColor: 'red',
  },
  activeTrack: {
    backgroundColor: 'blue',
  },
  progressBarContainer: {
    backgroundColor: 'lightgreen',
  },
  progressBarClocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    width: 200,
  },
  controlsContainer: {
    backgroundColor: 'lightblue',
  },
})

export default App

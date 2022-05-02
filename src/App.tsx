import React from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TrackList from './components/track-list'
import ProgressBar from './components/progress-bar'
import Controls from './components/controls'
import TrackPlayer, {
  Event,
  Track as TrackType,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player'
import styles from './styles'

const App: React.FC = () => {
  const [currentTrack, setCurrentTrack] = React.useState<TrackType>()
  const playbackState = usePlaybackState()
  const progress = useProgress()

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async () => {
    const trackIndex = await TrackPlayer.getCurrentTrack()
    const queue = await TrackPlayer.getQueue()

    setCurrentTrack(queue[trackIndex])
  })

  return (
    <>
      <LinearGradient
        colors={['#602727', '#602727', '#181818', '#181818']}
        locations={[0, 0.4, 0.6, 1]}
        style={styles.gradient}
      >
        {/* imagem do album */}
        <View style={styles.albumImageContainer}>
          <View style={styles.albumImage} />
        </View>

        {/* titulo da playlist */}
        <Text style={styles.playlistTitle}>My favorite songs</Text>

        {/* perfil */}
        <View style={styles.creatorImageContainer}>
          <View style={styles.creatorImage} />
          <Text style={styles.creatorName}>Frederico Breno</Text>
        </View>

        {/* lista de musicas */}
        <TrackList />

        {/* media player controls */}
        <View>
          {/* controls */}
          <Controls currentTrack={currentTrack} state={playbackState} />
          <ProgressBar progress={progress} />
        </View>
      </LinearGradient>
    </>
  )
}

export default App

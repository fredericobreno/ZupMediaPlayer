import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import TrackPlayer from 'react-native-track-player'

const App: React.FC = () => {
  useEffect(() => {
    ;(async () => {
      TrackPlayer.add([
        {
          url:
            'https://ia800504.us.archive.org/10/items/testmp3testfile/mpthreetest.mp3',
        },
      ])
      await TrackPlayer.play()
    })()
  }, [])

  return (
    <View>
      <Text>oi</Text>
    </View>
  )
}

export default App

/* eslint-disable react-native/no-inline-styles */
import Slider from '@react-native-community/slider'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Track, { TrackType } from './components/track'
import TrackList from './components/track-list'

const App: React.FC = () => {
  return (
    <>
      <LinearGradient
        colors={['#602727', '#602727', '#181818', '#181818']}
        locations={[0, 0.4, 0.6, 1]}
        style={{ flex: 1, padding: 24 }}
      >
        {/* imagem do album */}
        <View style={{ alignItems: 'center', marginVertical: 32 }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 200,
              height: 200,
            }}
          />
        </View>

        {/* titulo da playlist */}
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 8,
          }}
        >
          My favorite songs
        </Text>

        {/* perfil */}
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 12,
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 11,
              width: 22,
              height: 22,
              marginRight: 8,
            }}
          />
          <Text style={{ color: '#fff', fontSize: 10 }}>Gabrielle Ribeiro</Text>
        </View>

        {/* lista de musicas */}
        <TrackList />

        {/* media player controls */}
        <View>
          {/* controls */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 8,
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                width: 32,
                height: 32,
                marginRight: 8,
              }}
            />
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                width: 32,
                height: 32,
                marginRight: 8,
              }}
            />
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                width: 32,
                height: 32,
              }}
            />
          </View>
          {/* progress bar */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#ddd', fontSize: 8 }}>0:00</Text>
            <Slider
              style={{ backgroundColor: '#181818', flex: 1 }}
              minimumValue={0}
              value={0}
              maximumValue={15}
              step={1}
              thumbTintColor='transparent'
              minimumTrackTintColor='#ddd'
              maximumTrackTintColor='#aaa'
            />
            <Text style={{ color: '#ddd', fontSize: 8 }}>10:00</Text>
          </View>
        </View>
      </LinearGradient>
    </>
  )
}

export default App

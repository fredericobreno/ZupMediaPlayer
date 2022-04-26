import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export type TrackType = {
  title: string
}

const Track: React.FC<TrackType> = props => {
  const { title } = props

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.image} />
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.heart} />
        <View style={styles.options} />
      </View>
    </View>
  )
}

export default Track

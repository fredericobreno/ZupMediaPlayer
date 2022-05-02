import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from './styles'
import HeartIcon from '../../assets/svg/heart.svg'
import OptionsIcon from '../../assets/svg/options.svg'
import TrackInfo, { TrackInfoProps } from '../track-info'

type Props = TrackInfoProps & {
  onPress?: () => void
}

const Track: React.FC<Props> = props => {
  const { onPress, preset, ...rest } = props
  const [like, setLike] = React.useState(false)

  const handleLikePress = () => {
    setLike(!like)
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <TrackInfo {...rest} preset={preset} />
        {preset !== 'add' && (
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={handleLikePress}>
              {like ? (
                <HeartIcon style={styles.heart} fill='#f00' />
              ) : (
                <HeartIcon style={styles.heart} fill='#ddd' />
              )}
            </TouchableOpacity>
            <OptionsIcon style={styles.options} fill='#ddd' />
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default Track

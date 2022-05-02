import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  trackInfo: {
    position: 'absolute',
    left: 0,
  },
  side: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default styles

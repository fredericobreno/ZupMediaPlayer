import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#fff',
    width: 32,
    height: 32,
    marginRight: 8,
  },
  title: {
    color: '#fff',
    flex: 1,
  },
  heart: {
    backgroundColor: '#f00',
    width: 18,
    height: 18,
    marginRight: 8,
  },
  options: {
    backgroundColor: '#ddd',
    width: 18,
    height: 18,
  },
})

export default styles

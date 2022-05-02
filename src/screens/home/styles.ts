import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 24,
  },
  albumImageContainer: {
    alignItems: 'center',
    marginVertical: 32,
  },
  albumImage: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
  },
  playlistTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  creatorImageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
  creatorImage: {
    backgroundColor: '#fff',
    borderRadius: 11,
    width: 22,
    height: 22,
    marginRight: 8,
  },
  creatorName: {
    color: '#fff',
    fontSize: 10,
  },
})

export default styles

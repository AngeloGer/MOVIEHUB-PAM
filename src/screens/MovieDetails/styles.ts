import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPai: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  headerTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },

  posterContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },

  poster: {
    width: 220,
    height: 310,
    borderRadius: 24,
    backgroundColor: '#dfe3e6',
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  movieTitle: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  metaText: {
    color: '#5f6368',
    fontSize: 15,
    marginBottom: 12,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  ratingText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
  },

  infoCard: {
    backgroundColor: '#f5f7f9',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
  },

  sectionTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    color: '#30353a',
    fontSize: 15,
    lineHeight: 22,
  },

  gridInfo: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  infoBox: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 4,
  },

  label: {
    color: '#6b7280',
    fontSize: 12,
    marginBottom: 6,
  },

  value: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
  },

  buttonRow: {
    marginTop: 12,
  },
});

export default styles;
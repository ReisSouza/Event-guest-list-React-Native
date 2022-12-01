import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',

    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1f1e25',

    borderRadius: 5,

    marginBottom: 10,
  },
  name: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default styles;

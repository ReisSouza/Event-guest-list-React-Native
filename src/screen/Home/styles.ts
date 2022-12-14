import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 24,
    gap: 16,
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    height: 56,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  notFoundTest: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;

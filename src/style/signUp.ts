import {Dimensions, StyleSheet} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 60,
    fontWeight: 'bold',
  },
});

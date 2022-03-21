import {Platform, StyleSheet} from 'react-native';
import {colors, fonts, theme} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  inputContainer: {
    minHeight: 52,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.10)',
    ...theme.shadow,
    borderRadius: 26,
  },
  inputText: {
    textAlign: 'center',
    padding: Platform.OS === 'android' ? 0 : 14,
    color: colors.black,
    fontSize: 14,
    lineHeight: 17,
    width: '100%',
  },
  validationText: {
    padding: 5,
    paddingTop: Platform.OS === 'android' ? 0 : 5,
    paddingBottom: Platform.OS === 'android' ? 10 : 7,
    fontSize: 12,
    color: 'red',
  },
  downArrow: {
    position: 'absolute',
    right: 22,
  },
  inputTextTitle: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.darkGrey,
    marginVertical: 10,
    textAlign: 'center',
  },
  countryCodeText: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 14,
    lineHeight: 17,
  },
});

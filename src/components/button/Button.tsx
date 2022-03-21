import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors, fonts, theme} from '../../utils';

/**
 * Button - This normal button using in submit button.
 * @param title This must be required!
 * @param onPress This must be required!
 * @param style (Optional)
 * @param textStyle (Optional)
 * @param isDisable (Optional)
 */

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textstyle?: StyleProp<TextStyle>;
  isDisable?: boolean;
  icon?: JSX.Element;
}

const Button: React.FC<Props> = ({
  title,
  onPress,
  style,
  textstyle,
  isDisable = false,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        isDisable && {backgroundColor: colors.grayLabel},
      ]}
      disabled={isDisable}
      onPress={onPress}>
      {icon ? icon : <Text style={[styles.title, textstyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 40,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.harberGreen,
    ...theme.shadow,
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
});

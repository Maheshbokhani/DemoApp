import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../utils';

/**
 * TextButton - This normal text button using as skip or forgot password or forgot login.
 * @param title This must be required!
 * @param onPress This must be required!
 * @param style (Optional)
 * @param textStyle (Optional)
 */

interface Props {
  title: string;
  onPress: () => void;
  style?: any;
  textstyle?: any;
}

const TextButton: React.FC<Props> = ({title, onPress, style, textstyle}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, textstyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  title: {
    color: colors.darkBlue,
    fontSize: 14,
    lineHeight: 17,
  },
});

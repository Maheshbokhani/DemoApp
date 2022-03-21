import React, {FC, useEffect, useState} from 'react';
import {Text, View, TextInput, StyleSheet, Platform} from 'react-native';
import {colors} from '../../utils';
import {styles} from './style';

/**
 * FormInput - This functional component using in redux form as text input in authentication part.
 * @param input This is part of redux form, in this get value and onChange from redux
 * @param meta This is part of redux form, in this get error and valid status from redux
 * @param type in this get perticular picklists info
 * @param title (Optional), set field title
 * @param titleStyle (Optional)
 */
interface Props {
  props: any;
}

const FormInput: FC<Props> = props => {
  const [isFocused, setIsFocused] = useState(false);

  const {meta, input, type, title, titleStyle}: any = props;

  const validationStyles =
    meta.touched && meta.error ? (meta.valid ? {} : {color: 'red'}) : null;

  return (
    <View style={styles.container}>
      {title && (
        <Text style={[styles.inputTextTitle, titleStyle]}>{title}</Text>
      )}
      <View
        style={[
          styles.inputContainer,
          isFocused && {borderColor: 'orange' + '40'},
        ]}>
        <TextInput
          {...props}
          style={[styles.inputText, validationStyles]}
          placeholderTextColor={colors.grayPlaceholder}
          returnKeyType={'done'}
          value={input.value}
          onChangeText={input.onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {/* Validation text */}
      <Text style={styles.validationText}>
        {meta.touched && meta.error && meta.error}
      </Text>
    </View>
  );
};

export default FormInput;

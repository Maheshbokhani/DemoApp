import React from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {signInStr, signUpStr} from '../constant/string';
import {Field, reduxForm} from 'redux-form';
import {passwordRegex, validateEmail} from '../utils/validations';
import FormInput from '../components/input/FormInput';
import Button from '../components/button/Button';
import {useSelector} from 'react-redux';
import {ASYNC_GET} from '../api/config';

/**
 * SignIn
 *
 */
function SignIn({navigation, handleSubmit}: any) {
  const data = useSelector((state: any) => state.form?.signIn?.values);

  const onSubmit = async () => {
    const info = await ASYNC_GET(data?.email);
    if (info) {
      if (JSON.parse(info)?.password === data?.password)
        navigation.navigate('Home');
      else Alert.alert('Invalid password!');
    } else {
      Alert.alert('User not found!');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>{signInStr.title}</Text>
      <View>
        <Field
          name="email"
          label={signUpStr.email}
          placeholder={signUpStr.email_place}
          keyboardType={'email-address'}
          autoCapitalize="none"
          component={FormInput}
        />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder={signUpStr.password_place}
          label={signUpStr.password}
          component={FormInput}
        />
      </View>
      <View>
        <Button title={'Log in'} onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}

export default reduxForm({
  form: 'signIn',
  validate: (values: any) => {
    const errors: any = {};
    errors.password =
      !values.password || !passwordRegex.test(values.password)
        ? signUpStr.password_error
        : undefined;
    errors.email =
      !values.email || !validateEmail.test(values.email)
        ? signUpStr.email_error
        : undefined;
    return errors;
  },
})(SignIn);

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 32,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

import React from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {signUpStr} from '../constant/string';
import {Field, reduxForm} from 'redux-form';
import {passwordRegex, validateEmail} from '../utils/validations';
import FormInput from '../components/input/FormInput';
import Button from '../components/button/Button';
import TextButton from '../components/button/TextButton';
import {useSelector} from 'react-redux';
import {ASYNC_GET, ASYNC_SET} from '../api/config';

/**
 * SignUp
 *
 */
function SignUp({navigation, handleSubmit}: any) {
  const data = useSelector((state: any) => state.form?.signUp?.values);

  const onSubmit = async () => {
    const checkEmail = await ASYNC_GET(data?.email);
    if (checkEmail) Alert.alert('Error!', 'Email already exists!');
    else {
      await ASYNC_SET(data?.email, JSON.stringify(data));
      navigation.navigate('SignIn');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>{signUpStr.title}</Text>
      <View>
        <Field
          name="username"
          placeholder={signUpStr.username_place}
          label={signUpStr.username}
          component={FormInput}
        />
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
        <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
        <TextButton
          title={'Aleady have account?'}
          style={{marginTop: 15}}
          onPress={function (): void {
            navigation.navigate('SignIn');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default reduxForm({
  form: 'signUp',
  validate: (values: any) => {
    const errors: any = {};
    errors.username =
      !values.username || values.username?.length < 2
        ? signUpStr.username_error
        : undefined;
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
})(SignUp);

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

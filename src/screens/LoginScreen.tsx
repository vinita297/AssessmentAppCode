import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';

function LoginScreen(props: SectionProps): React.JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const OnSignIn = () => {
    if (email == '' && password == '') {
      Alert.alert('Please enter the email and password');
    } else if (email == '') {
      Alert.alert('Please enter the email ');
    } else if (password == '') {
      Alert.alert('Please enter the password');
    } else {
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', margin: 20}}>
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 10,
        }}>
        Sign in
      </Text>
      <TextInput
        style={{
          height: 40,
          marginVertical: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          borderColor: 'grey',
        }}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          borderColor: 'grey',
        }}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <TouchableOpacity
        onPress={() => {
          OnSignIn();
        }}
        style={{
          height: 60,
          borderWidth: 1,
          padding: 20,
          marginTop: 30,
          borderRadius: 5,
          borderColor: 'purple',
          backgroundColor: 'purple',
        }}>
        <Text style={{color: '#fff', alignSelf: 'center', fontWeight: 'bold'}}>
          Sign in
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Signup');
          }}>
          <Text
            style={{
              color: 'blue',
              alignSelf: 'flex-end',
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 5,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';

function SignupScreen(props: SectionProps): React.JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [Cpassword, setCPassword] = React.useState('');

  const OnSignUp = () => {
    if (email == '' && password == '' && Cpassword == '') {
      Alert.alert('Please enter the email and password');
    } else if (email == '') {
      Alert.alert('Please enter the email ');
    } else if (password == '') {
      Alert.alert('Please enter the password');
    } else if (Cpassword == '') {
      Alert.alert('Please enter the comfirm password');
    } else if (password !== Cpassword) {
      Alert.alert('Password and confirm password should be the same');
    } else {
      // let d = {email: email, password: password};
      // console.log('ll', JSON.stringify(d));

      // fetch(`http://192.168.117.94.:3000/signup`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(d),
      // })
      //   .then(res => {
      //     console.log(res.json());
      //   })
      //   .then(data => {
      //     console.log(data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      props.navigation.navigate('Login');
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', margin: 20}}>
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 20,
        }}>
        Sign up
      </Text>
      <TextInput
        style={{
          height: 40,
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
          marginVertical: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          borderColor: 'grey',
        }}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
      />

      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          borderColor: 'grey',
        }}
        onChangeText={text => setCPassword(text)}
        value={Cpassword}
        placeholder="Confirm password"
      />
      <TouchableOpacity
        onPress={() => {
          OnSignUp();
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
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignupScreen;

import * as React from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

function HomeScreen(props: SectionProps): React.JSX.Element {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');

  const OnSubmit = () => {
    if (title == '' && description == '' && image == '') {
      Alert.alert('Please enter the title,description and image');
    } else if (title == '') {
      Alert.alert('Please enter the title ');
    } else if (description == '') {
      Alert.alert('Please enter the description');
    } else if (image == '') {
      Alert.alert('Please select the image');
    } else {
      Alert.alert('done');
    }
  };

  return (
    <View style={{flex: 1, margin: 20}}>
      <Text style={{color: '#000', fontWeight: 'bold'}}>Title:</Text>
      <TextInput
        style={{
          height: 40,
          marginVertical: 9,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          borderColor: 'grey',
        }}
        onChangeText={text => setTitle(text)}
        value={title}
        placeholder="Enter Title"
      />
      <Text style={{color: '#000', fontWeight: 'bold', marginTop: 10}}>
        Description:
      </Text>
      <TextInput
        style={{
          height: 40,
          marginVertical: 9,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          borderColor: 'grey',
        }}
        onChangeText={text => setDescription(text)}
        value={description}
        placeholder="Enter Description"
      />
      <Text style={{color: '#000', fontWeight: 'bold', marginTop: 10}}>
        Image:
      </Text>
      <TextInput
        style={{
          height: 40,
          marginVertical: 9,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          borderColor: 'grey',
        }}
        onChangeText={text => setImage(text)}
        value={image}
        placeholder="Enter Image"
      />
      <TouchableOpacity
        onPress={() => {
          OnSubmit();
        }}
        style={{
          height: 40,
          borderWidth: 1,
          padding: 10,
          marginTop: 30,
          borderRadius: 5,
          borderColor: 'purple',
          backgroundColor: 'purple',
        }}>
        <Text style={{color: '#fff', alignSelf: 'center', fontWeight: 'bold'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

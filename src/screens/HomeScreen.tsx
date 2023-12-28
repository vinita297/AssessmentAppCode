import * as React from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert, Image,Modal,StyleSheet,Pressable,BackHandler} from 'react-native';
import {ImageLibraryOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';

function HomeScreen(props: SectionProps): React.JSX.Element {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [imageDropdown, setImageDropdown] = React.useState(false);

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    // Exit the app when on the Home screen
    BackHandler.exitApp();
    return true; // Prevent default behavior (going back)
  };

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

  const onSelectGallery = async () => {
    
    const options:ImageLibraryOptions = {
      mediaType: 'photo'
    }
  launchImageLibrary(options, (response) => {
    console.log('Res', response.assets[0].uri)
    setImage(response.assets[0].uri)
    })
  }

  return (
    <View style={{ flex: 1, margin: 20,opacity:imageDropdown==true?0.3:1 }}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={imageDropdown}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setImageDropdown(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setImageDropdown(false),onSelectGallery()}}>
              <Text style={styles.textStyle}>Select from gallery</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setImageDropdown(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          borderColor: 'grey',
          borderWidth: 1,
          padding: 20,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 25,
            alignSelf: 'center',
          }}>
          Add data to list
        </Text>

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
        {/* <TextInput
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
        /> */}
        <TouchableOpacity onPress={() => { setImageDropdown(true) }}>
          {image !== '' ?
            <Image
              style={{
                resizeMode: 'contain',
                height: 150,
                width: 150,
                borderRadius: 10,
                alignSelf: 'center'
              }}
              source={{ uri: image }}
            />
            :
            <Image
              style={{
                resizeMode: 'contain',
                height: 150,
                width: 150,
                borderRadius: 10,
                alignSelf: 'center'
              }}
              source={{ uri: 'http://knttraining.co.uk/wp-content/uploads/2018/11/how-to-add-a-png-to-a-photo-380x380.png' }}
            />}
          </TouchableOpacity>
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
          <Text
            style={{color: '#fff', alignSelf: 'center', fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('List')
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
          List of data ->
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 50,
  },
  button: {
    height: 40,
          borderWidth: 1,
          padding: 10,
          marginTop: 30,
          borderRadius: 5,
          borderColor: 'purple',
          backgroundColor: 'purple',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'purple',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;

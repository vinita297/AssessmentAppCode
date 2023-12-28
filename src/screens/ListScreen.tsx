import * as React from 'react';
import {Text, View, FlatList, Image, BackHandler} from 'react-native';

function ListScreen(props: SectionProps): React.JSX.Element {
  const [data, setData] = React.useState([
    {title: 'titll1', description: 'hiiiii', image: 'ghjas'},
    {title: 'titll2', description: 'hiiiii', image: 'ghjas'},
  ]);

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    // Exit the app when on the Home screen
    props.navigation.navigate('Home');
    // BackHandler.exitApp();
    return true; // Prevent default behavior (going back)
  };

  return (
    <View style={{justifyContent: 'center', margin: 20}}>
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 25,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderColor: '#000',
          marginBottom: 20,
        }}>
        List of Data
      </Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                // borderWidth: 1,
                borderColor: '#000',
                borderRadius: 5,
                padding: 10,
                marginVertical: 10,
                flexDirection: 'row',
              }}>
              <Image
                // resizeMode="contain"
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={{
                  resizeMode: 'contain',
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                }}
              />
              <View style={{marginLeft: 20}}>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
                  {item.title}
                </Text>
                <Text numberOfLines={1}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default ListScreen;

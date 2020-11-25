import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];
const App = () => {
  const playSound = (sound) => {
    const tone = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('NOT ABLE TO PLAY SOUND');
      }
    });
    setTimeout(() => {
      tone.play();
    }, 1000);

    tone.release();
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#8B78E6" />
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.views}>
        {soundList.map((sound, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttons}
            onPress={() => {
              playSound(sound);
            }}>
            <Text style={styles.text}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B78E6',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  views: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#2B2B52',
    borderRadius: 15,
  },
  text: {
    fontSize: 50,
    color: '#ffffff',
  },
});

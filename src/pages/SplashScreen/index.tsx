import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Fonts} from '../../assets';
import {auth} from '../../firebase';

type Props = {
  navigation: {replace: Function};
};

const SplashScreen: FC<Props> = ({navigation}) => {
  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(user => {
      console.log(user);
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      }, 3000);
    });

    return () => unsubsribe();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.titleView}>Movie App</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    fontSize: 40,
    fontFamily: Fonts.Poppins.bold,
    color: '#000000',
  },
});

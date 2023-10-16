import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getData} from '../../utils';
import {Fonts} from '../../assets';

interface UserData {
  fullName?: string;
  email?: string;
}

const Profile = () => {
  const [dataUser, setDataUser] = useState<UserData>({fullName: '', email: ''});

  useFocusEffect(
    useCallback(() => {
      getData('user').then(res => {
        const data = res;
        setDataUser(data);
      });
    }, []),
  );

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.containerView}>
        <Text style={styles.titleName}>{dataUser?.fullName}</Text>
        <Text style={styles.titleEmail}>{dataUser?.email}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleName: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
    textTransform: 'capitalize',
  },
  titleEmail: {
    fontSize: 12,
    fontFamily: Fonts.Poppins.regular,
    color: '#000000',
    textTransform: 'lowercase',
  },
});

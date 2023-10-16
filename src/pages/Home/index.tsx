import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {clearData, getData} from '../../utils';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase';
import {useFocusEffect} from '@react-navigation/native';
import {Fonts, IconLogout} from '../../assets';
import {Gap, NowPlaying, Popular, TopRated, UpComming} from '../../components';
import {useDispatch} from 'react-redux';

interface UserData {
  fullName?: string;
  email?: string;
}

type Props = {
  navigation: {replace: Function};
};

const Home: FC<Props> = ({navigation}) => {
  const [dataUser, setDataUser] = useState<UserData>({fullName: '', email: ''});
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      getData('user').then(res => {
        const data = res;
        setDataUser(data);
      });
    }, []),
  );

  const logOutAcc = () => {
    dispatch({type: 'SET_LOADING', value: true});
    signOut(auth)
      .then(() => {
        clearData('user');
        navigation.replace('Login');
        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(() => {
        dispatch({type: 'SET_LOADING', value: false});
      });
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.titleName}>{dataUser?.fullName}</Text>
            <Gap height={2} width={0} />
            <Text style={styles.titleEmail}>{dataUser?.email}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonLogout}
            onPress={() => logOutAcc()}>
            <IconLogout />
          </TouchableOpacity>
        </View>
        <View style={styles.upCommingView}>
          <UpComming />
        </View>
        <View style={styles.containerView}>
          <Gap height={20} width={0} />
          <NowPlaying />
          <Gap height={20} width={0} />
          <TopRated />
          <Gap height={20} width={0} />
          <Popular />
        </View>
        <Gap height={20} width={0} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
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
  buttonLogout: {
    width: 40,
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  upCommingView: {
    alignItems: 'center',
  },
  containerView: {
    paddingHorizontal: 16,
  },
});

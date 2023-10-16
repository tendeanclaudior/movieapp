import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {Button, Gap, Password, TextInput} from '../../components';
import {Fonts} from '../../assets';
import {storeData, useForm} from '../../utils';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase';
import {onValue, ref} from 'firebase/database';
import {useDispatch} from 'react-redux';

type Props = {
  navigation: {navigate: Function; replace: Function};
};

const Login: FC<Props> = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch({type: 'SET_LOADING', value: true});
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(res => {
        const userId = res.user.uid;
        const userRef = ref(db, `user/${userId}`);
        const unSubscribe = onValue(userRef, snapshot => {
          const dataUser = snapshot.val();
          const data = {
            fullName: dataUser.fullName,
            email: dataUser.email,
          };
          storeData('user', data);
          navigation.replace('MainApp');
          setForm('reset');
          dispatch({type: 'SET_LOADING', value: false});
        });

        return () => {
          unSubscribe();
        };
      })
      .catch(() => {
        Alert.alert('Error', 'Please enter your email and password correctly');
        dispatch({type: 'SET_LOADING', value: false});
      });
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.containerView}>
        <View>
          <Gap height={50} width={0} />
          <Text style={styles.titleView}>Login</Text>
          <Gap height={25} width={0} />
          <TextInput
            title={'Email'}
            placeholder={'Type your email.....'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={25} width={0} />
          <Password
            title={'Password'}
            placeholder={'Type your password.....'}
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={50} width={0} />
          <Button title={'Login'} onPress={() => signIn()} />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.createAccContent}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.titleCreateAcc}>Don't have account? </Text>
          <Text style={styles.titleCreateAccTwo}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  titleView: {
    fontSize: 30,
    fontFamily: Fonts.Poppins.bold,
    color: '#000000',
  },
  createAccContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  titleCreateAcc: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.medium,
    color: '#000000',
    textDecorationLine: 'underline',
  },
  titleCreateAccTwo: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.semibold,
    color: '#00ADF8',
    textDecorationLine: 'underline',
  },
});

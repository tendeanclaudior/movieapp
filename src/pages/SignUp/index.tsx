import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Button, Gap, Header, Password, TextInput} from '../../components';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {storeData, useForm} from '../../utils';
import {auth, db} from '../../firebase';
import {ref, set} from 'firebase/database';
import {useDispatch} from 'react-redux';

type Props = {
  navigation: {goBack: Function; replace: Function};
};

const SignUp: FC<Props> = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });
  // digunakan untuk mengirim action ke store Redux, yang kemudian akan memicu pembaruan state.
  const dispatch = useDispatch();

  const createAcc = () => {
    dispatch({type: 'SET_LOADING', value: true});
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        setForm('reset');

        const data = {
          fullName: form.fullName,
          email: form.email,
        };
        const userId = auth.currentUser?.uid;
        const userData = ref(db, `user/${userId}`);
        set(userData, data);

        storeData('user', data);
        navigation.replace('MainApp');
        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(() => {
        Alert.alert(
          'Error',
          'Please pay close attention to your email and password of at least 6 characters',
        );
        dispatch({type: 'SET_LOADING', value: false});
      });
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Sign Up'} onPress={() => navigation.goBack('Login')} />
      <View style={styles.containerView}>
        <View>
          <Gap height={25} width={0} />
          <TextInput
            title={'Name'}
            placeholder={'Type your name.....'}
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={10} width={0} />
          <TextInput
            title={'Email'}
            placeholder={'Type your email.....'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={10} width={0} />
          <Password
            title={'Password'}
            placeholder={'Type your password.....'}
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
        </View>
        <Gap height={50} width={0} />
        <View>
          <Button title={'Sign Up'} onPress={() => createAcc()} />
          <Gap height={50} width={0} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerView: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});

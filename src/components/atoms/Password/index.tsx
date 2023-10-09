import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Gap from '../Gap';
import {Fonts, IconEyeClose, IconEyeOpen} from '../../../assets';

type Props = {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
};

const Password: FC<Props> = ({title, placeholder, value, onChangeText}) => {
  const [eye, setEye] = useState(false);

  const contentEye = () => {
    setEye(!eye);
  };

  return (
    <>
      <Text style={styles.titleView}>{title}</Text>
      <Gap height={5} width={0} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'#C9C9C9'}
          maxLength={16}
          secureTextEntry={eye ? false : true}
          value={value}
          onChangeText={onChangeText}
        />
        {eye ? (
          <TouchableOpacity activeOpacity={0.5} onPress={() => contentEye()}>
            <IconEyeOpen />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.5} onPress={() => contentEye()}>
            <IconEyeClose />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Password;

const styles = StyleSheet.create({
  titleView: {
    fontSize: 25,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    width: '100%',
    height: 41,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: '#000000',
    height: 41,
  },
});

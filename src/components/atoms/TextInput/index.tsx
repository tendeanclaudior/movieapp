import {StyleSheet, Text, View, TextInput as InputText} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../../../assets';
import Gap from '../Gap';

type Props = {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
};

const TextInput: FC<Props> = ({title, placeholder, value, onChangeText}) => {
  return (
    <>
      <Text style={styles.titleView}>{title}</Text>
      <Gap height={5} width={0} />
      <View style={styles.inputView}>
        <InputText
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'#C9C9C9'}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
};

export default TextInput;

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
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    color: '#000000',
    height: 41,
  },
});

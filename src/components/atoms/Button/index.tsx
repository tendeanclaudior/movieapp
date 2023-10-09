import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../../../assets';

type Props = {
  onPress: () => void;
  title: string;
};

const Button: FC<Props> = ({onPress, title}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonView}
        onPress={onPress}>
        <Text style={styles.titleView}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#000000',
    borderRadius: 10,
    width: '100%',
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  titleView: {
    fontSize: 18,
    fontFamily: Fonts.Poppins.semibold,
    color: '#FFFFFF',
  },
});

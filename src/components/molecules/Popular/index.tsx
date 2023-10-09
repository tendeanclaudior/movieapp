import {Alert, FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Fonts} from '../../../assets';
import requestApi from '../../../requestApi';
import axios from 'axios';
import {Gap} from '../../atoms';
import CardView from './CardView';

const Popular = () => {
  const [dataTopRated, setDataTopRated] = useState();

  useEffect(() => {
    axios
      .request(requestApi.requestPopular)
      .then(res => {
        setDataTopRated(res.data.results);
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  }, []);

  return (
    <>
      <Text style={styles.title}>Popular</Text>
      <Gap height={5} width={0} />
      <FlatList
        data={dataTopRated}
        keyExtractor={(item, index) => 'key' + index + item}
        renderItem={({item}) => <CardView item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default Popular;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
  },
});

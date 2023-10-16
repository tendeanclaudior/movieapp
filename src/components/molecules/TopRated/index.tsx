import {Alert, FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Fonts} from '../../../assets';
import requestApi from '../../../requestApi';
import axios from 'axios';
import CardView from './CardView';
import {Gap} from '../../atoms';

const TopRated = () => {
  const [dataTopRated, setDataTopRated] = useState();

  useEffect(() => {
    axios
      .request(requestApi.requestTopRated)
      .then(res => {
        setDataTopRated(res.data.results);
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  }, []);

  return (
    <>
      <Text style={styles.title}>Top Rated</Text>
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

export default TopRated;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
  },
});

import {Alert, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';
import requestApi from '../../../requestApi';
import CardView from './CardView';

const UpComming = () => {
  const [dataUpComming, setDataUpComming] = useState();
  const width = Dimensions.get('window').width;

  useEffect(() => {
    axios
      .request(requestApi.requestUpComming)
      .then(res => {
        setDataUpComming(res.data.results);
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  }, []);

  return (
    <>
      <Carousel
        loop
        width={width - 70}
        height={300}
        data={dataUpComming || []}
        autoPlay={true}
        mode="parallax"
        scrollAnimationDuration={6000}
        renderItem={({item}) => {
          return <CardView item={item} />;
        }}
      />
    </>
  );
};

export default UpComming;

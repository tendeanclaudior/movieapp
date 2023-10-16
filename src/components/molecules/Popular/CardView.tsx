import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {storeData} from '../../../utils';
import {useNavigation} from '@react-navigation/native';

type PropsItem = {
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  popularity: string;
};

type Props = {
  item: PropsItem;
};

const CardView: FC<Props> = ({item}) => {
  const navigation = useNavigation();
  // agar dapat memanggil image, bawaan dari documentation API
  const getImage = (path: string) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.containerView}
      onPress={() => {
        const dataItem = {
          title: item.title,
          image: item.poster_path,
          popularity: item.popularity,
          date: item.release_date,
          desc: item.overview,
        };
        storeData('detailsMovie', dataItem);
        navigation.navigate('Details', {dataItem});
      }}>
      <Image source={{uri: getImage(item.poster_path)}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default CardView;

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});

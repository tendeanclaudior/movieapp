import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, Header} from '../../components';
import {getData} from '../../utils';
import {Fonts} from '../../assets';

type propsItem = {
  title: string;
  image: string;
  popularity: string;
  date: string;
  desc: string;
};

type Props = {
  item: propsItem;
  navigation: {goBack: Function};
};

const Details = ({navigation}: Props) => {
  const [dataItem, setDataItem] = useState<propsItem | null>(null);

  useEffect(() => {
    getData('detailsMovie').then(res => {
      setDataItem(res);
    });
  }, []);

  const getImage = (path: string) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title={dataItem?.title || 'Details'}
          onPress={() => navigation.goBack('a')}
        />
        <Gap height={20} width={0} />
        {dataItem && (
          <View style={styles.containerView}>
            <Image
              source={{uri: getImage(dataItem?.image)}}
              style={styles.image}
            />
            <Gap height={10} width={0} />
            <View style={styles.contentTitle}>
              <Text style={styles.titleView}>{dataItem?.popularity}</Text>
              <Text style={styles.titleView}>{dataItem?.date}</Text>
            </View>
            <Gap height={5} width={0} />
            <View>
              <Text style={styles.titleDesc}>{dataItem?.desc}</Text>
            </View>
          </View>
        )}
        <Gap height={20} width={0} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 10,
  },
  containerView: {
    paddingHorizontal: 16,
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleView: {
    fontSize: 18,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
  },
  titleDesc: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.regular,
    color: '#000000',
    textAlign: 'center',
  },
});

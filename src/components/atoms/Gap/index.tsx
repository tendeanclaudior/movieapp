import {View} from 'react-native';
import React, {FC} from 'react';

type Props = {
  height: number;
  width: number;
};

const Gap: FC<Props> = ({height, width}) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;

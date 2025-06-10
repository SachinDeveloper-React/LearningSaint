import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {AutoImageSlider, Header} from '../../Components';
import {Size} from '../../lib';
import {hiringPartner} from '../../utils';

const HiringPartner = () => {
  return (
    <View style={styles.hiring_partner_padding}>
      <Header title="Hiring Partner" />
      {hiringPartner.map(item => {
        return (
          <Fragment key={item.id}>
            <AutoImageSlider list={item.list} reverse={item.reverse} />
          </Fragment>
        );
      })}
    </View>
  );
};

export default HiringPartner;

const styles = StyleSheet.create({
  hiring_partner_padding: {
    padding: Size.padding.xls_10,
  },
});

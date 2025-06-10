import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, SelectItem} from './common';

type Props = {
  data: {
    id: string;
    name: string;
    selectColor: string;
    isChecked: boolean;
  }[];
  onPress?: (
    item: {
      id: string;
      name: string;
      selectColor: string;
      isChecked: boolean;
    }[],
  ) => void;
  clearPress?: () => void;
};

const SelectQueriesContent = (props: Props) => {
  const {data, onPress, clearPress} = props;
  const [selectDomain, setSelectDomain] = useState<
    {
      id: string;
      name: string;
      selectColor: string;
      isChecked: boolean;
    }[]
  >(data);
  const [btnActive, setBtnActive] = useState(false);
  const handleDomainChange = (item: {
    id: string;
    name: string;
    selectColor: string;
  }) => {
    let temp = selectDomain.map(product => {
      if (item.id === product.id) {
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    setSelectDomain(temp);
  };

  useEffect(() => {
    for (let index = 0; index < selectDomain.length; index++) {
      const element = selectDomain[index];
      if (element.isChecked) {
        setBtnActive(true);
        break;
      } else {
        setBtnActive(false);
      }
    }
  }, [selectDomain]);

  const applyFilter = () => {
    onPress && onPress(selectDomain);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
        }}>
        <FlatList
        removeClippedSubviews={false} 
          data={selectDomain}
          scrollEnabled={true}
          bounces={false}
          renderItem={({item}) => {
            return (
              <SelectItem
                title={item.name}
                onPress={() => handleDomainChange(item)}
                active={item.isChecked}
              />
            );
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          <Button
            title="Clear All"
            onPress={() => {
              let temp = selectDomain.map(product => {
                if (product.isChecked) {
                  return {...product, isChecked: !product.isChecked};
                }
                return product;
              });
              setSelectDomain(temp);
              clearPress && clearPress();
            }}
            style={{
              flex: 1,
              padding: 5,
            }}
            disabled={btnActive ? false : true}
          />
          <Button
            title="Apply Filter"
            onPress={() => applyFilter()}
            style={{
              flex: 1,
              padding: 5,
            }}
            disabled={btnActive ? false : true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectQueriesContent;

const styles = StyleSheet.create({});

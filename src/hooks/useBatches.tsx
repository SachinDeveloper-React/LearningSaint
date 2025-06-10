import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {batchesService} from '../services';
import {useMMKVBoolean, useMMKVString} from 'react-native-mmkv';

type Props = {};

const useBatches = (props: Props) => {
  const [batches, setBatches] = useState({
    isLoading: false,
    isError: false,
    error: '',
    batches: [],
    selectedBatch: {},
  });

  const [login, setLogin] = useMMKVBoolean('@login');
  const fetchBatches = async () => {
    setBatches({...batches, isLoading: true});
    const batchesResponse = await batchesService();

    if (batchesResponse == true) {
      setBatches({
        ...batches,
        isLoading: false,
        batches: [],
        isError: true,
        error: 'Batches Not Found',
      });
    } else {
      setBatches({
        ...batches,
        isLoading: false,
        batches: batchesResponse?.data?.batches,
      });
    }
  };

  useEffect(() => {
    if (batches.batches.length === 0 && Boolean(login)) {
      fetchBatches();
    }
  }, []);

  return [batches];
};

export default useBatches;

const styles = StyleSheet.create({});

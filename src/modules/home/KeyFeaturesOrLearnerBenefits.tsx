import {
    StyleSheet,
    useColorScheme,
    useWindowDimensions,
    Text,
    View,
  } from 'react-native';
  import React, {Fragment} from 'react';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import {Colors, Size} from '../../lib';
  import {keyFeatures_Or_LearnerBenefits} from '../../utils';
  import {Header} from '../../Components';
  
  type Props = {};
  
  const KeyFeaturesOrLearnerBenefits = (props: Props) => {
    const colorScheme = useColorScheme();
    const {width} = useWindowDimensions();
    return (
      <View style={styles.keyFeatures_Or_LearnerBenefits_padding}>
        <Header title="Key Features or Learner Benefits" />
  
        <View style={[styles.keyFeatures_Or_LearnerBenefits_container]}>
          {keyFeatures_Or_LearnerBenefits.map(
            (feature: {
              id: number;
              icon_type: string;
              icon: any;
              title: string;
            }) => {
              const {icon, icon_type, id, title} = feature;
              return (
                <Fragment key={id}>
                  <View style={styles.keyFeatures_Or_LearnerBenefits_list}>
                    {icon_type === 'FontAwesome' ? (
                      <FontAwesome
                        name={icon}
                        size={20}
                        color={Colors.default.dark}
                      />
                    ) : (
                      <FontAwesome5
                        name={icon}
                        size={20}
                        color={Colors.default.dark}
                      />
                    )}
                    <Text
                      style={{
                        color: Colors.default.dark,
                      }}>
                      {title}
                    </Text>
                  </View>
                </Fragment>
              );
            },
          )}
        </View>
      </View>
    );
  };
  
  export default KeyFeaturesOrLearnerBenefits;
  
  const styles = StyleSheet.create({
    keyFeatures_Or_LearnerBenefits_container: {
      // margin: "auto",
      borderRadius: Size.radius.x_6,
      padding: Size.padding.xls_10,
    },
    keyFeatures_Or_LearnerBenefits_list: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginVertical: Size.margin.xls_10,
    },
    keyFeatures_Or_LearnerBenefits_padding: {
      padding: Size.padding.xls_10,
    },
  });
  
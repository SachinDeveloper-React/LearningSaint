import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React, {Fragment} from 'react';
  import {Header} from '../../Components';
  import {Colors, Size} from '../../lib';
  import {learnerBenefit} from '../../utils';
  
  type Props = {};
  
  const LearnerBenefit = (props: Props) => {
    const {width} = useWindowDimensions();
    return (
      <View style={{marginVertical: 10}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          <Header title="Learner Benefit" />
        </View>
        <FlatList
          horizontal
          removeClippedSubviews={false} 
          data={learnerBenefit}
          shouldRasterizeIOS
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
          renderItem={({item, index}) => {
            const {heading, id, img, list} = item;
            return (
              <Fragment>
                <View style={[styles.learningBenefitContainer, {width: width}]}>
                  <Text
                    numberOfLines={1}
                    style={[styles.learningBenefit_heading_text]}>
                    {heading}
                  </Text>
  
                  <Image
                    source={{
                      cache: 'force-cache',
                      uri: img,
                    }}
                    width={width}
                    height={width * 0.6}
                    resizeMode="contain"
                    style={styles.img_banner}
                  />
                  <View style={{marginHorizontal: 10}}>
                    {list.map(list => {
                      const {desc, icon_color, icon_type, id} = list;
                      return (
                        <Fragment key={id}>
                          <View style={styles.learningBenefit_list_text}>
                            <View
                              style={{
                                width: width * 0.03,
                                height: width * 0.03,
                                borderRadius:
                                  icon_type === 'circle' ? (width * 0.03) / 2 : 0,
                                backgroundColor: icon_color,
                              }}
                            />
                            <Text
                              style={{
                                flex: 1,
                                color: Colors.default.dark,
                              }}>
                              {desc}
                            </Text>
                          </View>
                        </Fragment>
                      );
                    })}
                  </View>
                </View>
              </Fragment>
            );
          }}
          snapToAlignment="center"
          snapToStart={true}
          snapToInterval={width}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };
  
  export default LearnerBenefit;
  
  const styles = StyleSheet.create({
    learningBenefitContainer: {
      // width: "100%",
    },
    learningBenefit_heading_text: {
      fontSize: Size.fontSize.md_16,
      fontWeight: '700',
      textAlign: 'left',
      marginHorizontal: 10,
      color: Colors.default.dark,
    },
    learningBenefit_list_text: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
    },
    img_banner: {
      marginVertical: 10,
    },
  });
  
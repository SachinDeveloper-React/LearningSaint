import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {Colors, getDateFormat} from '../../lib';
import {ArticleCard, Header} from '../../Components';
import {useNavigation} from '@react-navigation/native';

type Props = {
  blogs: {
    id: number;
    siteId: string;
    language: string;
    tags: null;
    category_id: null;
    author: string;
    title: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    image: string;
    content: string;
    url: string;
    status: string;
    date: string;
    created_at: string;
    updated_at: string;
  }[];
};

const ArticalList = (props: Props) => {
  const {blogs} = props;
  const {navigate} = useNavigation();
  const {fontScale, height, width} = useWindowDimensions();
  const handlePress = (item: string, title: string) => {
    navigate('ArticleDetailScreen', {
      url: item,
      name: title,
    });
  };
  return (
    <View>
      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Header title="Latest Blogs" />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('ArticleScreen')}>
            <Text
              style={{
                color: Colors.default.tint,
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Show More
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
        removeClippedSubviews={false} 
          horizontal
          data={blogs.slice(0, 10).reverse()}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{
            gap: 10,
          }}
          renderItem={({index, item}) => {
            const {author, title, created_at, url} = item;
            const date = getDateFormat(created_at);

            return (
              <View
                style={{
                  width: width > 500 ? width * 0.4 :  width * 0.9,
                }}>
                <ArticleCard
                  imageUrl="https://www.learningsaint.com/assets/images/blog/post-01/post-01.jpg"
                  title={title}
                  date={`${date.modifyDate} ${date.month}, ${date.year}`}
                  onPress={() => handlePress(url, title)}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ArticalList;

const styles = StyleSheet.create({});

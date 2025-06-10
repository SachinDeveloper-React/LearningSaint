import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {ArticleCard, Header, Loader} from '../../Components';
  import {Colors, getDateFormat} from '../../lib';
  import {useBlog} from '../../hooks';
  import {useNavigation} from '@react-navigation/native';
  import { Platform } from 'react-native';
  
  type Props = {};
  
  const Empty = () => {
    return (
      <View>
        <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 20}}>
          There are no blogs at this time.
        </Text>
      </View>
    );
  };
  
  const ArticleScreen = (props: Props) => {
    const {width} = useWindowDimensions()
    const {navigate} = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const [blogs] = useBlog({
      refreshing: refreshing,
    });
  
    const handlePress = (item: string, title: string) => {
      navigate('ArticleDetailScreen', {
        url: item,
        name: title,
      });
    };
    const handleLoadMore = () => {
      // Handle the "Read More" press here
    };
    const onRefresh = () => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    };
  
    const ITEM_HEIGHT = 200;
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        removeClippedSubviews={false} 
          data={blogs.blog.reverse()}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{
            paddingHorizontal: 20,
            // gap: 10,
          }}
         
          ListHeaderComponent={() => {
            return (
              <View style={{paddingVertical: 24}}>
                <Header title="Blogs" />
              </View>
            );
          }}
          numColumns={width > 500 ? 2 : 1}
          ListEmptyComponent={blogs.isLoading ? <Loader /> : <Empty />}
          showsVerticalScrollIndicator={false}
          decelerationRate={'normal'}
          bouncesZoom={true}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          // onEndReached={() => {
          //   const abc = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
          //   setBlog(prev => [...prev, ...abc]);
          // }}
          // ListFooterComponent={() => {
          //   return <ActivityIndicator size={'small'} />;
          // }}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={({index, item}) => {
            const {author, title, created_at, url} = item;
            const date = getDateFormat(created_at);
            return (
              <View style={{
                width: width > 500 ? (width / 2) - 20 : width - 40,
                paddingHorizontal:width > 500 ? 5: 0
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
      </SafeAreaView>
    );
  };
  
  export default ArticleScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.default.light,
    },
  });
  
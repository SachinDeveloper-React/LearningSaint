import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {RootStackScreenProps} from '../../Navigations/types';
  import {blogsDetailService} from '../../services';
  import {Colors, Size} from '../../lib';
  import RenderHTML from 'react-native-render-html';
  
  type Props = {};
  
  const ArticleDetailScreen = ({
    navigation,
    route,
  }: RootStackScreenProps<'ArticleDetailScreen'>) => {
    const {url, name} = route.params;
    const {width} = useWindowDimensions();
  
    const [blogDetail, setBlogDetail] = useState<{
      detail: {
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
      };
      isLoading: boolean;
      isError: boolean;
      error: string;
    }>({
      isLoading: false,
      isError: false,
      error: '',
      detail: {
        id: 0,
        siteId: '',
        language: '',
        tags: null,
        category_id: null,
        author: '',
        title: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        image: '',
        content: '',
        url: '',
        status: '',
        date: '',
        created_at: '',
        updated_at: '',
      },
    });
  
    const fetchDetail = async () => {
      const responseBlogdeatil = await blogsDetailService(url);
  
      if (responseBlogdeatil.isError) {
        setBlogDetail({
          ...blogDetail,
          isLoading: false,
          isError: true,
          error: responseBlogdeatil.error,
          detail: {
            id: 0,
            siteId: '',
            language: '',
            tags: null,
            category_id: null,
            author: '',
            title: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
            image: '',
            content: '',
            url: '',
            status: '',
            date: '',
            created_at: '',
            updated_at: '',
          },
        });
      } else {
        setBlogDetail({
          ...blogDetail,
          isLoading: false,
          detail: responseBlogdeatil.data.blog[0],
        });
      }
    };
    useEffect(() => {
      fetchDetail();
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{blogDetail?.detail?.title}</Text>
  
          <Image
            source={{
              uri: 'https://www.learningsaint.com/assets/images/blog/blog-details-02/post-01.jpg',
              cache: 'force-cache',
            }}
            width={width * 0.95}
            height={200}
            resizeMode="cover"
          />
          <View>
            <RenderHTML
              contentWidth={width}
              tagsStyles={{
                p: {color: '#000'},
                h1: {color: '#000'},
                h2: {color: '#000'},
                h3: {color: '#000'},
                h4: {color: '#000'},
                h5: {color: '#000'},
              }}
              source={{
                html: blogDetail?.detail?.content,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ArticleDetailScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.default.light,
      padding: 10,
    },
    contentContainer: {
      // padding: 10,
    },
    title: {
      fontSize: Size.fontSize.xxxlg_30,
      color: Colors.default.dark,
      fontWeight: 'bold',
      paddingVertical: 10,
    },
  });
  
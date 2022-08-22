import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import SPACING from '../../config/SPACING';
const { height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/Restaurant/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import SingleIngredient from '../../componets/SingleIngredient';
import YoutubeVideoPlayer from '../../componets/YoutubeVideoPlayer';

const CategoryDetail = () => {
  const route = useRoute();
  // const recipeId = route.params.url;
  const [recipe, setRecipe] = useState([]);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const searchData = async () => {
    const options = {
      headers: { 'content-type': 'application/json' },
    };
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        options
      );
      const json = await response.json();
      setRecipe(json.meals[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  useEffect(() => {
    searchData();
    toggleLoader();
  }, []);
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              padding: SPACING * 2,
              height: height / 2.5,
              padding: SPACING * 2,
              paddingTop: SPACING * 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            source={require('../../assets/ct-beef.jpg')}
          >
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SPACING * 2.5,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name='arrow-back'
                size={SPACING * 2.5}
                color={colors.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SPACING * 2.5,
              }}
            >
              <Ionicons name='share' size={SPACING * 2.5} color={colors.gray} />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: colors.white,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                marginBottom: SPACING * 3,
                alignItems: 'center',
              }}
            >
              <View style={{ width: '70%' }}>
                <Text
                  style={{
                    fontSize: SPACING * 3,
                    color: colors.black,
                    fontWeight: '700',
                  }}
                >
                  Category Name
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryDetail;
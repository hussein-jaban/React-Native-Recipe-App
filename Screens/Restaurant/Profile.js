import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Share,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Receta App| A recepe app | https://github.com/Hussein-omar-osman/React-Native-Recipe-App#:~:text=expo.dev/%40hussein%2Domar/receta%2Dapp%3Fservicetype%3Dclassic%26distribution%3Dexpo%2Dgo',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={[styles.userInfoSection, { marginBottom: -10 }]}>
        <View style={styles.row}>
          <Icon name='map-marker-radius' color='#777777' size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            Kolkata, India
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name='phone' color='#777777' size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name='email' color='#777777' size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <TouchableOpacity
          style={{
            // flexDirection: 'column',
            alignItem: 'center',
            justifyContent: 'center',
            backgroundColor: 'tomato',
            height: 45,
            padding: 15,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: '#fff' }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='heart-outline' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='credit-card' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={onShare}>
          <View style={styles.menuItem}>
            <Icon name='share-outline' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='account-check-outline' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name='setting' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    // borderBottomWidth: 1,
    // borderTopColor: '#dddddd',
    // borderTopWidth: 1,
    flexDirection: 'row',
    height: 50,
    padding: 10,
    margin: 15,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
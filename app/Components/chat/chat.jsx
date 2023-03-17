import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Chat = ({data}) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            size={30}
            source={{
              uri: data?.img,
            }}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={styles.name}>{data?.name} </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          <FontAwesomeIcon name="emoji-emotions" color="#7c7b76" size={20} />
        </View>
      </View>
      <View style={{width: '85%', marginLeft: 'auto', marginRight: '5%'}}>
        <Text style={styles.des}>{data?.comment}</Text>

        <View style={styles.actions}>
          {data?.heart && (
            <>
              <View style={styles.likes}>
                <FontAwesome name="heart" color="red" size={20} />
                <Text style={styles.like}>{data.heart}</Text>
              </View>
            </>
          )}

          {data?.like && (
            <>
              <View style={styles.likes}>
                <AntDesign name="like1" color="blue" size={20} />
                <Text style={styles.like}>{data.like}</Text>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    // borderColor: '#8d8a87',
    // backgroundColor: '#1d1a12',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
  },
  name: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  category: {
    color: '#8d8a87',
    fontSize: 12,
  },

  des: {
    color: '#8d8a87',
    fontSize: 12,
    marginTop: 10,
  },
  likes: {
    backgroundColor: '#121212',
    marginRight: 10,
    width: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#8d8a87',
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
  },
  like: {color: 'white', fontSize: 12, marginLeft: 10},
  comment: {
    marginLeft: 10,
    color: 'white',
    fontSize: 12,
  },
});

export default Chat;

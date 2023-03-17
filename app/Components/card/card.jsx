import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Card = ({data}) => {
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
            size={50}
            source={{
              uri: data?.userImg,
            }}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={styles.name}>
              {data?.username}{' '}
              <Text style={styles.category}>({data?.category})</Text>
            </Text>
            <Text style={styles.time}>{data?.time}</Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          <FontAwesomeIcon name="more-vert" color="#7c7b76" size={30} />
        </View>
      </View>
      <Text style={styles.des}>{data?.des}</Text>
      {data?.image && (
        <Image
          source={{uri: data?.image}}
          style={{width: '100%', height: 200, marginTop: 10, borderRadius: 12}}
        />
      )}
      <View style={styles.actions}>
        <View style={styles.likes}>
          <TouchableOpacity onPress={() => console.log}>
            <FontAwesomeIcon name="expand-less" color="#8d8a87" size={25} />
          </TouchableOpacity>
          <Text style={styles.like}>{data.likes}</Text>
          <TouchableOpacity onPress={() => console.log}>
            <FontAwesomeIcon name="expand-more" color="#8d8a87" size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.likes}>
          <FontAwesome name="comment" color="#8d8a87" size={20} />
          <Text style={styles.comment}>{data?.comments}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#8d8a87',
    backgroundColor: '#1d1a12',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
  },
  name: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  category: {
    color: '#8d8a87',
    fontSize: 12,
  },
  time: {color: '#8d8a87', marginTop: 5},
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
  like: {color: 'white', fontSize: 12, marginHorizontal: 2},
  comment: {
    marginLeft: 10,
    color: 'white',
    fontSize: 12,
  },
});

export default Card;

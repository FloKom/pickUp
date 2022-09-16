/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../../components/styles';

const { secondary } = Colors;
// const image1 = require('../images/orange.jpg');
// const image2 = require('../images/tomato.jpg');
// const image3 = require('../images/salmon.jpg');
// const image4 = require('../images/greens.jpg');
// const image5 = require('../images/rye-bread.jpg');

// const data = [
//   {
//     id: 1,
//     image: image1,
//     name: 'Orange',
//     price: 100,
//     amountTaken: 3,
//   },
//   {
//     id: 2,
//     image: image2,
//     name: 'Tomate noire de krime',
//     price: 500,
//     amountTaken: 4,
//   },
//   {
//     id: 3,
//     image: image3,
//     name: 'Salmon fillet',
//     price: 1600,
//     amountTaken: 2,
//   },
//   {
//     id: 4,
//     image: image4,
//     name: 'Greens',
//     price: 3000,
//     amountTaken: 3,
//   },
//   {
//     id: 5,
//     image: image5,
//     name: 'Rye Bread',
//     price: 20000,
//     amountTaken: 1,
//   },
// ];

const Item = ({data})=> {
  const renderItem = ({ item, index})=>{
    const {
      containerStyle,
      lastItemStyle,
      imageStyle,
      textStyle,
      counterStyle,
      priceStyle,
    } = styles;
    return (
      <View style={index + 1 === data.length ? lastItemStyle : containerStyle}>
        <Image source={{uri:item.photoURL}} style={imageStyle} />
        <View style={textStyle}>
          <Text style={{ color: '#2e2f30', fontSize: 17, letterSpacing: 1 }}>{item.nom}</Text>
          <View style={priceStyle}>
            <Text style={{ color: '#2e2f30', fontSize: 13, fontWeight:'bold' }}>{item.quantite}</Text>
          </View>
        </View>
      </View>
    );
  }

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,

  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  textStyle: {
    flex: 1.5,
    justifyContent: 'center',
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 80,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3,
  },

};

export default Item;

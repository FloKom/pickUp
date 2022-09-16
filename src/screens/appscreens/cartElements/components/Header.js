/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Alert, Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({client}) => {

  return (
    <View style={styles.headerStyle}>
        <TouchableOpacity onPress={() => console.log(1)}>
          <Icon name="ios-cart" size={35} color="#a8a9ad" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>{client.nom + ' ' + client.prenom + ' '+ 'Tel:' +' '+ client.numero} </Text>

      </View>
  );
};

const styles = {
  headerStyle: {

    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#e2e2e2',
  },

};

export default Header;

/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TotalComp from './TotalComponent';
import { ButtonText, Colors, ExtraView, StyledButton, TextLink, TextLinkContent } from '../../../../components/styles';
import { postData } from '../../../../helpers/fetchData-helpers';
const { secondary } = Colors;

const Footer = ({total, navigation}) => {

  const {
    containerStyle,
    buttonContainerStyle,
    checkoutButtonStyle } = styles;
  const onConfirm = ()=>{
    postData({statut:'livre'},'pannier/' + total.id).then(()=>{
      navigation.navigate('Delivery Confirmed')
    })
  }
    return (
    <View style={containerStyle}>
      <TotalComp total={total}/>
      <View style={buttonContainerStyle}>
        <StyledButton
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          onPress={onConfirm}
          >
          <ButtonText>Confirm delivery</ButtonText>
        </StyledButton>
      </View>
      
    </View>

  );
};

const styles = {
  containerStyle: {
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  checkoutButtonStyle: {
    backgroundColor: secondary,
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3,
    marginLeft: 10,
  },
};

export default Footer;

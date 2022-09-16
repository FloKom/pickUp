/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { InnerContainer, StyledContainer, StyledFormArea, PageTitle, SubTitle, ExtraView, TextLink, TextLinkContent } from '../../components/styles';
import { Image, StyleSheet, Text, View } from 'react-native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function PaymentSuccess({ navigation }){

    return (
        <StyledContainer style={styles.forheight}>
            <StatusBar style="auto" />
            <InnerContainer >
                
                <Text style={styles.text}>The delivery has been successfully done!
                </Text>
                <View>
                    <Image
                        style={{ height: 250, width: 235, top: 30, marginLeft: 'auto', marginRight: 'auto' }}
                        source={require('../../assets/ok.png')}
                    />
                </View>
                <ExtraView
                    style={{ top: 45 }}>
                    <TextLink onPress>
                        <TextLinkContent>Go back to Home</TextLinkContent>
                    </TextLink>
                </ExtraView>
            </InnerContainer>
        </StyledContainer>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: hp('2.5%'),
        textAlign: 'center',
        marginTop: 40,
        padding: 3,
    },
    forheight: {
        // height: hp('100%'),
    },
});

/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, Modal, View, Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OTPTextView from 'react-native-otp-textinput';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { InnerContainer, PageLogo, StyledContainer, PageTitle, StyledButton, ButtonText, StyledFormArea } from '../../components/styles';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Formik } from 'formik';
import { getData } from '../../helpers/fetchData-helpers';
const styles = StyleSheet.create({
    text: {
        fontSize: hp('2.5%'),
        textAlign: 'center',
        marginTop: 70,
        marginBottom: 70,
        padding: 3,
    },
    forheight: {
        // height: hp('108%'),
    },
    textInput: {
        height: 40,
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        letterSpacing: 5,
        marginBottom: 10,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonClose: {
        backgroundColor: '#2e2f30',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      button: {
        borderRadius: 10,
        width: 50,
        padding: 10,
        elevation: 1,
      },

});

export default class Home extends Component {
    state = {
        otpInput: '',
        inputText: '',
        modalVisible: false
    };
    updateOtpText = () => {
        // déclenchera automatiquement le callback handleOnTextChange passé
        this.input1.setValue(this.state.inputText);
    };
    getCart = async()=>{
        let cart = await getData('pannier/'+this.state.otpInput)
        if(cart == null){
            this.setState({...this.state, modalVisible:true, text:"This order doesn't exist" })
        }else{
            if(cart.statut === 'non paye'){
                this.props.navigation.navigate('Cart', {cart})
            }else{
                this.setState({...this.state, modalVisible:true, text:"This order was already delivered"  })
            }
        }
        console.log(cart)
    }

    render() {
        return (
            <>
                <Modal
                    statusBarTranslucent={true}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({...this.state, modalVisible:!this.state.modalVisible });
                    } }>
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{this.state.text}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={async() => {
                                this.setState({...this.state, modalVisible:!this.state.modalVisible })
                            }}>
                        <Text style={styles.textStyle}>Ok</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
                <KeyboardAvoidingWrapper>
                <StyledContainer style={styles.forheight}>
                    <StatusBar style="auto" />
                    <PageLogo
                        resizeMode="cover"
                        source={require('../../assets/jumbofoodlogo.png')}
                        style={{ width: 90, height: 20, bottom: 20, marginBottom: -35 }} />
                    <InnerContainer>
                        <Text style={styles.text}>Enter the active transaction code of the client to
                            process the order.</Text>
                        <Formik>
                            <StyledFormArea>
                                <OTPTextView
                                    ref={e => (this.input1 = e)}
                                    containerStyle={styles.textInputContainer}
                                    handleTextChange={text => {
                                        this.setState({...this.state, otpInput: text })
                                    }}
                                    inputCount={5}
                                    keyboardType="default"
                                    tintColor="#B33030"
                                />
                                <StyledButton
                                    style={{ width: 150, top: 30, marginLeft: 'auto', marginRight: 'auto' }}
                                    onPress={()=>this.getCart()}
                                >
                                    <ButtonText>Enter</ButtonText>
                                </StyledButton>
                            </StyledFormArea>


                        </Formik>
                    </InnerContainer>
                </StyledContainer>
            </KeyboardAvoidingWrapper>
            </>
        );
    }
}



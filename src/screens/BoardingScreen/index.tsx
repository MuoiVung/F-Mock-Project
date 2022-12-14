import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {CustomScreenContainer} from '../../components';
import BigCustomButton from '../../components/BigCustomButton';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {BoardingScreenProps} from '../../types';
import {scaleUI} from '../../utils';

const BoardingScreen = ({navigation}: BoardingScreenProps) => {
  const moveToLoginHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        resizeMode="stretch"
        style={styles.image}>
        <CustomScreenContainer style={styles.backGroundColor}>
          <Text style={styles.heading}>MAKE YOUR {'\n'}HOME BEAUTIFUL</Text>
          <Text style={styles.description}>
            The best simple place where you discovery most wonderful furniture
            and make your home beautiful
          </Text>

          <View style={styles.buttonContainer}>
            <BigCustomButton onPress={moveToLoginHandler}>
              Get Started
            </BigCustomButton>
          </View>
        </CustomScreenContainer>
      </ImageBackground>
    </>
  );
};

export default BoardingScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  heading: {
    fontSize: FONT_SIZE.H2,
    fontWeight: FONT_WEIGHT.BOLD,
    fontFamily: FONTS.POPPINS_BOLD,
    marginTop: 60,
    color: COLORS.MAIN,
  },
  description: {
    fontSize: FONT_SIZE.BODY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    color: COLORS.SUB,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: scaleUI(40, true),
    left: 0,
    right: 0,
    marginHorizontal: 24,
  },
  backGroundColor: {
    backgroundColor: 'transparent',
  },
});

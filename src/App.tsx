import { StyleSheet, Text, View, ImageSourcePropType, Image, Pressable } from 'react-native';
import React,{useState} from 'react';
import { trigger } from 'react-native-haptic-feedback';
import type { PropsWithChildren } from 'react';
import diceOne from '../assets/One.png';
import diceTwo from '../assets/Two.png';
import diceThree from '../assets/Three.png';
import diceFour from '../assets/Four.png';
import diceFive from '../assets/Five.png';
import diceSix from '../assets/Six.png';

type DiceProps =  PropsWithChildren <{
  imageUrl : ImageSourcePropType,

}>

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps) :JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />

    </View>
  );
};

export default function App() : JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6);
    switch (randomNumber) {
      case 1: setDiceImage(diceOne); break;
      case 2: setDiceImage(diceTwo); break;
      case 3: setDiceImage(diceThree); break;
      case 4: setDiceImage(diceFour); break;
      case 5: setDiceImage(diceFive); break;
      case 6: setDiceImage(diceSix); break;
      default: setDiceImage(diceOne);
        break;
    }

    trigger('impactLight', options);
  };


  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap} >
        <Text style={styles.rollDiceBtnText}>
        Roll the Dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

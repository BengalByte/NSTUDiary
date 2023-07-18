import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Avatar from 'ui/Avatar';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';

type Props = {
  pressHandler: () => void;
  imageUrl: string;
  name: string;
  position: string;
};

const IndividualCard = ({pressHandler, imageUrl, name, position}: Props) => {
  const {Rp} = useResponsiveSize();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const styles = StyleSheet.create({
    body: {
      borderWidth: Rp(1),
      borderColor: theme[currentTheme].textColor,
      borderRadius: Rp(10),
      height: Rp(180),
      width: Rp(850),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: Rp(30),
    },
    textBody: {
      marginLeft: 10,
      justifyContent: 'space-between',
      height: 80,
      paddingVertical: 20,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 17,
      color: theme[currentTheme].textColor,
    },
    position: {
      fontSize: 15,
      color: theme[currentTheme].textColor,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.body}
      onPress={pressHandler}>
      <Avatar size={50} imageUrl={imageUrl} />
      <View style={styles.textBody}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{position}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IndividualCard;

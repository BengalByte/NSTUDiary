import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomIcon from 'components/CustomIcon';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {theme} from 'utils/theme';
import {useTypedSelector} from 'store/store';

type InfoCardProps = {
  icon: string;
  content: string;
  onPress: () => void;
};

const InfoCard: React.FC<InfoCardProps> = ({icon, content, onPress}) => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    body: {
      marginTop: Rp(20),
      width: Rp(850),
      height: Rp(120),
      borderRadius: Rp(20),
      borderColor: theme[currentTheme].textColor,
      borderWidth: Rp(2),
      justifyContent: 'flex-start',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    icon: {
      marginHorizontal: Rp(30),
      color: theme[currentTheme].textColor,
      fontSize: Rp(60),
    },
    text: {
      fontSize: Rp(35),
      color: theme[currentTheme].textColor,
    },
  });
  return (
    <TouchableOpacity style={styles.body} onPress={onPress}>
      <CustomIcon style={styles.icon} name={icon} />
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
};

export default InfoCard;

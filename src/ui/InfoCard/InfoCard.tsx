import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomIcon from 'components/CustomIcon';
import useResponsiveSize from 'hooks/useResponsiveSize';

type InfoCardProps = {
  icon: string;
  content: string;
  onPress: () => void;
};

const InfoCard: React.FC<InfoCardProps> = ({icon, content, onPress}) => {
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    body: {
      width: Rp(850),
      height: Rp(120),
      borderRadius: Rp(20),
      borderWidth: Rp(3),
      justifyContent: 'flex-start',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    icon: {
      marginHorizontal: Rp(30),
    },
    text: {
      fontSize: Rp(35),
    },
  });
  return (
    <TouchableOpacity style={styles.body} onPress={onPress}>
      <CustomIcon style={styles.icon} name={icon} size={Rp(60)} />
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
};

export default InfoCard;

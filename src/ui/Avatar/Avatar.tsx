import {Image, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import useResponsiveSize from 'hooks/useResponsiveSize';

type AvatarProps = {
  size?: number;
  imageUrl: string;
  style?: ViewStyle;
};

const Avatar: React.FC<AvatarProps> = ({imageUrl, style, size}) => {
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    avatar: {
      width: size ? size : Rp(250),
      height: size ? size : Rp(250),
      borderRadius: Rp(125),
    },
  });
  return (
    <TouchableOpacity activeOpacity={0.9} style={style}>
      <Image style={styles.avatar} source={{uri: imageUrl}} />
    </TouchableOpacity>
  );
};

export default Avatar;

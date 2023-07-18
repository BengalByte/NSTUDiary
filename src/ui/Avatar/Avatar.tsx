import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useResponsiveSize from 'hooks/useResponsiveSize';

type AvatarProps = {
  size?: number;
  imageUrl: string;
};

const Avatar: React.FC<AvatarProps> = ({imageUrl, size}) => {
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    avatar: {
      width: size ? size : Rp(250),
      height: size ? size : Rp(250),
      borderRadius: Rp(125),
    },
  });
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <Image style={styles.avatar} source={{uri: imageUrl}} />
    </TouchableOpacity>
  );
};

export default Avatar;

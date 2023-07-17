import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useResponsiveSize from 'hooks/useResponsiveSize';

type AvatarProps = {
  imageUrl: string;
};

const Avatar: React.FC<AvatarProps> = ({imageUrl}) => {
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    avatar: {
      width: Rp(250),
      height: Rp(250),
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

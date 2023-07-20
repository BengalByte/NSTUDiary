import {StyleSheet, Text, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import {useTypedSelector} from 'store/store';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {theme} from 'utils/theme';

type Props = ViewProps & {
  children?: React.ReactElement | React.ReactElement[];
};

const Card = ({children, style, ...rest}: Props) => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    body: {
      padding: Rp(50),
      backgroundColor: theme[currentTheme].base10,
      borderRadius: Rp(30),
    },
  });

  return (
    <View style={[styles.body, style]} {...rest}>
      {children ?? <View></View>}
    </View>
  );
};

export default Card;

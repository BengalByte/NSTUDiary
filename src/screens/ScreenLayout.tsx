import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {theme} from 'utils/theme';
import {useTypedSelector} from 'store/store';

interface ScreenLayoutProps {
  children: React.ReactNode;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({children}) => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    layout: {
      paddingLeft: Rp(20),
      paddingRight: Rp(20),
      paddingTop: Rp(20),
      backgroundColor: theme[currentTheme].base,
      flex: 1,
    },
  });
  return <SafeAreaView style={styles.layout}>{children}</SafeAreaView>;
};

export default ScreenLayout;

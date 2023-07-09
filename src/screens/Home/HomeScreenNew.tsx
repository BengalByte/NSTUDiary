import React from 'react';
import {useDispatch} from 'react-redux';
import {setColor} from '@store/slices/ColorSlice';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useTypedSelector} from '@store/store';
import RootState from '@store/store.types';
import ToggleTheme from '@ui/ToggleTheme';

const HomeScreen = () => {
  const color = useTypedSelector((state: RootState) => state.color.value);
  const theme = useTypedSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  console.log('Color: ', color, theme);
  const dispatch = useDispatch();

  return (
    <View>
      <ToggleTheme />
      <Text>Current Theme: {theme}</Text>
      <TouchableOpacity
        onPress={() => dispatch(setColor())}
        style={styles.button}>
        <Text style={{fontSize: 20}}>Generate Random Color</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item}
        data={color}
        style={{marginTop: 15}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: item,
                height: 150,
                width: 150,
                alignSelf: 'center',
                margin: 10,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});

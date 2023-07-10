import React from 'react';
import {setColor} from '@store/slices/ColorSlice';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useAppDispatch, useTypedSelector} from '@store/store';
import ToggleTheme from '@ui/ToggleTheme';
import {theme} from '@utils/theme';
import {useGetPostsQuery, useGetUsersQuery} from 'api/users';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const color = useTypedSelector(state => state.color.value);

  const themeStyle = {
    backgroundColor: theme[currentTheme].base,
    color: theme[currentTheme].secondaryColor,
  };
  // Fetch Data:
  // const {data, isLoading, error} = useGetUsersQuery();
  const {data: posts, error, isLoading} = useGetPostsQuery();

  // Data stored in the store. And can be fetched from other components
  const postData = useTypedSelector(state => state.posts.data);
  console.log('Data Available:', postData);

  return (
    <View style={[themeStyle]}>
      <ToggleTheme />
      <Text>Current Theme: {currentTheme}</Text>
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

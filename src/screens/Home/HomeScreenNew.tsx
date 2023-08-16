import { setColor } from '@store/slices/ColorSlice';
import { useAppDispatch, useTypedSelector } from '@store/store';
import ToggleTheme from '@ui/ToggleTheme';
import { theme } from '@utils/theme';
import { useGetPostByIDQuery } from 'api/users';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreenNew = () => {
  const dispatch = useAppDispatch();

  const currentTheme = useTypedSelector((state) => state.theme.currentTheme);
  const color = useTypedSelector((state) => state.color.value);

  const themeStyle = {
    backgroundColor: theme[currentTheme].base.secondary.dark,
    color: theme[currentTheme].base.primary.dark,
  };
  // Fetch Data:
  // const {data, isLoading, error} = useGetUsersQuery();
  // const {data: posts, error, isLoading} = useGetPostsQuery();
  const { data: post } = useGetPostByIDQuery(1);

  // Data stored in the store. And can be fetched from other components
  // const postData = useTypedSelector(state => state.posts.data);
  console.log('Data Available:', post);

  return (
    <View style={[themeStyle]}>
      <ToggleTheme />
      <Text>Current Theme: {currentTheme}</Text>
      <TouchableOpacity onPress={() => dispatch(setColor())} style={styles.button}>
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(item) => item}
        data={color}
        style={{ marginTop: 15 }}
        renderItem={({ item }) => {
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

export default HomeScreenNew;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TeacherScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';
import CustomIcon from 'components/CustomIcon';
import IndividualCard from 'ui/IndividualCard';
import {mockUser, usersData} from 'api/mockData';
import CustomInput from 'ui/CustomInput';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {matchedTexts} from 'utils/search';
import {
  Layout,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from 'react-native-reanimated';

const TeachersScreen = ({navigation}: TeacherScreenProps) => {
  const {bio, facebook, imageURL, mail, name, phone, position, userId} =
    mockUser;
  const {Rp} = useResponsiveSize();
  const [users, setUsers] = useState(usersData);
  const [searchText, setSearchText] = useState('');

  const filteredUsers = users.filter(user => {
    const valuesToSearch = [user.name, user.email, user.phone, user.bio];
    const matchedResults = matchedTexts(valuesToSearch, searchText);
    return matchedResults.length > 0;
  });
  return (
    <ScreenLayout>
      <View style={styles.body}>
        <CustomInput
          style={{marginVertical: Rp(40)}}
          inputType="text"
          onChangeText={setSearchText}
          variant="primary"
          placeholder="Search User"
        />
        {filteredUsers.map((item, index) => {
          return (
            <IndividualCard
              animatedProps={{
                layout: Layout,
                entering:
                  (index + 1) % 2 === 0
                    ? SlideInLeft.duration(300)
                    : SlideInRight.duration(300),
                exiting:
                  (index + 1) % 2 === 0
                    ? SlideOutLeft.duration(300)
                    : SlideOutRight.duration(300),
              }}
              key={item._id}
              style={{marginTop: Rp(20)}}
              imageUrl={imageURL}
              name={item.name}
              position={item.email}
              pressHandler={() =>
                navigation.navigate('IndividualDetails', {
                  userId: item._id,
                  name: item.name,
                })
              }
            />
          );
        })}
      </View>
    </ScreenLayout>
  );
};

export default TeachersScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // padding: 120,
  },
});

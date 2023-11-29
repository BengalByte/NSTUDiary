import CustomIcon from 'components/CustomIcon';
import { NotificationScreenProps } from 'navigation/types';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from 'ui/CustomButton';
import { CustomText } from 'ui/CustomText';
import { CustomTextInput } from 'ui/CustomTextInput';

const NotificationScreen = ({ route, navigation }: NotificationScreenProps) => {
  return (
    <View>
      <CustomText variant="bigTitle">This is Custom Text</CustomText>
      <CustomText variant="headline">This is Custom Text</CustomText>
      <CustomText variant="regularText">This is Custom Text</CustomText>
      <CustomText variant="smallText">This is Custom Text</CustomText>
      <CustomTextInput
        variant="secondary"
        textVariant="regularText"
        label="Username"
        placeholder="Enter your username"
        icon={true}
        containerStyle={{ marginBottom: 20, padding: 20 }}
      />
      <CustomTextInput
        variant="primary"
        textVariant="regularText"
        label="Username"
        placeholder="Enter your username"
        iconPosition="right"
        icon={true}
        onChangeText={() => {}}
        containerStyle={{ marginBottom: 20, padding: 20 }}
      />

      <CustomButton variant="primary">
        <CustomText variant={'regularText'}>MyCustomButton</CustomText>
        <CustomIcon name="day" size={20} />
      </CustomButton>
      <CustomButton variant="secondary">
        <CustomText variant={'regularText'}>MyCustomButton</CustomText>
      </CustomButton>
      <View
        style={{
          backgroundColor: 'tomato',
          padding: 10,
          alignSelf: 'flex-start',
        }}
      >
        <Text>This is Text</Text>
      </View>
    </View>
  );
};

export default NotificationScreen;

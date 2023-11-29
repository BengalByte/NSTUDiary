import CheckBox from '@react-native-community/checkbox';
import CustomIcon from 'components/CustomIcon';
import useResponsiveSize from 'hooks/useResponsiveSize';
import { HomeScreenProps } from 'navigation/types';
import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ScreenLayout from 'screens/ScreenLayout';
import { useTypedSelector } from 'store/store';
import { CustomText } from 'ui/CustomText';
import { FONTSIZE } from 'utils/fontSize';
import { theme } from 'utils/theme';

export const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { Rp } = useResponsiveSize();
  const currentTheme = useTypedSelector((state) => state.theme.currentTheme);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Applied Mathematics', value: 'am' },
    { label: 'EEE', value: 'eee' },
    { label: 'CSTE', value: 'cste' },
    { label: 'ICE', value: 'ice' },
  ]);
  return (
    <ScreenLayout>
      <View style={{ width: Rp(900), alignSelf: 'center' }}>
        <DropDownPicker
          style={{ backgroundColor: theme[currentTheme].base.tertiary.normal }}
          searchContainerStyle={{
            backgroundColor: theme[currentTheme].base.tertiary.dark,
          }}
          searchTextInputStyle={{
            backgroundColor: theme[currentTheme].base.tertiary.normal,
          }}
          searchPlaceholderTextColor={'black'}
          searchPlaceholder="Type Department Name..."
          placeholderStyle={{
            fontWeight: 'bold',
            fontSize: Rp(FONTSIZE.regular),
          }}
          // customItemContainerStyle={{backgroundColor: 'blue'}}
          listItemContainerStyle={{
            backgroundColor: theme[currentTheme].base.tertiary.normal,
          }}
          listItemLabelStyle={{ color: 'blue' }}
          itemSeparatorStyle={{ backgroundColor: 'green' }}
          selectedItemContainerStyle={{ backgroundColor: 'pink' }}
          searchable
          placeholder="Select Department"
          mode="BADGE"
          listMode="MODAL"
          badgeDotColors={['red', 'blue', 'orange']}
          multiple
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CustomText variant="regularText">This is Custom Text</CustomText>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            tintColor="red"
            onTintColor="blue"
            tintColors={{ true: 'green', false: 'red' }}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <CustomIcon name="day" />
        </View>
      </View>
    </ScreenLayout>
  );
};

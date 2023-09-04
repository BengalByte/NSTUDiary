import React, {useState} from 'react';
import {View} from 'react-native';
import {HomeScreenProps} from 'navigation/types';
import DropDownPicker from 'react-native-dropdown-picker';

export const HomeScreen = ({route, navigation}: HomeScreenProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Applied Mathematics', value: 'am'},
    {label: 'EEE', value: 'eee'},
    {label: 'CSTE', value: 'cste'},
    {label: 'ICE', value: 'ice'},
  ]);
  return (
    <View>
      <DropDownPicker
        style={{backgroundColor: 'tomato'}}
        searchContainerStyle={{backgroundColor: 'teal'}}
        searchTextInputStyle={{backgroundColor: 'skyblue'}}
        searchPlaceholderTextColor={'black'}
        searchPlaceholder="Type Department Name..."
        // customItemContainerStyle={{backgroundColor: 'blue'}}
        listItemContainerStyle={{backgroundColor: 'gray'}}
        listItemLabelStyle={{color: 'blue'}}
        itemSeparatorStyle={{backgroundColor: 'green'}}
        selectedItemContainerStyle={{backgroundColor: 'pink'}}
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
    </View>
  );
};

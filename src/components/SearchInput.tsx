import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDebouncedValue} from '../hooks/useDebouncedValue';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebouncedValue(searchValue);
  // console.log(searchValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Seach pokemon"
          placeholderTextColor="#aaa"
          style={{...styles.textInput, top: Platform.OS === 'ios' ? 0 : 2}}
          autoCapitalize="none"
          autoCorrect={false}
          value={searchValue}
          onChangeText={setSearchValue}
        />

        <Icon name="search" size={20} color="#5856D6" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
});

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions, // Import Dimensions
} from 'react-native';
import {
  Hamburger,
  Search,
  Filter,
  shoe1,
  Shoe2,
  Shoe3,
  Shoe4,
  Shoe5,
  Shoe6,
} from './asset/svgs';
import Color from './Ui/color';

const windowWidth = Dimensions.get('window').width;

const App = () => {
  const shoeData = [
    { name: 'Nike', svg: shoe1 },
    { name: 'Converse', svg: Shoe2 },
    // ... other shoe data
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.whiteFrame, { width: windowWidth / 2 - 30 }]}>
      {item.svg()}
      <Text style={styles.shoeName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Hamburger style={styles.burger} />
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} placeholder="Search product" />
            <Search style={styles.search} />
          </View>
        </View>
        {/* ... other components */}
        <FlatList
          data={shoeData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={renderItem}
          contentContainerStyle={styles.frameContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WhiteSmoke,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  burger: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
  },
  inputText: {
    flex: 1,
    left: 40,
    height: 40,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Bilo',
    fontWeight: '400',
  },
  search: {
    position: 'absolute',
    right: windowWidth * 0.15, // Adjust based on your design
  },
  // ... other styles
});

export default App;

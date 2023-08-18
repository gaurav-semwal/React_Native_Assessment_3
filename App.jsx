/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Hamburger,
  Search,
  Filter,
  UpDown,
  Shoe1,
  Shoe2,
  Shoe3,
  Shoe4,
  Shoe5,
  Shoe6,
  Heart,
} from './asset/svgs';
import Color from './Ui/color';

const windowWidth = Dimensions.get('window').width;

const App = () => {
  const shoeData = [
    {
      name: 'Nike',
      svg: Shoe1,
      additionalText: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      price: '$96',
    },
    {
      name: 'Converse',
      svg: Shoe2,
      additionalText: 'Run Star Hike Three Color Unisex',
      price: '$85.5',
    },
    {
      name: 'Nike',
      svg: Shoe3,
      additionalText: 'Air Jordan 1 Retro High Obsidian UNC ',
      price: '$196',
    },
    {
      name: 'Nike',
      svg: Shoe4,
      additionalText: 'Air Force 1 Shadow Beige Pale Ivory',
      price: '$115',
    },
    {
      name: 'New Balance',
      svg: Shoe5,
      additionalText: 'Men 574 Legacy Sport Shoes',
      price: '$165.8',
    },
    {
      name: 'Asics',
      svg: Shoe6,
      additionalText: 'Asics Men Running Shoes',
      price: '$65',
    },
    {
      name: 'Nike',
      svg: Shoe1,
      additionalText: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      price: '$96',
    },
    {
      name: 'Converse',
      svg: Shoe2,
      additionalText: 'Run Star Hike Three Color Unisex',
      price: '$85.5',
    },
    {
      name: 'Nike',
      svg: Shoe3,
      additionalText: 'Air Jordan 1 Retro High Obsidian UNC ',
      price: '$196',
    },
    {
      name: 'Nike',
      svg: Shoe4,
      additionalText: 'Air Force 1 Shadow Beige Pale Ivory',
      price: '$115',
    },
    {
      name: 'New Balance',
      svg: Shoe5,
      additionalText: 'Men 574 Legacy Sport Shoes',
      price: '$165.8',
    },
    {
      name: 'Asics',
      svg: Shoe6,
      additionalText: 'Asics Men Running Shoes',
      price: '$65',
    },
  ];
  const renderItem = ({item}) => (
    <View style={[styles.shoeItem, {width: windowWidth / 2 - 20}]}>
      {item.svg()}
      <View style={styles.heartContainer}>
        <TouchableOpacity onPress={() => toggleHeart(item.id)}>
          <Heart
            style={[
              styles.heartIcon,
              {tintColor: item.heart ? 'red' : 'black'},
            ]}>
            {item.heart}
          </Heart>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContent}>
          <Text style={styles.shoeName}>{item.name}</Text>
          <Text style={styles.additionalText}>{item.additionalText}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
  const [shoeList, setShoeList] = useState(
    shoeData.map((shoe, index) => ({...shoe, id: index, heart: false})),
  );

  const toggleHeart = id => {
    setShoeList(prevList =>
      prevList.map(shoe =>
        shoe.id === id ? {...shoe, heart: !shoe.heart} : shoe,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.content}>
          <Hamburger style={styles.burger} />
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} placeholder="Search product" />
            <Search style={styles.search} />
          </View>
        </View>
        <View style={styles.productInfoContainer}>
          <View style={styles.textContainer1}>
            <Text style={styles.sneakersText}>Sneakers</Text>
            <Text style={styles.productsFoundText}>25 products found</Text>
          </View>
          <View style={styles.iconContainer}>
            <UpDown style={styles.downup} />
            <Filter style={styles.filter} />
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={shoeList}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={renderItem}
          contentContainerStyle={styles.frameContainer}
          columnWrapperStyle={styles.columnWrapper}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  scrollView: {
    flexGrow: 0,
  },
  price: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Bilo',
    fontWeight: '800',
  },
  heartContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
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
    color: Color.Gray,
    fontSize: 16,
    fontFamily: 'Bilo',
    fontWeight: '400',
  },
  search: {
    position: 'absolute',
    left: 10,
  },
  shoeItem: {
    margin: 5,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10, // Reduced padding here
    width: windowWidth / 2 - 30, // Reduced width here
    borderRightColor: 'white',
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#EAEDED',
  },
  textContainer1: {
    flex: 1,
  },
  sneakersText: {
    color: Color.Black,
    fontSize: 30,
    fontFamily: 'Montserrat',
    fontWeight: '800',
  },
  productsFoundText: {
    color: Color.Black,
    fontFamily: 'Bilo',
    fontSize: 16,
    fontWeight: '400',
  },
  frameContainer: {
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 15,
    marginLeft: 15,
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downup: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginTop: 5,
    alignItems: 'flex-start',
    padding: 10,
    right: 20,
  },
  shoeName: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Bilo',
    fontWeight: 'bold',
    padding: 10,
    right: 9,
  },
  additionalText: {
    color: '#7C7A7A',
    paddingVertical: 15,
    fontSize: 13,
    fontFamily: 'Bilo',
    fontWeight: '400',
    lineHeight: 16,
  },
});

export default App;
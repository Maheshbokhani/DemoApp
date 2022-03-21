import React from 'react';
import {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userDetailsAction} from '../redux/action';
import {colors} from '../utils';

/**
 * Home
 *
 */
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state: any) => state.userDetails);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    dispatch(userDetailsAction());
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={[style.row, {justifyContent: 'space-between'}]}>
        <TouchableOpacity style={style.row} onPress={() => navigation.pop()}>
          <Text style={style.text1}>{'Back'}</Text>
        </TouchableOpacity>
        <Text style={style.title}>{'Home'}</Text>
        <View style={{width: 20}} />
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 30}} />}
        style={{paddingTop: 20}}
        data={data?.data}
        keyExtractor={(item: any) => item.UserId.toString()}
        renderItem={({item}: any) => <ItemContent item={item} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={callApi}
            tintColor={colors.harberBlue}
          />
        }
      />
    </SafeAreaView>
  );
};

const ItemContent = ({item}) => (
  <TouchableOpacity
    key={item?.UserId}
    style={{flexDirection: 'row', alignItems: 'center'}}>
    <Image source={{uri: item?.ProfileImage}} style={style.image} />
    <View style={{marginLeft: 15, flex: 1}}>
      <Text style={style.text}>Uername: {item?.UserName}</Text>
      <Text style={style.text1}>Email: {item?.UserEmail}</Text>
      <Text style={style.text1}>BirthDate: {item?.BirthDate}</Text>
      <Text style={style.text1}>Gender {item?.Gender}</Text>
      <Text style={style.text1}>Address {item?.Address}</Text>
    </View>
  </TouchableOpacity>
);

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    colors: colors.grayLabel,
  },
  text1: {
    fontSize: 12,
    fontWeight: 'normal',
    colors: colors.grayLabel + '99',
  },
  image: {width: 60, height: 60, borderRadius: 30},
  row: {flexDirection: 'row', alignItems: 'center'},
});

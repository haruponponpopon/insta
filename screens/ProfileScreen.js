import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';

export default function App({navigation}) {
  return (
    <>
      <View>
        <View>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View>
          <Text>hogehoge</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 18, color: "#303030"}}>プロフィールを編集</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>出品数</Text>
        </View>
        <View>
          <Text>フォロワー</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("FollowList")}><Text>フォロー中</Text></TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
  },
  followContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
  },
  followLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  followTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
  },
  followRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: "#101010",
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: "#d0d0d0",
    borderTopWidth: 1,
  },
  footerComponent: {
    width: 70,
    height: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

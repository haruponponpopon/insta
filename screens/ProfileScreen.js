import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';

export default function App({navigation}) {
  return (
    <>
      <View style={styles.home}>
        <View>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon4.jpeg")}
          />
        </View>
        <View>
          <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 18, color: "#303030", marginHorizontal: 10}}>Anna</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <Text>Fashion Magazine MofuMofu Editor📖{"\n"}Travel account ✈︎✈︎✈︎🇸🇪KL with@annatravel{"\n"}🍰mofumofuofficial_2015
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 14, color: "#303030"}}>プロフィールを編集</Text>
        </View>
      </View>
      <View style={styles.group}>
        <View>
          <Text>出品数{"\n"}2</Text>
        </View>
        <View>
          <Text>フォロワー{"\n"}7</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("FollowList")}><Text>フォロー中{"\n"}9</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage4.jpeg")}
                />
            </View>
            <View>
                <Text>ワンピース ¥1000(税込)</Text>
                <Text>旅行</Text>
            </View>
        </View>
    </>
  );
}
const styles = StyleSheet.create({
  home: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginEnd: 0,
    marginHorizontal: 10,
    marginVertical: 10
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#d0d0d0",
    borderWidth: 1,
  },
  group: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  profile: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  //   backgroundColor: 'white',
  //   borderBottomColor: "#d0d0d0",
  //   borderBottomWidth: 1,
    marginEnd: 0,
    marginHorizontal: 10,
    marginVertical: 10
  },
  container_home: {
      marginHorizontal: 10,
      marginVertical: 20
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';

export default function App({navigation}) {
  return (
    <>
      <View style={styles.home}>
        <View>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon0.jpeg")}
          />
        </View>
        <View>
          <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 18, color: "#303030", marginHorizontal: 10}}>Emma</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <Text>🇯🇵TOKYO.JP{"\n"}🤍基礎化粧品のブランドをやってます{"\n"}Cosme Produce @emma_cosme #emma_cosme{"\n"}Youtube 🎀🎾💕 『emma channel』
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 14, color: "#303030"}}>フォロー中</Text>
        </View>
      </View>
      <View style={styles.group}>
        <View>
          <Text>出品数{"\n"}184</Text>
        </View>
        <View>
          <Text>フォロワー{"\n"}123</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("FollowList")}><Text>フォロー中{"\n"}102</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage0.jpeg")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>麦わら帽子 ¥1000(税込)</Text>
                <Text>別荘に遊びにきました♪</Text>     
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>♡</button>
                </View>
            </View>
        </View>
        <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage5.jpeg")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>Gジャン ¥2000(税込)</Text>
                <Text>きれいなサクラ🌸が咲いていました✨</Text>  
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>♡</button>
                </View>
            </View>
        </View>
        <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage6.webp")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>ペットボトルカバー ¥1000(税込)</Text>
                <Text>いちご狩りに行ってきました🍓{"\n"}30個食べちゃった😶</Text>  
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>♡</button>
                </View>
            </View>
        </View>
        <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage7.webp")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>ワンピース ¥3000(税込)</Text>
                <Text>すきぴとデート💕</Text> 
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>♡</button>
                </View>
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
  },
  comment_container: {
    flexDirection: 'row',
    justifyContent: 'space_between',
    alignItems: 'center',
  },
  left_container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginHorizontal: 10,
  }
});

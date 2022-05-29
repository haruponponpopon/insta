import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';

export default function App({navigation}) {
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:'center'}}>
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Image
                    style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
                    source={require("../assets/icon0.jpeg")}
                />
                <Text style={{fontWeight: 600, fontSize: 18, color: "#303030", marginHorizontal: 10}}>Emma</Text>
            </View>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage0.jpeg")}
                />
            </View>
            <View>
                <Text>麦わら帽子 ¥1000(税込)</Text>
                <Text>別荘に遊びにきました♪</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Image
                    style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
                    source={require("../assets/icon1.jpeg")}
                />
                <Text style={{fontWeight: 600, fontSize: 18, color: "#303030", marginHorizontal: 10}}>Olivia</Text>
            </View>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage1.jpeg")}
                />
            </View>
            <View>
                <Text>花かんむり ¥2000(税込)</Text>
                <Text>公園で日向ぼっこ</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Image
                    style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
                    source={require("../assets/icon2.jpeg")}
                />
                <Text style={{fontWeight: 600, fontSize: 18, color: "#303030", marginHorizontal: 10}}>Ava</Text>
            </View>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage2.jpeg")}
                />
            </View>
            <View>
                <Text>カメラ ¥30000(税込)</Text>
                <Text>愛犬Momo</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Image
                    style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
                    source={require("../assets/icon3.jpeg")}
                />
                <Text style={{fontWeight: 600, fontSize: 18, color: "#303030", marginHorizontal: 10}}>Isabella</Text>
            </View>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage3.jpeg")}
                />
            </View>
            <View>
                <Text>デジカメ ¥1000(税込)</Text>
                <Text>バカンス</Text>
            </View>
        </View>
        </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
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
    container: {
        marginHorizontal: 10,
        marginVertical: 20
    }
})
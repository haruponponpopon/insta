import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import { useState } from "react";
export default function App({navigation}) {
    const [a0, b0] = useState(false);
    const foo0 = () => {
        b0(!a0);
      };
    const [a1, b1] = useState(false);
    const foo1 = () => {
        b1(!a1);
      };
    const [a2, b2] = useState(false);
    const foo2 = () => {
        b2(!a2);
      };
    const [a3, b3] = useState(false);
    const foo3 = () => {
        b3(!a3);
      };
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
            <View style={styles.comment_container}>
                <View>
                <Text>麦わら帽子 ¥1000(税込)</Text>
                <Text>別荘に遊びにきました♪</Text>     
                </View>
                <View style={styles.left_container}>
                <button onClick={foo0} style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>{a0 ? "❤️" : "♡"}</button>
                </View>
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
            <View style={styles.comment_container}>
                <View>
                <Text>花かんむり ¥2000(税込)</Text>
                <Text>公園で日向ぼっこ</Text>    
                </View>
                <View style={styles.left_container}>
                <button onClick={foo1} style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>{a1 ? "❤️" : "♡"}</button>
                </View>
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
            <View style={styles.comment_container}>
                <View>
                <Text>カメラ ¥30000(税込)</Text>
                <Text>愛犬Momo</Text>   
                </View>
                <View style={styles.left_container}>
                <button onClick={foo2} style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>{a2 ? "❤️" : "♡"}</button>
                </View>
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
            <View style={styles.comment_container}>
                <View>
                <Text>デジカメ ¥1000(税込)</Text>
                <Text>バカンス</Text>  
                </View>
                <View style={styles.left_container}>
                <button onClick={foo3} style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>{a3 ? "❤️" : "♡"}</button>
                </View>
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
})
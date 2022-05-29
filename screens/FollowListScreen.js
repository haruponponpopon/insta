import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 18, color: "#303030"}}>フォロー中</Text>
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>react</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={{height: 180}}></View>
      {/* <View style={styles.footerContainer}>
        <View style={styles.footerComponent}>
        <Image
            style={{width: 30, height: 30}}
            source={require('../assets/home.png')}
          />
        <Text style={styles.footerText}>ホーム</Text>
        </View>
        <View style={styles.footerComponent}>
          <Image
              style={{width: 30, height: 30}}
              source={require('../assets/bell.png')}
            />
          <Text style={styles.footerText}>お知らせ</Text>
        </View>
        <View style={styles.footerComponent}>
        <Image
            style={{width: 30, height: 30}}
            source={require('../assets/camera.png')}
          />
        <Text style={styles.footerText}>出品</Text>
        </View>
        <View style={styles.footerComponent}>
        <Image
            style={{width: 30, height: 30}}
            source={require('../assets/human.png')}
          />
        <Text style={styles.footerText}>マイページ</Text>
        </View>
      </View> */}
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

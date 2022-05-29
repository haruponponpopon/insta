# my_project
React Nativeで作ってしまいましたm(_ _)m
# 動かし方
```
# クローン
$git clone https://github.com/haruponponpopon/my_project
# ディレクトリ移動
$cd my_project
# Expoインストール
$npm install -g expo-cli
# 立ち上げ
$expo start
```
Unable to find expo in this project - have you run yarn / npm install yet? というエラーメッセージが出たら下記で行けます。
```
$npm install
$expo start
```
ターミナルにQRコードが表示され、その上に
```
Developer tools running on http://localhost:19002
Starting Metro Bundler
```
というかんじの文言があるので`http://localhost:XXXXX`にアクセスしてください。
こんな感じのページが開きます。
<img width="1280" alt="スクリーンショット 2022-05-29 12 00 34" src="https://user-images.githubusercontent.com/72332745/170850055-1a7de0eb-0530-4368-9fa0-5782013002e9.png">
Run in web browserをクリックして10分くらい待つとブラウザが勝手に立ちあがります。
# 中身
こんな感じで画面遷移します
<img width="1280" alt="スクリーンショット 2022-05-29 12 09 28" src="https://user-images.githubusercontent.com/72332745/170850282-937704f7-5138-4f97-87bb-137445306d8d.png">
# コード
```
App.js
 |_AppNavigator.js
   |_Home.js
   |_ProfileNavigator.js
     |_FollowListScreen.js
     |_ProfileScreen.js
```
 

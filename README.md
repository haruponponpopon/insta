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
こんな感じで画面遷移します。
- ホーム画面　・・・　他者の投稿が時系列に表示される画面
- プロフィール画面・・・自分のプロフィール、自分の過去の投稿が見える画面
- フォロー画面・・・自分がフォローしているユーザのリストが見られる画面
- フォロー相手のプロフィール画面・・・他者のプロフィール、他者の過去の投稿が見える画面
<img width="1280" alt="スクリーンショット 2022-05-29 19 36 05" src="https://user-images.githubusercontent.com/72332745/170863721-9e9c15c0-79cf-49da-907d-98a653ee97d4.png">

# コード
```
App.js
 |_AppNavigator.js
   |_FollowListScreen.js (フォロー画面)
   |_ProfileNavigator.js
   | |_Home.js (ホーム画面)
   | |_ProfileScreen.js (プロフィール画面)
   | |_PostScreen.js (投稿画面)
   |_EmmaProfileScreen.js (他者(emma)のプロフィール画面)
```
 

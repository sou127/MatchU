# [Yahoo HackU] Project - MatchU

## To-doリスト

### ユーザー登録等
- [x] ユーザー登録、ログイン、ログアウト
- [x] プロフィルページ
- [x] （全）オンラインユーザー表示

### グループ
- [x] グループ・プロジェクト作成
- [x] グループ詳細ページ
- [x] メンバー追加
- [x] カテゴリー
- [x] グループフィルター・検索
- [x] コメント
- [x] グループ削除「作成者のみ」

### ミーティング
- [x] ビデオ会議
- [x] チャット
- [ ] ミーティング内コードエディター
- [ ] ミーティング内ワードエディター
- [x] ミーティング内ホワイトボード

## インストール方法


```
git clone https://github.com/sou127/React-Group-Project.git
cd React-Group-Project
npm install
```

## Firebase設定

Firebaseプロジェクトを作成し、config設定を /src/firebase/config.js にて保存する

## 実行
```
npm start
```
開発モードに実行する.\
ブラウザーで [http://localhost:3000](http://localhost:3000) を開く.

変更したとき、ページが自動で更ロードされる.\
コンソールではエラーを確認.

## ビルド

```
npm run build
```

フォルダー `build` が作られるので、herokuやnetlify等でデプロイ可能。

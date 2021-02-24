# 宇都宮大学のサークルビラ一覧
[![CodeFactor](https://www.codefactor.io/repository/github/u-lab/uu-circles2020/badge)](https://www.codefactor.io/repository/github/u-lab/uu-circles2020)
[![DeepScan grade](https://deepscan.io/api/teams/8910/projects/11141/branches/161914/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8910&pid=11141&bid=161914)
 
  <a href="https://uu-circle20.firebaseapp.com/">
    https://uu-circle20.firebaseapp.com/
  </a>
  


  このプロジェクトは新入生の新生活を応援したいという思いから、有志によって作られた、宇都宮大学のサークル・部活のビラを一覧で見ることができるサイトのソースコードです。  

  宇都宮大学生の参加大歓迎です！！
  
今年 (2021年) のサークルビラ一覧はこちらから
https://uu-circles.com/

## 環境

- Vue.js
- Nuxt.js v2.12.0
- Firebase
- GitHub Actions

## 環境構築

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```

## デプロイ

このサイトはFirebaseでホスティングしています。

### GitHub Actions使ってます

GitHub Actionsを使って、masterにpushされたら、自動でデプロイするようにしています。

## ご要望・修正希望に関して

### ご要望・修正希望

- プログラム・デザインに関しましては、本リポジトリIssueにお書きください。
- サイト全体に関することなどに関しましては、以下、Google Formにお願いします。

### Google Form

[Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfMvRk2LLZvzfAsGYGRbLrSFB56n59J3YJAojhLk-xPi2DRIA/viewform)

## 画面のスクリーンショット
  <a href="https://uu-circle20.firebaseapp.com/">
    <img src="./.github/image/toppage-screenshot.png">
  </a>
  
## サークルビラ一覧紹介リンク

- [課外活動|宇都宮大学](https://www.utsunomiya-u.ac.jp/convenient/campuslife/club.php#u-lab_chirasi)
- [［新入生の皆さまへ］宇都宮大学課外活動団体一覧ページのご紹介](https://www.utsunomiya-u.ac.jp/topics/student/008225.php)

## テーブル定義

### circles

![circles定義](./.github/image/circles_table.png "circles定義")

### interviews

![interviews定義](./.github/image/interviews_table.png "interviews定義")

### interviews_authors

![interviews_authors定義](./.github/image/interviews_authors_table.png "interviews_authors定義")

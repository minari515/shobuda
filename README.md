# 勝負打 - オンラインタイピングゲーム

## 起動方法

1. [Paizacloud](https://paiza.cloud/containers) にアクセスします。
2. 新規サーバ作成を選択し、サーバ名に使用されていない名前（例: type_syoubuda）を入力し、「Web開発」の項目から「Node.js」を選択して新規サーバを作成します。
3. 画面左の「ターミナル」を選択します。

4. ターミナルで以下のコマンドを実行します:
    ```bash
    npm init
    ```

5. `myapp` と入力し、Enter キーを押します。
6. 続けて `Is this OK？(yes)` と聞かれるまで Enter キーを押し、`yes` を選択します。
7. `/home/ubuntu` フォルダ内に `package.json` が作成されたら、フォルダを右クリックして「新規ディレクトリ」から `static` ディレクトリを作成します。
8. 「最終成果物.zip」を解凍し、中のファイル「勝負打」を確認します。
9. 中のファイル「server.js」を `/home/ubuntu` フォルダにドラッグ＆ドロップします。
10. 同様に「type.js」「index.html」「typing.css」のファイルを `static` ディレクトリにドラッグ＆ドロップします。
11. `Image` フォルダを選択し、中の画像を `static` ディレクトリにドラッグ＆ドロップします。複数選択は避けてください。
12. `audio` フォルダ内の音楽ファイルを `static` ディレクトリに一つずつアップロードします。
13. `/static` フォルダ内に合計32個のファイルがあることを確認したら、ターミナルで以下のコマンドを実行します:
    ```bash
    node server.js
    ```
14. ターミナルに `Starting server on port 3000` と表示されたら、画面左の地球のマークに「3000」と書かれたアイコンをクリックします。
15. 酒場の背景が表示されれば起動成功です。[https://type_syoubuda.paiza-user-free.cloud:3000/](https://type_syoubuda.paiza-user-free.cloud:3000/) でアクセス可能です。

## 動作条件

PC

## 簡易マニュアル

### オンライン対戦

1. 初心者ルーム、中級者ルーム、上級者ルームから部屋を選択します。
2. 部屋の人数が表示されており、適切な部屋を選択します。
3. 画面左の「地球」アイコンから、対局が始まります。
![image](https://github.com/minari515/shobuda/assets/126942302/222c84e9-cc60-484b-a7e2-aabb28c87f4f)

### 自主トレ

- 一人で練習するためのモード。正確率やタイピング速度を測定できます。

### 設定

- BGMやSEのオン/オフを切り替えることができます。

### チュートリアル

- ゲームのルールや操作方法を学ぶことができる。

## 作者

minari515

## ライセンス

このプロジェクトのライセンス情報は現在提供されていません。

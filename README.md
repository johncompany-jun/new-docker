# Laravelとreactの環境

## 概要
フロントがreactTS バックがLaravel

## 要件
- フロントreactTS
- バックLaravel
- データベースmysql

## dockerデスクトップ
dockerデスクトップのWindows版についは下記を参照<br>
https://zenn.dev/seiya0/articles/tech-docker-desktop-for-win-install

## 起動とセットアップ
dockerデスクトップが起動している状態で<br>
一番最初はコンテナを作成します。<br>　
`docker compose up -d --build`<br>

## 2回目以降
`docker compose up -d`<br>

## composerのインストール
`docker-compose exec php bash`<br>
`composer install`

## .env作成
.env ファイルがプロジェクト内に存在しない場合は .env.example をコピーして生成<br>
compose.yamlファイルから<br>
下記の部分を入力します。<br>
<br>
<br>
DB_CONNECTION=mysql<br>
DB_HOST=db<br>
DB_PORT=3306<br>
DB_DATABASE=docker_laravel_db<br>
DB_USERNAME=docker_laravel<br>
DB_PASSWORD=docker_laravel_pass<br>

## データベースとの連携
`php artisan key:generate`<br>
<br>
`php artisan migrate`<br>

## ダミーデータのインポート
`php artisan db:seed`

## 起動後
`docker-compose exec php bash`<br>
されていなければ、コンテナ内に入り
`npm install`<br>
`npm run dev`<br>
これをしないと画面が表示されません。

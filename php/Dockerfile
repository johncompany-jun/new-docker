FROM php:8.2-fpm

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    git unzip curl zip vim gnupg \
    libzip-dev libonig-dev libpng-dev \
    libxml2-dev libjpeg-dev libfreetype6-dev \
    libwebp-dev libgd-dev

# GDライブラリ構成とPHP拡張インストール
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp && \
    docker-php-ext-install pdo_mysql mbstring zip gd

# Xdebug のインストールと有効化
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Composerをインストール（グローバル）
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Node.js（v18）とnpmのインストール
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm

# Laravel Installer をグローバルにインストール
RUN composer global require laravel/installer

# Laravel コマンドが使えるよう PATH を通す
ENV PATH="/root/.composer/vendor/bin:${PATH}"

# php.ini を追加（オプション）
COPY php.ini /usr/local/etc/php/

# 作業ディレクトリ（Laravel プロジェクトルート）
WORKDIR /var/www/html

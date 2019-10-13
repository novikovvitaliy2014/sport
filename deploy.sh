#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
quasar build

# переход в каталог сборки
cd dist/spa

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:gfkids/sport.git master:gh-pages

cd -
# Сразу отправить папку dist в gh-pages
# git subtree push --prefix dist origin gh-pages

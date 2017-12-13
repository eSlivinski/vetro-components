cd ../

rm -rf media
rm -rf styles
cp -rf ../vetro-main/www/static/styles styles
cp -rf ../vetro-main/www/static/media media

sed -i -e "s/\/media\/fonts/media\/fonts/g" styles/app.css
sed -i -e "s/media\/fonts/..\/media\/fonts/g" styles/app.css

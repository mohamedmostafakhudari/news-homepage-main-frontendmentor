set -e
npm run build
cd dist
echo > .nojekyll
git init
git checkout -B master
git add -A
git commit -m 'deploy'
git push -f git@github.com:mohamedmostafakhudari/news-homepage-main-frontendmentor.git master:gh-pages
cd -
#!/bin/bash
cd docs/.vuepress/dist
git init
git add -A
git commit -m "deploy $1"
git push -f https://github.com/iju707/docs.git master:gh-pages
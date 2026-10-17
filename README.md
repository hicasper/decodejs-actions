# QLScriptpublic


fork仓库后 把待解密的脚本放入到input.js里面 等待60s左右即可在output.js看到解密脚本

python脚本同理 放入到input.py里面 等待60s左右即可在output.py看到解密脚本

目前支持zlib bz2 lzma

刚使用action的人手动点一下仓库上方action 初始化

脚本自适应检测加密方式

支持sojson [源jsjiami.v6]

支持sojsonv7 [源jsjiami.v7]

支持obfuscator [市面上通用加密]

支持awsc [阿里云混淆]

支持jjencode [源jjencode]

支持common [common]

## Actions 行为说明

- 按语言判断：本次提交改动了 `.js` 才执行 JS 解密，改动了 `.py` 才执行 Python 解密；两者都没改动就跳过解密（手动触发 workflow 会全量解密一次）。
- 依赖缓存：`node_modules` 和 npm 缓存都会被复用，`package.json` 没变化时不会重新安装依赖。
- 历史清理：每次运行结束后会把仓库历史重写为一个全新的单 commit 并 force push（省空间 + 删除输入文件的旧版本记录）。因此运行后本地和远端会分叉，继续提交前建议先执行 `git fetch origin && git reset --hard origin/main`，或直接在 GitHub 网页上编辑。

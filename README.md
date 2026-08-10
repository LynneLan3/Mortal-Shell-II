# LaunchWire – Mortal Shell II SEO 实验

一个极简的静态微型站，目标是验证：当游戏已有明显品牌词搜索需求、但可拆长尾相对较少时，一个小型专题站是否仍能通过 Google Search Console 拿到真实 impressions / 排名数据。

当前结构：**1 个 Hub + 3 个高置信 SEO 子页面**。

技术方案：纯静态 HTML + CSS，无框架、无数据库、无后台、无 API。可以直接部署到 Vercel。

与 Agefield High 实验的区别：本站主要测试**品牌词 + 少量高质量页面**，不人为堆低质量长尾页。

## 目录结构

```
index.html                              首页
mortal-shell-ii/
  index.html                            Hub 总览页
  release-date/index.html               发布日期 & 平台
  system-requirements/index.html        PC 配置要求
  gameplay/index.html                   玩法 / 战斗 / Shells
styles.css                               全站共用样式
favicon.svg
robots.txt
sitemap.xml
vercel.json                              强制 URL 带斜杠(保证 canonical 一致)
```

正式站点：`https://mortal-shell-ii.vercel.app/`

（已从旧域名 `hot-words-mortal-shell-ii.vercel.app` 更名为游戏本体域名。）

---

## 1. 如何本地运行

不需要安装任何依赖。推荐本地起一个静态服务器：

```bash
cd "/Users/lanling/Code/hot_words_websites/Mortal Shell II"
npx serve .
```

终端会给出一个本地地址，通常是：

- 首页：http://localhost:3000/
- Hub：http://localhost:3000/mortal-shell-ii/
- Release Date：http://localhost:3000/mortal-shell-ii/release-date/
- System Requirements：http://localhost:3000/mortal-shell-ii/system-requirements/
- Gameplay：http://localhost:3000/mortal-shell-ii/gameplay/

---

## 2. 如何部署到 Vercel

**Vercel CLI**

```bash
npm install -g vercel   # 只需安装一次
cd "/Users/lanling/Code/hot_words_websites/Mortal Shell II"
vercel                  # 按提示登录 + 确认项目，选默认选项即可
vercel --prod           # 正式发布到生产环境
```

**或通过 GitHub 连接 Vercel**

1. 推送到 `LynneLan3/Mortal-Shell-II`
2. 打开 vercel.com → New Project → 选择该仓库 → Deploy（纯静态，无需改构建配置）

---

## 3. 部署后：正式 URL 在哪里替换

> **状态：已完成。** 正式域名是：`https://mortal-shell-ii.vercel.app`

旧域名 `hot-words-mortal-shell-ii.vercel.app` 已停用。若 Google Search Console 仍绑旧域名，请用新网址前缀重新添加并验证，再重新提交 `sitemap.xml`。

若之后换成自定义域名，在以下文件替换域名（保留路径）：

| 文件 | 需要替换的内容 |
|---|---|
| `index.html` | `<link rel="canonical">` 和 `og:url` |
| `mortal-shell-ii/**/index.html` | `<link rel="canonical">`、`og:url`、JSON-LD 里的 URL |
| `robots.txt` | `Sitemap:` 那一行 |
| `sitemap.xml` | 全部 `<loc>` |

```bash
grep -rl "旧域名" . --include="*.html" --include="*.xml" --include="*.txt" \
  | xargs sed -i '' "s/旧域名/新域名/g"
```

---

## 4. canonical / sitemap 是否需要替换域名

**需要**（换自定义域名时）。当前 canonical / sitemap / robots 已与正式 Vercel 域名一致。

---

## 5. 如何添加 Google Search Console

1. 打开 [Google Search Console](https://search.google.com/search-console)
2. 选择「网址前缀」类型
3. 输入正式 URL
4. 推荐 **HTML 标签验证**：把验证 meta 加到 `index.html` 的 `<head>`，重新部署后点「验证」

---

## 6. 如何进行 URL Inspection / Request Indexing

对以下 URL 分别做网址检查并请求编入索引：

- `/`
- `/mortal-shell-ii/`
- `/mortal-shell-ii/release-date/`
- `/mortal-shell-ii/system-requirements/`
- `/mortal-shell-ii/gameplay/`

---

## 7. sitemap 提交路径

Search Console → Sitemaps → 输入：

```
sitemap.xml
```

---

## 8. 上线后应该观察哪些数据

Search Console → Performance，重点看：

- Impressions / Clicks / Average Position
- Queries（关注品牌词与 release date / system requirements / gameplay 相关词）
- Country

数据通常需要 **3–14 天** 才会开始稳定出现。

---

## 9. SEO Experiment Log（人工记录）

```
### SEO Experiment Log

Date:
Indexed:
Impressions:
Clicks:
Average Position:

Top Queries:
1.
2.
3.
4.
5.

Decision:
- [ ] KEEP
- [ ] EXPAND
- [ ] STOP
```

---

## 验收自查清单

- [x] 本地可以正常启动
- [x] 首页 `/` 正常
- [x] Hub `/mortal-shell-ii/` 正常
- [x] 3 个子页面正常：release-date / system-requirements / gameplay
- [x] Hub 与子页面内部链接正确
- [x] 每页独立 `<title>` / `meta description` / self-canonical
- [x] `robots.txt` / `sitemap.xml` 可访问
- [x] 无虚构的游戏事实（以官方站 / Steam / 商店列表为准）
- [x] 未引入框架 / CMS / 数据库

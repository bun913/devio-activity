# DevIO Activity README

GitHub Profileに[DeveLopers.io](https://dev.classmethod.jp/)の作者のアクティビティを表示するための補助ツールです。

クラスメソッド社に属している社員向け（自分向け）のツールとなります。

- [example](https://github.com/bun913)

## 🛠️ 使い方

### GitHub Profileの設定

`.github/workflows/` に、以下 `devio-activity.yml` を追加し、GitHub Actionsを設定します。

`AUTHOR_ID`には、自分の筆者のIDを入力します（`https://dev.classmethod.jp/author/${AUTHOR_ID}/`）。

```yml
name: Devio Activity

on:
  workflow_dispatch:
  schedule:
    - cron: "0 0 * * *"

jobs:
  update-activity:
    name: DevIO Activity
    runs-on: ubuntu-latest
    steps:
      - uses: bun913/devio-activity@main
        with:
          AUTHOR_ID: "bun913"
          # 以下オプション
          # GH_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}

```

初回はGitHub Actionsの **⚠手動実行⚠️** で画像を追加してください。以降は毎日12:00(UTC)に更新されます。

### READMEに埋め込み

処理が無事に完了すると,`developersio/${AUTHOR_ID}.svg`が追加されています。

README.mdの好きな箇所に以下のようにsvgファイルを埋め込みましょう。

```md
![devio](developersio/${AUTHOR_ID}.svg)
```

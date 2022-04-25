# Project

今回のプロジェクトは、Udemy で[Next.js](https://www.udemy.com/course/nextjs-tailwind-css-django-rest-framework-react/)を勉強したのでそれをベースに使用し自分がしたい[react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)と[Wordpress](https://wordpress.org/download/)を使用し,3D と Headles CMS の開発の基本になるものを作ってみたかった
そして自分のアウトプットに自分で開発したものを使用したらモチベーションになると考えたからです

# 採用技術

### wordpress

wordpress 5.9.3
本当はプラグインに[wp-GraohQL](https://www.wpgraphql.com/)を使いたかったが**2022/4/19**時点で 1.8v がなぜか使えないため
[WP-REST-API-Controller](https://wordpress.org/plugins/wp-rest-api-controller/)を使用した

### Next.js

フロントエンドには[Next.js](https://nextjs.org/)を採用

### style

style には[tailwind](https://tailwindcss.com/docs/guides/nextjsを使用

### 3D

3D には[react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)を使用
[Three.js](https://threejs.org/)が楽にかけるためなんか知ってるぐらいでしますので出来てしまうのでしまうので要復習

# 参考

- wordpress で取得してきた content の p タグが出力されてしまうのでそれを消したい
  - [JavaScript で HTML タグを削除する正規表現](https://qiita.com/miiitaka/items/793555b4ccb0259a4cb8)
- 3D オブジェクトを表示したい
  - [Next.js + react-three-fiber を使って.glb ファイルを表示した時のメモ](https://0ops.dev/posts/nextjs-and-react-three-fiber)
  - [react-three-fiber/drei で 3D モデルビューを手軽に実装する](https://zenn.dev/ryotarohada/articles/e3322dcdf80b66)
- Next.js
  - [Nextjs + Tailwind CSS + Django REST Framework で学ぶモダン React 開発](https://www.udemy.com/course/nextjs-tailwind-css-django-rest-framework-react/)

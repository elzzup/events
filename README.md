HTML5 Conference Webサイト
==========================

カンファレンスのWebサイトです。

ディレクトリ・ファイル構成（2013）
----------------------------------

HTML5 Conference 2013のサイトで使われているファイルは

* この `/public/conference/2013/11/` 以下 ― 画像やCSS
* `/routes/conf2013.js` ― カンファレンスのルーティング管理
* `/routes/index.js` ― `http://events.html5j.org/` から2013カンファレンスのページにリダイレクトする処理
* `/views/2013/` 以下 ― 各ページやテンプレート
* `/model/` 以下 ― セッション、スピーカー、スポンサー情報
* `/helper/` 以下 ― viewで使うヘルパーメソッドを定置
* `/app.js` ― ルーティングへの動線

です。それ以外は過去の遺物です。整理してくれる人大歓迎です。
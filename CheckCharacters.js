function CheckCharacters() { 
    this.IsHankakukanaIncluded = function (text) {
        if (!text) return false;

        // referred to the following page: https://ja.wikipedia.org/wiki/Unicode%E4%B8%80%E8%A6%A7_F000-FFFF
        // 半濁音・濁音はJavaScript文字列を作るときに一文字だか、Unicodeの文字表上は別の文字（例：ﾊﾟがﾊと゜の半角の組み合わせ
        // になるようなので、以下の正規表現でマッチした
        return text.search(/[ｦ-ﾟ]/) > -1;
    };
}

module.exports = CheckCharacters;
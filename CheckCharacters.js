var IsHankakukanaIncluded = IsHankakukanaIncluded || function (text) {
    if (!text) return false;

    // referred to the following page: https://ja.wikipedia.org/wiki/Unicode%E4%B8%80%E8%A6%A7_F000-FFFF
    // 半濁音・濁音はJavaScript文字列を作るときに一文字だが、Unicodeの文字表上は別の文字（例：ﾊﾟがﾊと゜の半角の組み合わせ
    // になるようなので、以下の正規表現でマッチした
    return text.search(/[ｦ-ﾟ]/) > -1;
};

var IsValidNumber = IsValidNumber || function (text) {
    if (!text) return false;

    // 0-9, leading '-', and (only one). are accepted
    return text.search(/^-?([0-9]+\.?[0-9]*|.?[0-9]+)$/) > -1;
};

var IsHankakuAlphaNumericOnly = IsHankakuAlphaNumericOnly || function (text) {
    if (!text) return false;

    return text.search(/^[0-9a-zA-Z]+$/) > -1;
};

var IsZenkakuOnly = IsZenkakuOnly || function (text) {
    if (!text) return true;

    // see: "Unicode 内のそれぞれの文字種の範囲"から、全角かな／カナ・漢字・全角英数字・
    // https://sites.google.com/site/michinobumaeda/misc/unicodecodechars
    var re = new RegExp([
        "^[\u3000-\u301C\u3041-\u3093\u30A1-\u30F6\u309B\u309C\u309D\u309E\u30FB\u30FC\u30FD\u30FE",    // 全角かな／カナ
        "\u4E00-\u9FCF", // 漢字
        "\uFF00-\uFF5E", // 全角英数字
        "]+$"
    ].join(""));
    return text.search(re) > -1;
};

exports.IsHankakukanaIncluded = IsHankakukanaIncluded;
exports.IsValidNumber = IsValidNumber;
exports.IsHankakuAlphaNumericOnly = IsHankakuAlphaNumericOnly;
exports.IsZenkakuOnly = IsZenkakuOnly;
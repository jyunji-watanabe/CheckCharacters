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

exports.IsHankakukanaIncluded = IsHankakukanaIncluded;
exports.IsValidNumber = IsValidNumber;
exports.IsHankakuAlphaNumericOnly = IsHankakuAlphaNumericOnly;
const CheckCharacters = require("./CheckCharacters");

describe("testing IsHankakukanaIncluded function", () => {
    test("empty string doesn't contain hankaku", () => {expect(CheckCharacters.IsHankakukanaIncluded("")).toBe(false);});
    test("null doesn't contain hankaku", () => {expect(CheckCharacters.IsHankakukanaIncluded(null)).toBe(false);});
    test("string with Kanji and hankaku kana contains hankaku", () => {
        expect(CheckCharacters.IsHankakukanaIncluded("東京都ﾄｼﾏｸ")).toBe(true);
        expect(CheckCharacters.IsHankakukanaIncluded("ｦ東京都")).toBe(true);
        expect(CheckCharacters.IsHankakukanaIncluded("東ﾊﾟ京都")).toBe(true);
        expect(CheckCharacters.IsHankakukanaIncluded("東ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ京都")).toBe(true);
    });
    test("string with Kanji only doesn't contain hankaku", () => {
        expect(CheckCharacters.IsHankakukanaIncluded("東京都")).toBe(false);
    });
});

describe("testing IsValidNumber function", () => {
    test("empty string isn't a valid number", () => {expect(CheckCharacters.IsValidNumber("")).toBe(false)});
    test("null isn't a valid number", () => {expect(CheckCharacters.IsValidNumber(null)).toBe(false)});
    test("string consisting only of numbers is a valid number", () => {expect(CheckCharacters.IsValidNumber("20210214")).toBe(true)});
    test("numbers divided by symbol isn't a valid number", () => {expect(CheckCharacters.IsValidNumber("2021/02/14")).toBe(false)});
    test("zenkaku number isn't a number", () => {expect(CheckCharacters.IsValidNumber("20210２14")).toBe(false)});
    test("leading - is accepted", () => {
        expect(CheckCharacters.IsValidNumber("-213")).toBe(true);
        expect(CheckCharacters.IsValidNumber("-21-3")).toBe(false);
    });
    test(". is accepted only once", () => {
        expect(CheckCharacters.IsValidNumber("-.213")).toBe(true);
        expect(CheckCharacters.IsValidNumber("-.21.3")).toBe(false);
        expect(CheckCharacters.IsValidNumber("-0.213")).toBe(true);
        expect(CheckCharacters.IsValidNumber("-1230.213")).toBe(true);
        expect(CheckCharacters.IsValidNumber("-1230.")).toBe(true);
        expect(CheckCharacters.IsValidNumber("-1230.0")).toBe(true);
    });
});

describe("testing IsHankakuAlphaNumericOnly function", () => {
    test("empty string isn't hankakualphanumeric only", () => {expect(CheckCharacters.IsHankakuAlphaNumericOnly("")).toBe(false)});
    test("null isn't hankakualphanumeric only", () => {expect(CheckCharacters.IsHankakuAlphaNumericOnly(null)).toBe(false)});
    test("text with alphabets and/or numbers only is hankakualphanumeric only", () => {
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("3456")).toBe(true);
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("cdef")).toBe(true);
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("CDEF")).toBe(true);
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("3c4d5ef6")).toBe(true);
    });
    test("zenkaku alphabet and number isn't a hankakualphanumeric character", () => {
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("3４56")).toBe(false);
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("cdｅf")).toBe(false);
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("CDEＦ")).toBe(false);
    });
    test("text with non alphanumeric character isn't hankakunumeric only", () => {
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("カタ3カナ")).toBe(false);
        expect(CheckCharacters.IsHankakuAlphaNumericOnly("a漢字")).toBe(false);
        expect(CheckCharacters.IsHankakuAlphaNumericOnly(" _")).toBe(false);
    });

});

describe("testing IsZenkakuOnly function", () => {
    test("empty string is zenkaku only", () => {expect(CheckCharacters.IsZenkakuOnly("")).toBe(true)});
    test("null is zenkaku only", () => {expect(CheckCharacters.IsZenkakuOnly(null)).toBe(true)});
    test("zenkaku kanas are zenkaku", () => {
        expect(CheckCharacters.IsZenkakuOnly("　、。「」『』【】〜")).toBe(true);   // 全角スペース、句読点など
        expect(CheckCharacters.IsZenkakuOnly("ぁがろをん")).toBe(true);   // ひらがな
        expect(CheckCharacters.IsZenkakuOnly("ァアトポヵヶ")).toBe(true);   // カタカナ
        expect(CheckCharacters.IsZenkakuOnly("゛゜ゝゞ・ーヽヾ")).toBe(true);   // その他記号
    });
    test("kanjis are zenkaku", () => {
        expect(CheckCharacters.IsZenkakuOnly("一郵黒鿏")).toBe(true);
    });
    test("zenkaku alphanumerics are zenkaku", () => {
        expect(CheckCharacters.IsZenkakuOnly("！＃Ａ～８ｙ｝")).toBe(true);
    });
    test("mixed cases", () => {
        expect(CheckCharacters.IsZenkakuOnly("あ１！い２う坂３え４お５")).toBe(true);
        expect(CheckCharacters.IsZenkakuOnly(" あ１！い２う坂３え４お５")).toBe(false);   // 半角を混ぜる（前）
        expect(CheckCharacters.IsZenkakuOnly("あ１！い２う3坂３え４お５")).toBe(false);   // 半角を混ぜる（中）
        expect(CheckCharacters.IsZenkakuOnly("あ１！い２う坂３え４お５ﾊ")).toBe(false);   // 半角を混ぜる（後）
    });
});
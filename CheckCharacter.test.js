const CheckCharacters = require("./CheckCharacters");
test("empty string doesn't contain hankaku", () => {expect(CheckCharacters.IsHankakukanaContained("")).toBe(false);});
test("null doesn't contain hankaku", () => {expect(CheckCharacters.IsHankakukanaContained(null)).toBe(false);});
test("string with Kanji and hankaku kana contains hankaku", () => {
    expect(CheckCharacters.IsHankakukanaContained("東京都ﾄｼﾏｸ")).toBe(true);
    expect(CheckCharacters.IsHankakukanaContained("ｦ東京都")).toBe(true);
    expect(CheckCharacters.IsHankakukanaContained("東ﾊﾟ京都")).toBe(true);
    expect(CheckCharacters.IsHankakukanaContained("東ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ京都")).toBe(true);
});
test("string with Kanji only doesn't contain hankaku", () => {
    expect(CheckCharacters.IsHankakukanaContained("東京都")).toBe(false);
});
const CheckCharacters = require("./CheckCharacters");
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
const CheckCharacters = require("./CheckCharacters");
const obj = new CheckCharacters();
test("empty string doesn't contain hankaku", () => {expect(obj.IsHankakukanaIncluded("")).toBe(false);});
test("null doesn't contain hankaku", () => {expect(obj.IsHankakukanaIncluded(null)).toBe(false);});
test("string with Kanji and hankaku kana contains hankaku", () => {
    expect(obj.IsHankakukanaIncluded("東京都ﾄｼﾏｸ")).toBe(true);
    expect(obj.IsHankakukanaIncluded("ｦ東京都")).toBe(true);
    expect(obj.IsHankakukanaIncluded("東ﾊﾟ京都")).toBe(true);
    expect(obj.IsHankakukanaIncluded("東ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ京都")).toBe(true);
});
test("string with Kanji only doesn't contain hankaku", () => {
    expect(obj.IsHankakukanaIncluded("東京都")).toBe(false);
});
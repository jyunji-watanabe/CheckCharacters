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

describe("testing IsNumberOnly function", () => {
    test("empty string isn't number only", () => {expect(CheckCharacters.IsNumberOnly("")).toBe(false)});
    test("null isn't number only", () => {expect(CheckCharacters.IsNumberOnly(null)).toBe(false)});
    test("string consisting only of numbers is number only", () => {expect(CheckCharacters.IsNumberOnly("20210214")).toBe(true)});
    test("numbers divided by symbol isn't number only", () => {expect(CheckCharacters.IsNumberOnly("2021/02/14")).toBe(false)});
    test("zenkaku number isn't a number", () => {expect(CheckCharacters.IsNumberOnly("20210２14")).toBe(false)});
    test("leading - is accepted", () => {
        expect(CheckCharacters.IsNumberOnly("-213")).toBe(true);
        expect(CheckCharacters.IsNumberOnly("-21-3")).toBe(false);
    });
    test(". is accepted only once", () => {
        expect(CheckCharacters.IsNumberOnly("-.213")).toBe(true);
        expect(CheckCharacters.IsNumberOnly("-.21.3")).toBe(false);
        expect(CheckCharacters.IsNumberOnly("-0.213")).toBe(true);
        expect(CheckCharacters.IsNumberOnly("-1230.213")).toBe(true);
        expect(CheckCharacters.IsNumberOnly("-1230.")).toBe(true);
        expect(CheckCharacters.IsNumberOnly("-1230.0")).toBe(true);
    });
});
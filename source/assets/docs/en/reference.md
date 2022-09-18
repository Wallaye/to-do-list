## Text Tokenization

Text is considered as a sequence of tokens. Token is a word or a word break. Word is a continuous sequence of letters and digits. Word break is a punctuation mark, a symbol, a line break or a sequence of spaces, tabs and symbols without glyph.

## Identifiers

`Name-1` — identifier, used to name token, pattern, pattern field or namespace. Identifiers are case-sensitive, should start from letter and may include letters, digits, and hyphens. The underscore symbol is not allowed (Nevod identifier can be converted to identifier of any popular programming language by replacing hyphens with underscores).

`My.Domain` — multipart identifier, includes period as separator of parts. Multipart identifiers can be used to name patterns and namespaces, but not pattern fields.

`My.Domain.Pattern-1` — fully qualified (multipart) identifier of some pattern.

`Pattern-1` — master pattern. `Pattern-1.SubPattern` — sub-pattern. Patterns with multipart names are considered as sub-patterns if their initial part coincides with the name of some other pattern, which is considered as master pattern. Master pattern may reference sub-patterns by omitting the initial part.

## Keywords

All keywords start from `@` symbol, so there are no reserved words and identifiers coinciding with words can be used to name patterns. The following keywords are defined:

`@require` — keyword used to import required pattern package.

`@namespace` — keyword used to define namespace of patterns.

`@pattern` — keyword used to define pattern.

`@search` — keyword used to mark pattern as a search target.

`@inside` — keyword used as operator in expressions.

`@outside` — keyword used as operator in expressions.

`@having` — keyword used as operator in expressions.

`@where` — keyword used to define nested patterns.

## Text Literals

`"text"` — text literal, compared case-insensitive.

`"text"!` — text literal, compared case-sensitive.

`'text'` — text literal, compared case-insensitive. Can include double quote.

`'text'!` — text literal, compared case-sensitive. Can include double quote.

`'text ''Nevod'' in quotes'` — text literal, compared case-insensitive. Two quotes make quote part of text.

`"text ""Nevod"" in double quotes"` — text literal, compared case-insensitive. Two double quotes make double quote part of text.

`'text'*` — text prefix literal, compared case-insensitive.

`'text'!*` — text prefix literal, compared case-sensitive.

`'text'*(3-6)` — text prefix literal, compared case-insensitive, with suffix length from 3 to 6 characters.

`'text'!*(Num, 2)` — text prefix literal, compared case-sensitive, with suffix being a number consisting of two digits.

`'text'*(Alpha, 3-6, Lowercase)` — text prefix literal, compared case-insensitive, with suffix consisting of just alphabetic letters in lowercase and length from 3 to 6 characters.

## Basic Tokens

`Word` — any word, continuous sequence of alphabetic letters (of any language) and digits.

`Punct` — punctuation mark, includes any mark or sign used in writing to divide texts into phrases and sentences and make the meaning clear. The following characters are considered punctuation marks: `.`, `,`, `!`, `?`, `(`, `)`, `-`, `;`, `:`, `'`, `"`.

`Symbol` — non-alphabetic sign, such as one of the following: `@`, `_`, `#`, `$`, `%`, `&`, `*`, `^`, `+`, `=`, `~`, `[`, `]`, `{`, `}`, `<`, `>`, `/`, `\`, `|`.

`Space` — continuous sequence of spaces, tabs and other separator characters without glyph.

`LineBreak` — line terminator, marks the end of text line.

`Start` — the start of text, artificial token.

`End` — the end of text, artificial token.

## Additional Tokens

`Alpha` — alphabetic `Word`, continuous sequence of just alphabetic letters.

`Num` — numeric `Word`, continuous sequence of digits.

`AlphaNum` — alpha-numeric `Word`, continuous sequence of alphabetic letters and digits, which starts from alphabetic letter.

`NumAlpha` — alpha-numeric `Word`, continuous sequence of alphabetic letters and digits, which starts from digit.

`Blank` — space or line terminator. Equivalent to a list of alternatives: `{Space, LineBreak}`

`WordBreak` — any word separator such as space, punctuation mark, non-alphabetic symbol, or line terminator. Equivalent to a list of alternatives: `{Space, Punct, Symbol, LineBreak}`

`Any` — any token except `Start` and `End`. Equivalent to a list of alternatives: `{Word, WordBreak}`

## Parameterized Tokens

`Word(Uppercase)` — any word in uppercase.

`Num(2-4)` — number consisting from 2 to 4 digits.

`Alpha(2-10, TitleCase)` — alphabetic `Word` with length from 2 to 10 letters, the first letter in uppercase and subsequent letters in lowercase.

`AlphaNum(3-6, Lowercase)` — alpha-numeric `Word` with length from 3 to 6 characters and all letters in lowercase.

## Sequences

`A + B` — sequence of two mandatory elements with strict order.

`A + B + C` — sequence of three mandatory elements with strict order. The number of elements in sequence is not limited.

## Variations

`{A, B}` — variation with two alternatives: either `A` or `B`.

`{A, B, C}` — variation with three alternatives: either `A` or `B` or `C`. The number of alternatives is not limited.

`{A}` — variation with one alternative, equivalent to `A`.

`{A, ~B}` — variation with one alternative and exception: `A` but not `B`.

`{A, B, ~C}` — variation with two alternatives and one exception: either `A` or `B`, but not `C`.

`{A, ~B, ~C}` — variation with one alternative and two exceptions: `A` but not `B` nor `C`. The number of exceptions is not limited, but there should be at least one alternative.

## Conjunctions

`A & B` — conjunction of `A` and `B`, which means that `A` is followed by `B` or `B` is followed by `A` at any distance between `A` and `B`.

`A & B & C` — conjunction of `A`, `B` and `C`, in any order and at any distance. The number of elements is not limited.

## Repetitions

`[3 A]` — repetition of `A` exactly `3` times.

`[3-5 A]` — repetition of `A` from `3` to `5` number of times. All variants of matches are considered starting from low bound to high bound. The largest repetition not intersecting with itself is chosen.

`[1+ A]` — repetition of `A` one or more number of times, without high bound. The matching engine chooses the high bound dynamically to prevent too long search, which is perceived as endless execution.

`[0+ A]` — repetition of `A` any number of times, including zero times, i.e. repetition of `A` is optional.

`[0-3 A]` — repetition of `A` from `0` to `3` times. Repetition of `A` is optional.

`[0-1 A]` — repetition of `A` from `0` to `1` times, means that `A` is optional.

## Optionality

`? A` — optionally `A`, equivalent to `[0-1 A]`.

## Word Sequences

`A _ B` — sequence of two mandatory elements (usually words) separated by word breaks. Equivalent to: `A + [0+ WordBreak] + B`.

`A _ B _ C` — sequence of three mandatory elements (usually words) separated by word breaks. The number of elements in sequence is not limited. Equivalent to: `A + [0+ WordBreak] + B + [0+ WordBreak] + C`.

## Spans

`A ... B` — element `A` followed by `B` with any span between `A` and `B`.

`A .. [0-5] .. B` — element `A` followed by `B` with span between `A` and `B` having no more than `5` words.

## Search Scope, Exceptions and Intersections

`A @inside B` — element `A` matches inside (in the scope of) `B`.

`A @outside B` — element `A` matches outside of `B`, i.e. `A` doesn't intersect with `B` in text.

`A @having B` — element `A` matches having `B` inside, i.e. `B` is inside of `A`.

## Parenthesis

`()` — explicitly controls the precedence of operators, for example: `? (A + B)`. Without the parenthesis optionality operator `?` would refer to `A` but not to the sequence `A + B`.

## Patterns

`P = "text";` — the pattern has name `P` and is defined via text literal. The match of text literal means the match of the pattern `P`. The name `P` can be used to reference this pattern in the definition of the other patterns.

`P = Alpha;` — the pattern `P` is defined via alphabetic token.

`P2 = P1; P1 = Word;` — two patterns: the pattern `P2` is defined via pattern `P1`, and the pattern `P1` is defined via `Word` token.

`P = A + B;` — the named pattern defined via sequence of patterns `A` and `B`.

`P = {A, B};` — the named pattern defined via variation with alternatives `A` and `B`.

`P = [1+ A];` — the named pattern defined via repetition of pattern `A`.

`#P = "text";` — the pattern `P` marked with hash-tag as search target. Matches of only target patterns are returned in the results of search.

`#P = A + B;` — the target pattern defined via sequence of patterns `A` and `B`. Matches of the target pattern `P` are returned in the results of search.

`#P = {A, B};` — the target pattern defined via variation with alternatives `A` and `B`. Matches of the target pattern `P` are returned in the results of search.

`#P = [1+ A];` — the target pattern defined via repetition of pattern `A`. Matches of the target pattern `P` are returned in the results of search.

`@pattern P = Alpha;` — the pattern `P` is defined using pattern package syntax.

`@search @pattern P = Alpha;` — the pattern `P` in a package is marked as search target.

`@pattern #P = Alpha;` — the pattern `P` in a package is marked with hash-tag as search target. Equivalent to: `@search @pattern P = Alpha;`.

`@pattern P = W @where { @pattern W = Word; };` — the pattern `P` in a package is defined via nested pattern `W`. The pattern `W` can be referenced from other patterns via multipart identifier `P.W`.

`@pattern #P = W + S @where { @pattern #W = Word; @pattern S = Space; };` — the pattern `P` in a package is a search target defined via nested patterns `W` and `S`, where the pattern `W` is a search target. The patterns `W` and `S` can be referenced from other patterns via multipart identifiers `P.W` and `P.S` correspondingly.

Target patterns as well as non-target patterns can be used to create other patterns, but matches of only target patterns are included in the results of search.

## Pattern Fields and Text Extraction

`#P(X, Y) = X: A ... Y: B;` — pattern `P` with two fields `X` and `Y`. The pattern is defined as span between `A` and `B`. The values of the fields `X` and `Y` are extracted from text as matches of patterns `A` and `B` respectively. Only one text extraction is allowed per field.

`#P(X) = A .. X .. B;` — pattern `P` with field `X`. The pattern is defined as span between `A` and `B`. The value of the field `X` is extracted from text as span between `A` and `B`.

`#P1(X, Y) = P2(X: Q, Y: S);` — pattern `P1` with two fields `X` and `Y`. The pattern is defined through pattern `P2`, which has fields `Q` and `S`. The values of the fields `X` and `Y` are extracted respectively from fields `Q` and `S` of the pattern `P2`.

`#P(X) = X: Word ... X;` — pattern `P` with field `X`. The pattern is defined as span that starts with a word and ends with the same word. The end of the span is defined as the value of the field `X`, which is earlier extracted from text as the start of the span. Only one extraction is allowed per field. Field value should be extracted before use.

`#P(~X) = X: Word ... X;` — pattern `P` with field `X` marked as internal field. Internal fields are not returned in the results of search but can be used in expressions.

`#P(X) = [1+ X: Symbol + X];` — pattern `P` with field `X`. The pattern is defined as repetition of a symbol followed by the same symbol (repetition of double symbol). Field value can be used only within the context of extraction, e.g. the field `X` is extracted inside repetition, so it can be used within the repetition and cannot be used outside of the repetition.

`#P(X, Y) = {X: Punct + X, Y: Symbol + Y};` — pattern `P` with fields `X` and `Y`. The pattern is defined as variation with two alternatives. The first alternative is a double punctuation mark, and the second alternative is a double symbol. Field value can be used only within the context of extraction, e.g. the field `X` is extracted inside first alternative, so it can be used only within that alternative; the field `Y` is extracted inside second alternative, so it can be used only within the second alternative. For pattern `P` either field `X` or field `Y` gets value depending on the matched alternative of the variation.

## Namespaces

`@namespace N { @pattern P = Word; }` — declaration of namespace with the identifier `N`. Pattern `P` defined inside curly braces is considered to belong to the namespace `N` and can be referenced by the fully qualified multipart name `N.P`. Patterns defined outside of any namespace are considered to belong to the default namespace with empty name. Namespace syntax is allowed within pattern packages.

`@namespace Basic.DateTime { @pattern Time = {Time24, Time12}; }` — declaration of namespace with the multipart identifier `Basic.DateTime`. The pattern `Time` in this namespace can be referenced by the fully qualified multipart name `Basic.DateTime.Time`.

`@namespace Basic { @namespace DateTime { @pattern Time = {Time24, Time12}; } }` — declaration of namespace `DateTime` nested in namespace `Basic`. The pattern `Time` in this namespace can be referenced by the fully qualified multipart name `Basic.DateTime.Time`.

## Pattern Packages

Related patterns can be saved into a separate file called pattern package. The recommended file extension is NP (abbreviation from Nevod Patterns). The name of the file is used to reference package from the dependent packages.

Below is an example of package:

```nevod
@namespace Basic
{
  @search @pattern GUID = Word(8) + [3 '-' + Word(4)] + '-' + Word(12);
}
```

The package above declares namespace `Basic` with the target pattern `GUID` used to search for GUID values in text. This package can be saved to file `"GUID.np"` and reused by other packages. Below is an example of the second package that uses the foregoing package:

```nevod
@require "GUID.np";

@namespace Basic
{
  @search @pattern GUID-in-Braces = '{' + GUID + '}';
}
```

This package imports the first package located in file `"GUID.np"`. The second package adds the `GUID-in-Braces` pattern in the `Basic` namespace. The `GUID-in-Braces` pattern is defined through the reference to the `GUID` pattern. The second package can be saved to file `"GUID-Extension.np"` and reused in turn by other packages.

## Import of Packages

`@require "GUID.np";` — import package from file `"GUID.np"`. The `@require` directives are allowed only in the beginning of package text; they should precede declarations of namespaces and patterns.

`@require "/GUID.np";` — import package from file `"GUID.np"` located in the root directory.

`@require "C:/GUID.np";` — import package from file `"GUID.np"` located in the root directory of drive `"C:"` on the Windows operating system.

`@require "./GUID.np";` — import package from file `"GUID.np"` located in the same directory as the package containing this directive.

`@require "../GUID.np";` — import package from file `"GUID.np"` located in the parent directory of the directory where the package containing this directive is located.

## Search Targets

When search is performed, only patterns marked as search targets are considered. Matches of only target patterns are included in the results of search.

When a package imports other packages, then patterns, defined as search targets in the imported packages, are not considered by default as search targets in the importing package. For example, searching for patterns of the package `"GUID-Extension.np"` means searching for just pattern `GUID-in-Braces`, but not for pattern `GUID` in the imported package `"GUID.np"`.

To search also for patterns from the imported packages, declare them as search targets in the importing package. The following package imports the `"GUID.np"` package with the `GUID` pattern and adds this pattern to the list of search targets:

```nevod
@require "GUID.np";

@namespace Basic
{
  @search @pattern GUID-in-Braces = '{' + GUID + '}';
}

@search Basic.GUID;
```

In the example above the pattern `Basic.GUID` is declared as search target.

Patterns can be marked as search targets separately from the patterns declaration:

```nevod
@require "GUID.np";

@search Basic.GUID;
@search Basic.GUID-in-Braces;

@namespace Basic
{
  @pattern GUID-in-Braces = '{' + GUID + '}';
}
```

In the example above the pattern `GUID-in-Braces` is declared as search target, but defined as non-target (without hash-tag or `@search` keyword) later in text. This means that the `GUID-in-Braces` pattern is considered as search target when this package is used for search, but is not considered as search target in the importing package that declares search target as namespace with wildcard (`@search Basic.*;`) as in the example that follows.

It's possible to create search targets from all target patterns of a given namespace:

```nevod
@require "GUID.np";

@search Basic.*;

@namespace Basic
{
  @pattern GUID-in-Braces = '{' + GUID + '}';
}
```

The declaration `@search Basic.*;` means that all target patterns in the namespace `Basic` become search targets. Note that this applies only to patterns declared in the current package and packages explicitly imported via the `@require` directive. For example, if we would change the package `"GUID.np"` to import some other packages with target patterns in the `Basic` namespace, then these target patterns from indirectly imported packages wouldn't become search targets.

## Library of the Basic Patterns

Nevod provides library of the basic patterns. Currently the library consists of the following packages:

`Basic.np` — package that imports all other packages with basic patterns and declares all such patterns as search targets.

`BankCardNumber/Basic.BankCardNumber.np` — package containing patterns used to search for bank card numbers in text.

`Basic.Currency.np` — package containing patterns used to search for currency values in text.

`Basic.Date.np` — package containing patterns used to search for dates values in text.

`Basic.Time.np` — package containing patterns used to search for time values in text.

`Basic.DateTime.np` — package containing patterns used to search for dates and time values in text.

`Basic.Duration.np` — package containing patterns used to search for date or time duration in text.

`Basic.Email.np` — package containing patterns used to search for emails in text.

`Basic.GUID.np` — package containing patterns used to search for GUID values in text.

`Basic.HashTag.np` — package containing patterns used to search for Twitter-like hash-tags in text.

`Basic.IpAddress.np` — package containing patterns used to search for IP addresses in text.

`Basic.Number.np` — package containing patterns used to search for integer and float numbers in text.

`Basic.PhoneNumber.np` — package containing patterns used to search for phone numbers in text.

`Basic.Url.np` — package containing patterns used to search for URL values in text.

## Examples

Here are examples from the Nevod basic library used to extract GUID values, Twitter-like hash-tags, integer numbers, float numbers, and percentage values in text:

```nevod
@namespace Basic
{
  @pattern #GUID = Word(8) + [3 '-' + Word(4)] + '-' + Word(12);
  @pattern #HashTag = '#' + {AlphaNum, Alpha, '_'} + [0+ {Word, '_'}];
  @pattern #Number = {Integer, Float}
  @where
  {
    @pattern Integer = ?'-' + Num @outside Float;
    @pattern Float = ?{'+', '-'} + Num + ?({'.', ','} + Num);
  };
  @pattern #Percentage = Num + ?Space + {'%', 'pct.', 'pct', 'percent'};
}
```

The following basic package `"Url.np"` demonstrates Url pattern with sub-patterns used to extract URL links from text.

```nevod
@namespace Basic
{
  @search @pattern Url(domain, path, query, anchor) =
    Schema + domain:Domain + ?Port + ?path:Path +
    ?query:Query + ?anchor:Anchor
  @where {
    Schema = {'http', 'https' , 'ftp', 'mailto', 'file', 'data',
      'irc'} + '://';
    Domain = Word + [1+ '.' + Word + [0+ {Word, '_', '-'}]];
    Port = ':' + Num;
    Path = ?'/' + [0+ {Word, '/', '_', '+', '-', '%', '.'}];

    Query = '?' + ?(Param + [0+ '&' + Param])
    @where
    {
      Param = Identifier + '=' + Identifier
      @where
      {
        Identifier = {Alpha, AlphaNum, '_'} + [0+ {Word, '_'}];
      };
    };

    Anchor(value) = '#' + value:Word;
  };
}
```

The following basic package demonstrates Email pattern with sub-patterns used to extract e-mail addresses from text.

```nevod
@require "./Url.np";

@namespace Basic
{
  @search @pattern Email = {LocalPart, QuotedLocalPart} + '@' +
    Url.Domain
  @where
  {
    LocalPart = Word + [0+
      {Word, Punct, Symbol, ~NotAllowedSymbols, ~[2+ '.'], ~'.@'}]
    @where
    {
      NotAllowedSymbols = {'"', '(', ')', ',', ':', ';', '<', '>',
        '@', '[', '\', ']'};
    };
    QuotedLocalPart = '"' ... '"';
  };
}
```

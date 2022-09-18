## About Nevod

Nevod is a language and technology that provide pattern-based text search. Nevod is specially aimed to rapidly reveal entities and their relationships in texts written in the natural language. This open-source technology is unique on the market. Here are main differentiators of it.

- Nevod pattern definition language is designed for content analysts (not only programmers) and allows them creating patterns that are easy to write, read, modify and support.
- Patterns operate over text tokens such as words, spaces, and punctuation marks, not over characters such as letters and digits.
- Pattern may consist of arbitrary combinations of sequences, variations, repetitions, conjunctions, spans, intersections, etc. of text tokens and other patterns.
- Nevod searches for all matches of all patterns by one lookup through the text tokens. It is hundreds of times faster than the well-known regular expressions, and the speed doesn’t degrade linearly when you add patterns.
- Patterns are language neutral and safe to be used by end users in the Internet. The search will never block due to endless or too long execution.

Pattern definition language is simple and clear, thus very easy to learn.

## Major Features

The major Nevod features include:

- Token-based text search that may take into account letter case, length of words and word prefixes;
- Operators to search for token sequences, alternatives, repetitions, conjunctions, spans, etc.;
- Powerful operators to limit search scope, handle exceptions, and check intersections;
- Multipart pattern names and sub-patterns;
- Pattern fields, text extraction into fields and usage of field values in pattern expression;
- Namespaces and search targets based on namespaces;
- Reusable pattern packages;
- Library of the commonly used patterns to search for URL links, e-mails, bank card numbers, date and time values, etc.

## Text Tokenization

Nevod patterns work at token level. The text to be searched for patterns is parsed into tokens. Tokens are divided into words and word breaks. Words are continuous sequences of letters and digits. Word breaks are punctuation marks, symbols, line breaks and spaces. There are special Start and End tokens that are added before the first and after the last tokens to facilitate creating patterns with limited scope.

## Patterns

Each pattern is a formal grammar that consists of pattern identifier, the equal sign, and the pattern expression operating over text tokens and references to other patterns. The pattern definition ends with semicolon. Here is the simplest pattern that looks for the word `Nezaboodka` in text:

```nevod
Company = "Nezaboodka";
```

The pattern `Company` is considered as non-target pattern, i.e. matches of this pattern are not included in search results. If you need pattern matches to be included in search results, specify the hash tag before the pattern name, for example:

```nevod
#Company = "Nezaboodka";
```

Pattern marked with hash tag is considered as target pattern, or tag. Matches of target patterns are included in search results.

If a pattern is defined in a pattern package (described below in this tutorial), then the pattern definition should start from the keyword `@pattern`, for example:

```nevod
@pattern #Company = "Nezaboodka";
```

Note that all Nevod keywords start from the `@` (commercial at) symbol. This is done in order to avoid reserved words and to allow all identifiers matching common words to be used for naming patterns. For example, you may create pattern named `pattern`:

```nevod
@pattern pattern = ?("@pattern" + Space) + ?"#" + AlphaNum;
```

Using the pattern package syntax, you may define pattern as non-target and declare it as a search target separately from the pattern definition, for example:

```nevod
@pattern Company = "Nezaboodka";

@search Company;
```

The pattern `Company` is first defined in text and then declared as search target via the keyword `@search`. You may also use the `@search` keyword instead of hash tag to declare search target, for example:

```nevod
@search @pattern Company = "Nezaboodka";
```

## Text Literals

The pattern may include text literals or entirely consist of a text literal. Text literals are written in quotes, as in the already shown example:

```nevod
#Company = "Nezaboodka";
```

This pattern looks for a separate word `Nezaboodka`, not for a sub-string. The words are compared case-insensitive. To enable case-sensitive comparison, specify exclamation mark after the closing quote, for example:

```nevod
#Company = "Nezaboodka"!;
```

You may equally use single quotes instead of double quotes to denote text literal:

```nevod
#Company = 'Nezaboodka'!;
```

The text literal in quotes is considered as a sequence of tokens. If the text literal contains spaces, punctuation marks or non-alphabetic symbols, it is parsed into tokens and compared token by token with tokens in text. For example, the following pattern looks for the word `Nezaboodka`, followed by space and the word `Software` in text:

```nevod
#Company = "Nezaboodka Software";
```

This pattern consists of a sequence of tokens, so let us take a closer look at sequences.

## Sequences

You have met sequence in the following pattern consisting of a text literal:

```nevod
#Company = "Nezaboodka Software";
```

This pattern is an implicit sequence of simpler text tokens. Let us rewrite it as an explicit sequence:

```nevod
#Company = "Nezaboodka" + Space + "Software";
```

The sequence is denoted by the plus sign and in the example above consists of three elements: the word `Nezaboodka`, the Space and the word `Software`. The `Space` is the predefined pattern, which denotes one or more space or tab characters.

The above pattern matches `Nezaboodka Software` but doesn’t match `Nezaboodka Soft`. To match different variants of writing some entity you should use variation.

## Variations

The following pattern consists of a variation and matches either `Nezaboodka Software` or `Nezaboodka Soft` in text:

```nevod
#Company = {"Nezaboodka Software", "Nezaboodka Soft"};
```

Variation is denoted by the curly braces. Alternatives within variation are separated by comma. You can rewrite the above pattern by combining the sequence and variation:

```nevod
#Company = "Nezaboodka" + Space + {"Software", "Soft"};
```

The above pattern looks for word `Nezaboodka` followed by space and either the word `Software` or `Soft`.

In the variation you may specify exceptions with the help of the tilde sign. The following pattern looks for the word `Nezaboodka` followed by space and any alphabetic word except `Software` and `Soft`:

```nevod
#Technology = "Nezaboodka" + Space + {Alpha, ~"Software", ~"Soft"};
```

The pattern `Alpha` is the predefined pattern that matches any word consisting of just alphabetic letters (of any language).

You may use variation to allow punctuation marks (like dot, comma, semicolon and others), symbols (like asterisk, underscore, plus and others) and new lines to separate words along with spaces, for example:

```nevod
#Company = "Nezaboodka" + {Space, Punct, Symbol, LineBreak} + {"Software", "Soft"};
```

Using the standard `WordBreak` pattern this example could be rewritten as follows:

```nevod
#Company = "Nezaboodka" + WordBreak + {"Software", "Soft"};
```

The pattern `WordBreak` is the standard pattern that matches any symbol considered as word break and is equivalent to variation `{Space, Punct, Symbol, LineBreak}`. We will talk about standard patterns in one of the next sections.

In the example above, the pattern doesn’t match if there are several word breaks between the words. To enable match in case of several word breaks, you can use repetition.

## Repetitions

The following pattern looks for text with one or more (but no more than nine) repeated word breaks between the words `Nezaboodka` and `Software`:

```nevod
#Company = "Nezaboodka" + [1-9 WordBreak] + "Software";
```

Repetition is denoted by the square brackets with numeric range and the pattern being repeated. In the example above the numeric range 1-9 means “from 1 to 9 times”.

If repetition should have no high bound, the pattern above should be rewritten as follows:

```nevod
#Company = "Nezaboodka" + [1+ WordBreak] + "Software";
```

The numeric range 1+ means “one or more number of times”.

Note, for repetitions with no high bound the search engine can choose the high bound by itself to prevent too long search, which is perceived as endless execution.

It’s allowed to set low bound to zero. It means that the pattern to be repeated is optional, i.e. can be missed. For example:

```nevod
#Company = "Nezaboodka" + [0-1 WordBreak + "Software"];
```

The pattern above matches if the text contains the word `Nezaboodka` optionally followed by the sequence of one word break and the word `Software`.

## Optionality

Repetition with numeric range 0-1 can be replaced by an equivalent optionality operator. The following pattern is equivalent to the previous one:

```nevod
#Company = "Nezaboodka" + ?(WordBreak + "Software");
```

Take attention to the parenthesis used to specify the precedence of operators. Without the parenthesis optionality operator `?` would refer to just WordBreak but not to the sequence that includes the word `Software`.

## Word Sequences

When searching for patterns in natural language texts, you usually want to ignore spaces, punctuation, and everything except words. The following pattern looks for the words `Nezaboodka`, `Software` and `LLC` with the optional word breaks between the words:

```nevod
#Company = "Nezaboodka" + [0+ WordBreak] + "Software" + [0+ WordBreak] + "LLC";
```

With the help of the operator `_` (denoted by underscore) the pattern above can be rewritten in a more compact and elegant form:

```nevod
#Company = "Nezaboodka" _ "Software" _ "LLC";
```

The underscore as would replaces the part `+ [0+ WordBreak] +` in the foregoing pattern. It facilitates creation of word sequences.

## Conjunctions

You may search for words and patterns that are simultaneously mentioned in text. This is done with the help of the operator `&`, which is named conjunction. Here is an example:

```nevod
#Product = "Nezaboodka" & "Nevod"
```

This pattern matches any text from the word `Nezaboodka` to the word `Nevod` regardless of the order of the two words.

Same as when using sequence, you may create conjunction of two, three, or more elements, but in contrast to sequence conjunction searches elements in any order and at any distance between them. For example:

```nevod
#Product = "Nezaboodka" & "Nevod" & "Service"
```

The above pattern matches any text where the three words `Nezaboodka`, `Nevod` and `Service` are mentioned, regardless of the order of and distance between the words.

## Spans

To search for text elements in a strict order with any span between them you may use the span operator `...` (denoted by ellipsis). The following example demonstrates usage of the span operator to search for formatted text in HTML documents:

```nevod
#HtmlTitle = "<title>" ... "</title>";
```

The pattern above matches with the title part of HTML document starting with the opening tag `<title>` and ending with the closing tag `</title>`.

In case of multiple overlapping variants of span match, the result is a match of a shorter length.

There is another form of the span operator (denoted by double periods) that allows specification of the span length in words. It may be used to solve the popular task of searching words that are at some distance from each other in text. The distance is calculated in Words, where the Word is the standard pattern. Let us look at the example:

```nevod
#HtmlTitle = "<title>" .. [1-20] .. "</title>";
```

The above pattern matches if there is at least one word and no more than 20 words in HTML title tag. The first double period, numeric range in square brackets, and the second double period denote the span in words operator.

It's evident that semantically the following two patterns are equivalent:

```nevod
#HtmlTitle-1 = "<title>" ... "</title>";
#HtmlTitle-2 = "<title>" .. [0+] .. "</title>";
```

Pattern names may contain hyphens as in the above example.

## Search Scope, Exceptions and Intersections

When using span or conjunction you may want to limit the text scope. Nevod allows doing it via `@inside` operator, which defines pattern that matches in the scope of another pattern. For example:

```nevod
#Company = "Nezaboodka" & "Nevod" @inside ("<title>" ... "</title>");
```

This pattern matches only when the words `Nezaboodka` and `Nevod` are inside HTML title text. The `@inside` operator has the lowest priority, so expression after the `@inside` keyword is the pattern that defines the scope for the expression before the `@inside` keyword.

Besides `@inside` there is `@outside` operator with the opposite semantics. The `@outside` operator allows searching for text with exception, for example:

```nevod
#Company = "Nezaboodka" @outside "I hate Nezaboodka";
```

In the above example the word `Nezaboodka` matches only when it is found outside of the phrase `I hate Nezaboodka`.

There is another one useful operator that allows matching text that contains some other text inside of it. This operator is named `@having`. The following example demonstrates usage of the `@having` operator to search for title tag in HTML text having the word `Nezaboodka` inside of it:

```nevod
#AboutNezaboodka = ("<title>" ... "</title>") @having "Nezaboodka";
```

The difference between `@having` and `@inside` is in that the result of `@having` is the outer text, and the result of `@inside` is the inner text.

## Standard Patterns

There are predefined standard patterns that can be used without declaration. They are divided into basic tokens and additional tokens built from the basic tokens.

There are the following basic tokens that are considered as standard patterns:

- `Word` — any word, continuous sequence of alphabetic letters (of any language) and digits.

- `Punct` — punctuation mark, includes any mark or sign used in writing to divide texts into phrases and sentences and make the meaning clear. The following characters are considered punctuation marks: `.`, `,`, `!`, `?`, `(`, `)`, `-`, `;`, `:`, `'`, `"`.

- `Symbol` — non-alphabetic sign, such as one of the following: `@`, `_`, `#`, `$`, `%`, `&`, `*`, `^`, `+`, `=`, `~`, `[`, `]`, `{`, `}`, `<`, `>`, `/`, `\`, `|`.

- `Space` — continuous sequence of spaces, tabs and other separator characters without glyph.

- `LineBreak` — line terminator, marks the end of text line.

- `Start` — artificial token that marks the start of text;

- `End` — artificial token that marks the end of text.

There are the following additional tokens derived from the basic tokens:

- `Alpha` — alphabetic `Word`, continuous sequence of just alphabetic letters.

- `Num` — numeric `Word`, continuous sequence of digits.

- `AlphaNum` — alpha-numeric `Word`, continuous sequence of alphabetic letters and digits, which starts from alphabetic letter.

- `NumAlpha` — alpha-numeric `Word`, continuous sequence of alphabetic letters and digits, which starts from digit.

- `Blank` — space or line terminator. Equivalent to a list of alternatives: `Blank = {Space, LineBreak}`

- `WordBreak` — any word separator such as space, punctuation mark, non-alphabetic symbol, or line terminator. Equivalent to a list of alternatives: `WordBreak = {Space, Punct, Symbol, LineBreak}`

- `Any` — any token except `Start` and `End`. Equivalent to a list of alternatives: `Any = {Word, WordBreak}`

## Parameterized Tokens

Standard patterns allow search based not only on token type, but on token length and letter case. Token parameters used for this are specified in parentheses after token type. For example, the following pattern demonstrates usage of parameterized `Num` token to search for phone numbers, consisting of two- and three-digit numbers separated by hyphens:

```nevod
#PhoneNumber = Num(2-3) + "-" + Num(2-3) + "-" + Num(2-3);
```
In the above example `Num(2-3)` means “numeric Word with length from 2 to 3 digits”.

The pattern in the next example can be used to detect abbreviations consisting from 3 to 5 letters:

```nevod
#Abbreviation = Alpha(3-5, Uppercase);
```

In the above example `Alpha(3-5, Uppercase)` means “alphabetic Word with length from 3 to 5 letters in uppercase”.

As you can see, some of the standard patterns are declared based on other patterns. You can do the same and declare your own patterns based on other patterns. In the upcoming version of Nevod you will even be able to create recursive patterns.

## Patterns Based on Patterns

You can feel the power of Nevod when creating patterns based on other patterns. For example, the following pattern is based on other patterns. It can be used to look for URL links in text:

```nevod
@pattern #Url = Schema + Domain + ?Port + ?Path + ?Query + ?Anchor;
```

The Url tag is defined based on six auxiliary patterns: Schema, Domain, Port, Path, Query, and Anchor, which in turn could be defined as follows:

```nevod
@pattern Schema = {'http', 'https' , 'ftp', 'mailto', 'file', 'data', 'irc'} + '://';
@pattern Domain = Word + [1+ '.' + Word + [0+ {Word, '_', '-'}]];
@pattern Port = ':' + Num;
@pattern Path = ?'/' + [0+ {Word, '/', '_', '+', '-', '%', '.'}];
@pattern Query = '?' + ?(Param + [0+ '&' + Param]);
@pattern Param = Identifier + '=' + Identifier;
@pattern Identifier = {Alpha, AlphaNum, '_'} + [0+ {Word, '_'}];
@pattern Anchor = '#' + Word;
```

The order of pattern definition is not important. As in the example above, patterns may reference other patterns defined later in text.

Some patterns that have auxiliary role may conflict in names with other patterns. To resolve name conflicts, you may define auxiliary patterns as nested patterns (sub-patterns) of other patterns. This is demonstrated by the following example:

```nevod
@pattern #Url = Schema + Domain + ?Port + ?Path + ?Query + ?Anchor
@where
{
  Schema = {'http', 'https' , 'ftp', 'mailto', 'file', 'data', 'irc'} + '://';
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
  Anchor = '#' + Word;
};
```

In the example above the `Url` pattern is defined via nested patterns `Schema`, `Domain`, `Port`, `Path`, `Query` and `Anchor`, where some of the nested patterns, such as `Query`, are in turn defined through the nested patterns.

The `@where` keyword followed by definitions in curly braces are used to define sub-patterns.

The nested pattern can be referenced in master pattern by either its name or qualified multipart name, which includes the name of the master pattern. For example, the pattern `Schema` referenced as `Schema` in the definition of the `Url` pattern, can be referenced as `Url.Pattern` outside of the `Url` pattern.

When resolving names, Nevod translator tries prepending the name of the pattern being compiled (`Url`) to the name of the referenced pattern (`Schema`) and looks for a pattern with qualified multipart name (`Url.Schema`) before looking for a pattern with the globally unique name (`Schema`).

Nested pattern can serve as master pattern for other nested patterns. In the example above the pattern `Param` is a nested pattern of the `Query` pattern, which in turn is a nested pattern of the `Url` pattern. The qualified multipart name of the `Param` pattern becomes `Url.Query.Param`.

## Pattern Fields and Text Extraction

Patterns may have fields used to extract text matches of selected parts of the searching text. Let us look at the example of the `Url` pattern:

```nevod
@pattern #Url = Schema + Domain + ?Port + ?Path + ?Query + ?Anchor;
```

This is the target pattern, so the text matching the entire `Url` pattern gets into result. In contrast, the `Domain`, `Path`, and `Query` patterns are non-target patterns, so their matches do not get into the result. However, user may want to know, what is the domain of the matched URL-link. Can we do it without declaring `Domain` pattern as a search target? The answer is — yes. This is what fields are used for.

Pattern may contain fields defined in parenthesis immediately after the pattern name. For example, let us use fields to extract domain, path, query, and anchor part of the URL link:

```nevod
@pattern #Url(domain, path, query, anchor) = Schema + domain:Domain + ?Port + ?path:Path + ?query:Query + ?anchor:Anchor;
```

In this example the `domain`, `path`, `query`, and `anchor` are fields that are added to a special dictionary of each `Url` pattern match. The value of the field `domain` gets the value of the text that matches `Domain` sub-pattern, and the values of the fields `path`, `query` and `anchor` get the values of the text that match respectively `Path`, `Query`, and `Anchor` sub-patterns. The operator `:` (colon) is used to extract matched text and set field value. If the optional sub-pattern is missed in text, the corresponding field gets the empty value.

It’s possible to extract field values from the fields of sub-patterns. In the following example the value of the field `anchor` of the `Url` pattern is extracted from the field named `value` of the `Anchor` pattern:

```nevod
@pattern #Url(domain, path, query, anchor) = Schema + domain:Domain + ?Port + ?path:Path + ?query:Query + ?Anchor(anchor:value)
@where
{
  Anchor(value) = '#' + value:Word;
};
```

The `Url.Anchor` pattern in the above example contains the `value` field, which is extracted from text and gets the value of a `Word` after the hash-tag sign. This value is assigned to the `anchor` field of the `Url` pattern as denoted by the expression `Anchor(anchor:value)`.

You can extract field value from text and then reference this field to search for the value. The following example shows how this feature could be used to create generic pattern for matching various HTML tags:

```nevod
@pattern #HtmlTag(~name) = ('<' + name:Word ... '>') ... ('</' + name + '>');
```

In the example above the `HtmlTag` pattern has field `name`. The tilde `~` sign before the field name means that this is internal field, so its value is not returned in search result. The value of the field is extracted from text as the name of the opening HTML tag and is used to match the corresponding closing HTML tag.

## Namespaces

You can organize patterns into taxonomies and solve the problem of name conflicts between patterns by using namespaces. Namespace is declared with the help of the `@namespace` keyword followed by multipart name of the namespace and the block of pattern definitions in curly braces, for example:

```nevod
@namespace Basic
{
  @pattern #GUID = Word(8) + [3 '-' + Word(4)] + '-' + Word(12);
  @pattern #GUID-in-Braces = '{' + GUID + '}';
}
```

In the example above the patterns `GUID` and `GUID-in-Braces` are defined in the `Basic` namespace. These patterns are used to search for GUID values in text.

The pattern defined in a namespace get the full multipart name composed from the namespace and the pattern name. In the example above the full pattern names are `Basic.GUID` and `Basic.GUID-in-Braces` respectively. The full names are used to reference patterns from patterns in other namespaces. To reference pattern from pattern in the same namespace, the short name can be used. For example, the `GUID-in-Braces` pattern references the `GUID` pattern by the short name.

## Pattern Packages

Related patterns can be saved into a separate file called pattern package. The recommended file extension is NP (abbreviation from Nevod Patterns). The name of the file is used to reference package from the dependent packages.

Below is an example of package:

```nevod
@namespace Basic
{
  @search @pattern GUID = Word(8) + [3 '-' + Word(4)] + '-' + Word(12);
}
```

The package above declares the pattern `GUID` as the search target. This package can be saved to file `"GUID.np"` and reused by other packages.

## Import of Packages

Below is an example of the second package that imports the foregoing package. The `@require` directive is used for import:

```nevod
@require "GUID.np";

@namespace Basic
{
  @search @pattern GUID-in-Braces = '{' + GUID + '}';
}
```

The second package imports the first package located in file `"GUID.np"`. The second package adds the `GUID-in-Braces` pattern defined through the reference to the `GUID` pattern.

The second package can be saved to file `"GUID-Extension.np"` and reused in turn by some third package, for example:

```nevod
@require "GUID.np";
@require "GUID-Extension.np";

@search Basic.GUID;
@search Basic.GUID-in-Braces;
```

The package above doesn't define patterns, it just declares `Basic.GUID` and `Basic.GUID-in-Braces` patterns as search targets.

## Search Targets

When search is performed, two main input arguments are provided: text and package. While text defines where to search, package defines the search targets, i.e. the target patterns. Matches of only target patterns are included in the results of search.

Note that patterns, defined as search targets in the imported packages, are not considered by default as search targets in the importing package. For example, searching for patterns of the package `"GUID-Extension.np"` means searching for just pattern `GUID-in-Braces`, but not for pattern `GUID` in the imported package `"GUID.np"`.

To search for patterns from the imported packages, declare them as search targets in the importing package, for example:

```nevod
@require "GUID.np";
@require "GUID-Extension.np";

@search Basic.GUID;
@search Basic.GUID-in-Braces;
```

In the example above the patterns `Basic.GUID` and `Basic.GUID-in-Braces` are declared as search targets.

The lists of search targets can be rather long, so it makes sense to use namespace with wildcard syntax to declare all imported target patterns of a given namespace as search targets. For example:

```nevod
@require "GUID.np";
@require "GUID-Extension.np";

@search Basic.*;
```

In the example above the declaration `@search Basic.*;` means that all target patterns in the namespace `Basic` become search targets. However, only target patterns from the explicitly imported packages are considered. If say the package `"GUID.np"` would import some other package with patterns in the `Basic` namespace, then these patterns wouldn't become search targets.

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

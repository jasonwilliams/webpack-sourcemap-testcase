# Reproduction Steps

This attempts to reproduce https://github.com/vercel/next.js/issues/15823

It uses a similar base config to https://github.com/vercel/next.js/blob/7ce000b328305737099549bc186ddd3a39a2528b/packages/next/build/webpack/config/blocks/base.ts

- Run npx webpack
- open up dist/main.js
- Inspect the base64 from the sourceMappingURL, it seems to have the correct path

Output (webpack v4.44.2):

```json
{
  "version": 3,
  "sources": ["webpack:///./src/pages/./src/pages/[id].js.js?30a9"],
  "names": [],
  "mappings": "AAAA",
  "file": "./src/pages/[id].js.js",
  "sourcesContent": ["console.log(\"test\");\n"],
  "sourceRoot": ""
}
```

Output (webpack v5.0.0-rc.0):

```json
{
  "version": 3,
  "sources": [
    "webpack://webpack-sourcemap-testcase/./src/pages/./src/pages/[id].js.js?30a9"
  ],
  "names": [],
  "mappings": "AAAA",
  "file": "./src/pages/[id].js.js",
  "sourcesContent": ["console.log(\"test\");\n"],
  "sourceRoot": ""
}
```

The output does have `[]` set, even though it has 2 .js extensions (not sure that's correct).

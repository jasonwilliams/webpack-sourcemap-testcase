# Reproduction Steps

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

# Aminda's prettier configuration

Or _opinionated configuration for opinionated code formatter_. Unless you are me
and expect to have the same behaviour as I do, you are best served by not using
this. If you wish to use this regardless,

## Usage

Feel free to replace `pnpm` and `pnpx` with your favourite package manager for
JS and it will likely work.

1. `corepack pnpm install -D -E @aminda/global-prettier-config`
1. Add `"prettier": "@aminda/global-prettier-config",` to the top level of your
   `package.json`, while maintaining valid syntax.
1. `corepack pnpx prettier --cache --ignore-unknown --write .`

```

Feel free to also take a look at `.pre-commit-config.yaml`.

## Versioning

- `date +%G.%V.MINOR` or in other words week based year, week, and the number of
  releases that week starting from 0.

However this is very small single purpose project, so I don't actually bother
with `git tag`ging and only do versioning as npm forces me to.

## See also

- [Prettier documentation on configuration, particularly the sharing configurations section](https://prettier.io/docs/en/configuration#sharing-configurations)
- [@azz/prettier-config](https://github.com/azz/prettier-config)
```

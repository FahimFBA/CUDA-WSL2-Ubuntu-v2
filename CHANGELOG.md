# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Security

- Fixed all known npm dependency vulnerabilities (16 total: 13 high, 3 moderate), including:
  - `react-router` / `react-router-dom` — open redirect and arbitrary constructor injection (GHSA-wrjc-x8rr-h8h6, GHSA-337j-9hxr-rhxg), upgraded 6.x → 7.18.2
  - `vite` / `esbuild` — dev server allowed any website to send requests and read responses (GHSA-67mh-4wv8-2f99), upgraded 5.x → 8.2.2
  - Transitive fixes via `npm audit fix` for `@remix-run/router`, `ajv`, `brace-expansion`, `flatted`, `js-yaml`, `lodash`, `minimatch`, `nanoid`, `picomatch`, `postcss`, `rollup`, `yaml`
- `npm audit` now reports 0 vulnerabilities.

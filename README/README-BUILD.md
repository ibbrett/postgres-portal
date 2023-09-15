# Next.js version 13 Build Notes

## Benchmark

### 9/15/2023 12:15pm

```bash
$ npm run build

> postgres-portal@0.1.0 build
> next build

- info Loaded env from /Users/suva/Desktop/Cabinet/Work/portal/react/projects/next/postgres-portal/.env.production
- warn You have enabled experimental feature (serverActions) in next.config.js.
- warn Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.

- info Creating an optimized production build
- info Compiled successfully

./app/sections/log/page.tsx
33:6  Warning: React Hook useEffect has a missing dependency: 'doFetch'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./components/Tables.tsx
28:6  Warning: React Hook useEffect has missing dependencies: 'fetchEvents', 'fetchLogs', 'fetchSections', and 'table'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./components/events/EventLists.tsx
118:6  Warning: React Hook useEffect has a missing dependency: 'doFetch'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./components/sections/SectionItems.tsx
28:6  Warning: React Hook useEffect has a missing dependency: 'fetchSections'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./components/sections/SectionsNav.tsx
28:6  Warning: React Hook useEffect has a missing dependency: 'fetchSections'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
- info Linting and checking validity of types
- warn Using server actions on a page currently disables static generation for that page
- info Collecting page data
[    ] - info Generating static pages (0/23)- warn Entire page /sections/log deopted into client-side rendering. https://nextjs.org/docs/messages/deopted-into-client-rendering /sections/log
[=   ] - info Generating static pages (12/23)- warn Entire page /sections/event deopted into client-side rendering. https://nextjs.org/docs/messages/deopted-into-client-rendering /sections/event
- info Generating static pages (23/23)
- info Finalizing page optimization

Route (app)                                Size     First Load JS
┌ ○ /                                      1.24 kB        88.3 kB
├ ○ /_not-found                            0 B                0 B
├ λ /api/create-event                      0 B                0 B
├ λ /api/create-section                    0 B                0 B
├ λ /api/delete-event                      0 B                0 B
├ λ /api/delete-section                    0 B                0 B
├ λ /api/get-event                         0 B                0 B
├ λ /api/get-events                        0 B                0 B
├ ○ /api/get-logs                          0 B                0 B
├ λ /api/get-section                       0 B                0 B
├ ○ /api/get-sections                      0 B                0 B
├ λ /api/toggle-event-complete             0 B                0 B
├ λ /api/update-event                      0 B                0 B
├ λ /api/update-section                    0 B                0 B
├ ○ /db-tables                             1.2 kB         88.3 kB
├ ○ /favicon.ico                           0 B                0 B
├ ○ /log                                   183 B          87.3 kB
├ ○ /sections                              3.39 kB        91.5 kB
├ ○ /sections/blog                         183 B          87.3 kB
├ λ /sections/edit                         411 B          87.5 kB
├ ○ /sections/event                        4.59 kB        92.7 kB
├ λ /sections/event/edit                   892 B           111 kB
├ λ /sections/event/new                    892 B           111 kB
├ ○ /sections/log                          3.22 kB        91.3 kB
├ λ /sections/log/edit                     892 B           111 kB
├ λ /sections/log/new                      892 B           111 kB
├ λ /sections/new                          412 B          87.5 kB
└ λ /settings                              183 B          87.3 kB
+ First Load JS shared by all              81.3 kB
  ├ chunks/114-037a86007aa03b88.js         26.6 kB
  ├ chunks/bf6a786c-256359ac86a4f9a6.js    52.7 kB
  ├ chunks/main-app-e3ab0f2a7b66a796.js    219 B
  └ chunks/webpack-be5f31a54765d4b8.js     1.79 kB

Route (pages)                              Size     First Load JS
+ First Load JS shared by all              76.5 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-ee3e8f78b57766d4.js        29.5 kB
  ├ chunks/pages/_app-52924524f99094ab.js  195 B
  └ chunks/webpack-be5f31a54765d4b8.js     1.79 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```

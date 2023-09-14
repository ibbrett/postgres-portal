# Next.js version 13 Crash Course

## Tutorial #1 - Introduction & New Features

- New `server components`
- New app directory (supports server components out of the box)
- Streaming and Suspense - serve up "loading" portions of the page
- Route Handlers
- npm create-next-all@latest
- npm run dev

## Tutorial #2 - SSR & Server Components

- Server-side rendering: good for SEO, better performance in the browser, not interactive
- Client components rendered on the server, hyrated in the browser to add the interactivity
- Use server components wherever possible ... then `sprinkle in` client components when you need interactive UI
- Use client components: interactivity/events, useState/useReducer/useEffect, browser-only APIs, custom hooks that depend on these things

## Tutorial #3 - Pages & Routes

- The base route of the site, the home page is found in file app/page.tsx
- To create a new route, like http://mysite.com/news simply create the folder app/news and add a new file page.tsx

## Tutorial #4 - Layouts & Links

- layout.tsx wraps every page, imports global.css, imports fonts, defines meta daat which will be included on all pages
- Use Link component to add links
- Add nav component tot he layout file

## Tutorial #5 - Styles, Fonts & Images

- Inter and fonts imported from next/fonts/google
- Tailwind
- @apply tailwind classes to certain tags/elements in globals.css (body, nav, h1, button, etc ...)
- \*come back to this to update globals.css, apply global tag styles, like styling a form
- &lt;Link>&lt;Button/>&lt;Link/>
- &lt;Image> component - adding logo to presentation - interesting attributes: quality={100}, placeholder='blur'

## Tutorial #6 - Fetching & Revalidating Data

- Foo

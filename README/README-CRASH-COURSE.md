# Next.js version 13 Crash Course

## Tutorial #1 - Introduction & New Features

- New `server components`
- New app directory (supports server components out of the box)
- Streaming and Suspense - serve up "loading" portions of the page
- Route Handlers
- npm create-next-all@latest
- npm run dev

## Tutorial #2

- Server-side rendering: good for SEO, better performance in the browser, not interactive
- Client components rendered on the server, hyrated in the browser to add the interactivity
- Use server components wherever possible ... then `sprinkle in` client components when you need interactive UI
- Use client components: interactivity/events, useState/useReducer/useEffect, browser-only APIs, custom hooks that depend on these things

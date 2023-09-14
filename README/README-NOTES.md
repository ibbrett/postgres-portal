# Next.js version 13 Notes

## New Features

### Server Components

In previous versions all components were essentially `client components`  
This meant the components were `hydrated` at the browser  
Hydration is the process of using client-side JavaScript to add application state and interactivity to server-rendered HTML

- Server components don't need to be hydrated in the browser. They are fully rendered on the server
- This lowers the overall JavaScript bundle size ... which increases performance

### Client Components

- Hydrated in the browser
- For any components that use `state`, `effects`, `router`, `events` you will be using client components

## Crash Course

### Tutorial #1

- New `server components`
- New app directory (supports server components out of the box)
- Streaming and Suspense - serve up "loading" portions of the page
- Route Handlers
- npm create-next-all@latest
- npm run dev

### Tutorial #2

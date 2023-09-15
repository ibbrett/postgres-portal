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

- async components
- fetch async functions
- map(), key={ticket.id}
- dynamic &lt;div className={`pill ${ticket.priority}`} />
- by default nextjs: dedupes the data and caches the data
- "revalidate" the cached data on a timed interval to refetch the data
- revalidate can be set to 0 to never cache the data

## Tutorial #7 - Dynamic Segments (Params)

- route parameters - create subfolder with square brackets - tickets/[id]

```js
export default function TicketDetails({params}) {
  const id = params.id
  return <div>TicketDetails : {id}</div>
}
```

## Tutorial #8 - Static Rendering

- pre-render. pre-generate static pages (which will improve performance) on the existing items

```js
export async function generateStaticParams() {
  // return an array of objects
  const res = await fetch('http://localhost:3000/tickets')
  const tickets = await res.json()
  return tickets.map(ticket => ({
    id: ticket.id,
  }))
}
```

- create a 404 if item does not exist

```js
export const dynamicParams = false
```

- alt, create a 404 if item does not exist

```js
export const dynamicParams = true

...

async function getTicket(id){
  const res = await fetch('http://localhost:3000/tickets' + id, {
    next: {
      revalidate: 60
    }
  })

  if(!res.ok){
    notFound()
  }
}

```

## Tutorial #9 - Custom 404 Page

Pages can be scoped to different parts of the app

- not-found.tsx

```js
import Link from 'next/link'
export default function NotFound() {
  return (
    &lt;main className="text-center">
      &lt;h1 className="text-3xl">Page requested not found&lt;/h1>
      &lt;Link href="/">
        &lt;button>Home Page</button>
      &lt;/Link>
    &lt;/main>
  )
}
```

## Tutorial #10 - Loading UI & Suspense

- create a loading.js file which will display a static loading screen

```js
export defaultfunction Loading() {
  return (
    &lt;main className="text-center">
      &lt;h2 className="text-primary">Loading&lt;/h2>
      &lt;p>Hopefully not for too long :)&lt;/p>
    &lt;/main>
  )
}
```

```js
// simulated delay
await new Promise(resolve => setTimeout(resolve, 3000))
```

```js
&lt;Suspense fallback={&lt;Loading />}>
  &lt;TicketList />
&lt;/Suspense>
```

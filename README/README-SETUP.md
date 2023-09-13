# Setup

## Prep

```bash
$ nvm use 20.0.0
```

## Create Project

```bash
$ npx create-next-app@latest
```

### initial package.json

```json
"dependencies": {
	"@types/node": "20.5.6",
	"@types/react": "18.2.21",
	"@types/react-dom": "18.2.7",
	"eslint": "8.48.0",
	"eslint-config-next": "13.4.19",
	"next": "13.4.19",
	"react": "18.2.0",
	"react-dom": "18.2.0",
	"typescript": "5.2.2"
},
  "devDependencies": {
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.29",
    "tailwindcss": "^3.3.3"
  }
```

## Create GitHub repository

```bash
$ git remote add origin git@github.com:ibbrett/postgres-portal.git
$ git branch -M master
$ git push -u origin master
```

## Add GitHub repository to Vercel

- navigate to [https://vercel.com/new](https://vercel.com/new) to add repo
- click "Import" for postgres-portal repo
- click "Deploy"
- navigate to Vercel dashboard to see repo

## Add PostgreSQL

```bash
$ npm i @vercel/postgres
```

- navigate to [Vercel deployments](https://vercel.com/ibbrett/postgres-portal/deployments)
- click "Storage"
- click "Create" for new psql database
- select region: I chose Portland (keep in mind if app is run in different region you may experience latency)
- configure postgres portal: I selected all three environments: Production, Preview, Development
- copy .env values: I copied these values to a file (.env.development.local) I created
- start creating schema

## Run app locally

```bash
$ nvm use 20.0.0
$ npm run dev
```

## Additional

- added prettier

```bash
$ npm i --save-dev prettier
```

- added datetime picker and icons

```bash
npm i react-datetime-picker --save
npm i react-icons --save
```

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
git remote add origin git@github.com:ibbrett/postgres-portal.git
git branch -M master
git push -u origin master
```

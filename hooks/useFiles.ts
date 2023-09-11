import fs from 'fs'
//import path from 'path'

/* 
notes:
# config
# APP_TITLE="Postgres Portal"

# switched to NEXT_PUBLIC b/c APP did not work outside component, did not work in hook
# APP_ORIGIN="http://localhost:3000"

// fs.copyFileSync(path.join(process.cwd(), "file.txt")
// overwrite .env
*/

const postgresValues = `
POSTGRES_URL="postgres://default:k4pdrODgqA0Q@ep-wispy-cloud-74814380-pooler.us-west-2.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:k4pdrODgqA0Q@ep-wispy-cloud-74814380-pooler.us-west-2.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:k4pdrODgqA0Q@ep-wispy-cloud-74814380.us-west-2.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="ep-wispy-cloud-74814380-pooler.us-west-2.postgres.vercel-storage.com"
POSTGRES_PASSWORD="k4pdrODgqA0Q"
POSTGRES_DATABASE="verceldb"`

const useFiles = () => {
  // const writeToTest = async ( req: any, res: any ) => {
  const updateEnvFiles = async (data: FormData) => {
    // save backup of .env
    const timestamp = new Date().getTime()
    const title = data.get('title')?.valueOf()
    let fname, content

    fname = '.env.development.local'
    content = `
${postgresValues}
NEXT_PUBLIC_ORIGIN="http://localhost:3000"
NEXT_PUBLIC_APP_TITLE="${title}"`

    fs.copyFileSync(fname, `${fname}.${timestamp}`)
    fs.writeFileSync(fname, content)

    fname = '.env.production'
    content = `
${postgresValues}
NEXT_PUBLIC_ORIGIN="https://postgres-portal.vercel.app"
NEXT_PUBLIC_APP_TITLE="${title}"`

    fs.copyFileSync(fname, `${fname}.${timestamp}`)
    fs.writeFileSync(fname, content)
  }

  return {updateEnvFiles}
}

export {useFiles}

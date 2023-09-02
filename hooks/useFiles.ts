import fs from 'fs'
import path from 'path'

const useFiles = () => {
  // const writeToTest = async ( req: any, res: any ) => {
  const writeToTest = async (data: FormData) => {
    // save backup of .env
    const timestamp = new Date().getTime()
    const fname = '.env.development.local' // '.env'
    fs.copyFileSync(fname, `${fname}.${timestamp}`)
    // fs.copyFileSync(path.join(process.cwd(), "file.txt")

    // overwrite .env
    const title = data.get('title')?.valueOf()
    const content = `
POSTGRES_URL="postgres://default:k4pdrODgqA0Q@ep-wispy-cloud-74814380-pooler.us-west-2.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:k4pdrODgqA0Q@ep-wispy-cloud-74814380-pooler.us-west-2.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:k4pdrODgqA0Q@ep-wispy-cloud-74814380.us-west-2.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="ep-wispy-cloud-74814380-pooler.us-west-2.postgres.vercel-storage.com"
POSTGRES_PASSWORD="k4pdrODgqA0Q"
POSTGRES_DATABASE="verceldb"

# config
APP_TITLE="${title}"`

    console.log(title)
    //fs.writeFileSync('./example.json', JSON.stringify(req.body));
    fs.writeFileSync(fname, content)

    //return res.status(200).json({});
  }

  return {writeToTest}
}

export {useFiles}

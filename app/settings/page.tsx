import Link from 'next/link'
// import { prisma } from "../db";
// import { redirect } from "next/navigation";
// import { DateTime } from "@/components/DateTime";
import {useFiles} from '@/hooks/useFiles'
import {FaArrowLeft} from 'react-icons/fa'
import {linkStyle, formFieldStyle, headerStyle, h1Style} from '../../utils/styles'

async function CreateEvent(data: FormData) {
  'use server'

  // const title = data.get("title")?.valueOf();
  const {writeToTest} = useFiles()

  writeToTest(data)

  /*
  const title = data.get("title")?.valueOf();
  if(typeof title !== "string" || title.length === 0 ){
    throw new Error("Invalid Title")
  }*/
}

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Setting</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>
      <form action={CreateEvent} className="flex gap-2 flex-col">
        <span>[.env.development.local] App Title</span>
        <input
          type="text"
          name="title"
          defaultValue={process.env.APP_TITLE}
          className={formFieldStyle}
        />
        <div className="flex gap-1 justify-end">
          <button type="submit" className={linkStyle}>
            Save Updates
          </button>
        </div>
      </form>
    </>
  )
}

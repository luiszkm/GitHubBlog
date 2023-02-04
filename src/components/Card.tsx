import { DateDiferenceInDays } from "../utils/DateDiferenceInDays"
import ReactMarkdown from 'react-markdown'

interface CardPRops {
  title: string
  body: string
  created_at: string
  updated_at?: string | null
}

export function Card({ title, body, created_at, updated_at }: CardPRops) {

  const postPreview = body.substring(0, 220)


  return (
    <div className="p-8 min-h-[260px] w-full flex flex-col gap-5 items-center cursor-pointer bg-base-post rounded-xl  hover:border hover:border-base-label">
      <div className="flex w-full items-center justify-between">
        <h3 className="font-bold text-xl text-base-title">{title}</h3>
        <time className="text-base-span">
          {
            `Hà ${DateDiferenceInDays(created_at)} dias`
          }
        </time>
      </div>

      <ReactMarkdown className="text-base-text text-left">
        {postPreview}
      </ReactMarkdown>
    </div>
  )
}
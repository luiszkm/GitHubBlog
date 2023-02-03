

interface CardPRops {
  title: string
  body: string
  created_at: any
}

export function Card() {


  return (
    <div className="p-8 min-h-[260px] w-full flex flex-col gap-5 items-center cursor-pointer bg-base-post rounded-xl hover:border hover:border-base-label">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl text-base-title">JavaScript data types and data structures</h3>
        <time className="text-base-span">há 1 dia</time>
      </div>

      <p className="text-base-text text-left">
        Programming languages all have built-in data structures, but these often differ from one language to another.
        This article attempts to list the built-in data structures available in
      </p>
    </div>
  )
}
import { useState } from 'react'

export default function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className="py-2">
      <button className="flex w-full justify-between">
        <span>Title</span>
        <span>+</span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-900 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>Answer</div>
      </div>
    </div>
  )
}

import { useState } from 'react'

interface AccordionProps {
  title: string
  answer: string
}

export default function Accordion({ title, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full justify-between"
      >
        <span>{title}</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-900 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  )
}

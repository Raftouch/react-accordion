import Accordion from './Accordion'

export default function FAQ() {
  return (
    <div className="p-5 bg-gray-200 rounded-lg">
      <Accordion title="Do you prefer cats or dogs?" answer="I prefer dogs" />
      <Accordion title="Do you prefer android or iOS?" answer="I prefer iOS" />
      <Accordion title="Do you prefer React or Vue?" answer="I prefer React" />
    </div>
  )
}

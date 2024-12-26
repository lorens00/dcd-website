import { faqs } from "../data/faqs"; 
import Accordion from "../components/Accordion";

const FAQ = () => {
  return (
    <div className="space-y-4 lg:max-w-6xl mx-auto px-1 md:pt-8">
      <h2 className="font-allura text-4xl md:text-6xl font-extrabold text-center mb-3">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;

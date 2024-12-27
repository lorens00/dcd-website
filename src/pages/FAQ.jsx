import { faqs } from "../data/faqs"; 
import Accordion from "../components/Accordion";
import Header2 from "../components/Header2";

const FAQ = () => {
  return (
    <>
      <div className="mb-24 pb-10">
        <Header2 />
      </div>
      <div className="space-y-4 lg:max-w-6xl mx-auto px-1 md:pt-8">
      <h2 className="font-allura text-4xl md:text-6xl font-extrabold text-center mb-3">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    </>
    
  );
};

export default FAQ;

import { faqs } from "../data/faqs"; 
import Accordion from "../components/Accordion";
import Header2 from "../components/Header2";

const FAQ = () => {
  return (
    <>
      {/* Header Section */}
      <header className="mb-24 pb-10">
        <Header2 />
      </header>

      {/* FAQ Section */}
      <section className="lg:max-w-6xl mx-auto px-4 md:pt-8">
        <h2 className="font-allura text-4xl md:text-6xl font-extrabold text-center mb-6">
          Frequently Asked Questions
        </h2>

        {/* FAQs List */}
        <div className="-space-y-4 lg:space-y-5 mb-20">
          {faqs.map((faq, index) => (
            <div key={index} className="pb-3">
              <Accordion 
                question={faq.question} 
                answer={faq.answer} 
                aria-label={`FAQ ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </section>

      {/* Extra Bottom Space for Small Screens */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default FAQ;

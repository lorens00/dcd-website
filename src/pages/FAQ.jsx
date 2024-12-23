import Accordion from "../components/Accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the delivery time for pizzas?",
      answer:
        "Our pizzas are delivered within 30 to 45 minutes, depending on your location. We aim to deliver hot and fresh pizzas as quickly as possible.",
    },
    {
      question: "Do you offer any discounts or deals on pizza?",
      answer:
        "Yes, we have regular promotions and discounts! Keep an eye on our website and follow our social media accounts for updates on special offers.",
    },
    {
      question: "Can I order pizza for pickup instead of delivery?",
      answer:
        "Absolutely! You can place an order for pickup and grab your pizza directly from our shop. Choose the 'pickup' option when placing your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including Bank Transfer, Gcash, and cash on delivery. ",
    },
    {
      question: "Are there franchise opportunities available?",
      answer: "Yes, we offer franchise opportunities! Please contact our franchising team for more details and assistance."
    }
  ];

  return (
    <div className=" space-y-4 lg:max-w-6xl mx-auto px-1">
      <h2 className="text-xl md:text-3xl text-center font-extrabold text-gray-800 mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;

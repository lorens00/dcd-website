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
        "Yes, we have regular promotions and discounts! Keep an eye on our website for special offers or sign up for our newsletter for exclusive deals.",
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
  ];

  return (
    <div className="font-[sans-serif] space-y-4 max-w-4xl mx-auto">
      <h2 className="text-3xl text-center font-extrabold text-gray-800 mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;

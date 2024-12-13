import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion rounded-lg hover:bg-red-50 transition-all">
      <button
        type="button"
        className="toggle-button w-full text-base text-left py-5 px-6 text-gray-800 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-4">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`arrow transition-all w-3 fill-current ml-auto shrink-0 ${
            isOpen ? "rotate-180" : "-rotate-90"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`content px-6 ${isOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-300`}
      >
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;

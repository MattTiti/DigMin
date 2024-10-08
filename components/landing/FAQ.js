"use client";

import { useRef, useState } from "react";

const faqList = [
  {
    question: "What do I get exactly?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        All the features listed above and any features added in the future.
      </div>
    ),
  },
  {
    question: "Can I upgrade my plan?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, you can upgrade your plan at any time. Just request by sending an{" "}
        <a href="mailto:matt@mg.goodmornin.app" className="underline">
          email
        </a>
        !
      </div>
    ),
  },
  {
    question: "Can I use GoodMornin with a non-US phone number?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, as our GoodMornin's user base grows, the priority will be to own
        local numbers in every country with a user. This keeps the costs down
        for everyone. The goal is to have local numbers obtained within 24 hours
        of a user request. If you'd like to request a local number for your
        country, please send an{" "}
        <a href="mailto:matt@mg.goodmornin.app" className="underline">
          email
        </a>
        !
      </div>
    ),
  },
  {
    question: "How do I customize my texts?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You can customize your texts in the{" "}
        <a href="https://goodmornin.app/custom" className="underline">
          customization dashboard
        </a>
        .
      </div>
    ),
  },
  {
    question: "Will there be more customizations in the future?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! The plan is to add more customization options every month. Your
        feedback is important, so if you have any customization suggestions,
        please send an{" "}
        <a href="mailto:matt@mg.goodmornin.app" className="underline">
          email
        </a>
        !
      </div>
    ),
  },
  {
    question: "Is it possible to occassionally disable texts?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! In the customization dashboard you are able to disable texting for
        as long as you want.
      </div>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <p>
        Yes! You can request a refund within 7 days of your purchase. Reach out
        by email.
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Send me an{" "}
        <a href="mailto:matt@mg.goodmornin.app" className="underline">
          email
        </a>
        !
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-neutral-500 font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span className={`flex-1  ${isOpen ? "text-neutral-700" : ""}`}>
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-yellow-50" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="sm:text-4xl text-3xl font-extrabold text-neutral-700 mt-2">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;

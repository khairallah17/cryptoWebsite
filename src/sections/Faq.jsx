import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

import faq from '../../src/assets/faq.png';

const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function Faq() {
  return (
    <section className="rounded-3xl bg-[#0b010157] bg-logos mx-6">
      <div className="grid md:grid-cols-2 py-32 container mx-auto">
        <div className="flex justify-center">
          <div className="md:px-0 px-3">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
              <FaqItem open={true} title="Why should I choose Zinopsa?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="How secure is Zinopsa?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="Do I have to buy a whole Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="How do I actually buy Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
            </div>
          </div>
        </div>
        <div className="mb-4">
            <img src={faq} alt="FAQ" />
        </div>
      </div>
    </section>
  );
}
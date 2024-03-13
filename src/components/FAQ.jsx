import React, { useState } from 'react';
import { QuestionsData } from '../data';

const FAQ = () => {
    const [openItems, setOpenItems] = useState(new Array(QuestionsData.length).fill(false));

    const toggleAccordion = (index) => {
        setOpenItems(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section>
            <p className="text-white font-bold text-3xl pb-10">FAQ</p>
            <div className="divide-y divide-zinc-800">
                {QuestionsData.map(({ question, answer }, index) => (
                    <div className={`accordion-item text-white duration-300 rounded-lg ${openItems[index] ? 'bg-[#131313]' : 'hover:bg-[#131313]'}`} key={index}>
                        <div className="flex justify-between px-4 py-5 text-lg font-medium cursor-pointer" onClick={() => toggleAccordion(index)}>
                            {question}
                            <svg xmlns="http://www.w3.org/2000/svg" className="border border-white/10 rounded-full p-1" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {!openItems[index] ? <path className="line" d="M12 5l0 14" /> : <path className="line" d="M5 12h14" />}
                                {!openItems[index] ? <path className="plus" d="M12 5v14M5 12h14" /> : null}
                            </svg>
                        </div>
                        <div className={openItems[index] ? "p-2 toggle" : "p-2 hidden toggle"}>
                            {answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;

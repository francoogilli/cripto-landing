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
                {QuestionsData.map(({ question, answer }, index) => (
                    <div className={`accordion-item text-white duration-300 rounded-2xl mt-4 bg-[#ffffff09] ${openItems[index] ? 'bg-white/5' : 'hover:bg-[#ffffff09]'}`} key={index}>
                        <div className="flex justify-between items-center px-4 py-5 font-semibold cursor-pointer" onClick={() => toggleAccordion(index)}>
                            <div className='flex justify-center items-center gap-x-4'>
                                <p className="bg-[#7F35FF] flex justify-center font-bold md:text-sm text-xs items-center text-white size-5 md:size-6 px-2 rounded-md">{index + 1}</p>
                                <p className='text-sm md:text-lg'>{question}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`  rounded-full p-1 size-5 md:size-6 ${openItems[index] ? 'bg-zinc-800' : 'bg-[#131313]'}`} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {!openItems[index] ? <path className="line" d="M12 5l0 14" /> : <path className="line" d="M5 12h14" />}
                                {!openItems[index] ? <path className="plus" d="M12 5v14M5 12h14" /> : null}
                            </svg>
                        </div>
                        <div className={openItems[index] ? "px-5 pb-3 text-sm md:text-base toggle" : "p-2 hidden toggle"}>
                            {answer}
                        </div>
                    </div>
                ))}
        </section>
    );
};

export default FAQ;

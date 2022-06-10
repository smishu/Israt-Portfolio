import React from 'react';
import TestiSlider from './TestiSlider';

const Testimonials = () => {
    return (
        <section id='testimonials' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='mb-5 section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
                        What other people say
                    </h2>

                </div>
                <TestiSlider></TestiSlider>
            </div>
        </section>
    );
};

export default Testimonials;
import React from 'react';
import Image from '../assets/img/IMG_20220125_121158.jpg';
const About = () => {
    return (
        <section className='section bg-secondary' id='about'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img
                        className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={Image}
                        alt=''
                    />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block mt-10'>
                                Hay!!
                            </h2>
                            <p className='mb-4 text-accent'>
                                I am Israt Jahan
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                            I am currently a student In addition to my studies, I have completed a complete junior web development course from programming-hero.. <br />
                                <br />
                                My dream is to be in a good position as a good developer and do a good job with it.
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
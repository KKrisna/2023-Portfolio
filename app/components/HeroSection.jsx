"use client";

{/*This is the home page named Hero Section*/}
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section> 
        <div className="grid grid-cols-1 sm:grid-cols-12">     
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Hello, I'm{" "}</span>
                    <br></br>
                    {/*animation to change titles*/}
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Krisna Kieng',
                            1000, // wait 1s before replacing
                            'a Web Developer',
                            1000,
                            'a Mobile Developer',
                            1000,
                            'an Automotive Enthusiast',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>

                {/*mission statement*/}
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">As a recent computer science graduate, I'm enthusiastic about applying my technical growth as a developer. I have a strong passion for both front-end and back-end technologies and I am dedicated to contributing to a 
                    company's success, whether as a collaborative team member or an independent problem solver. My primary goal is to produce my best work while also building strong relationships with colleagues and clients to advance the company.</p>
                
                {/*Hiring Buttons*/}
                <div>
                    <button className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-purple-500 via-blue-600 to-green-500 hover:bg-slate-200 text-white">Hire Me</button>
                    <button className="px-1 py-1 w-full rounded-full sm:w-fit bg-gradient-to-br from-green-500 via-blue-600 to-purple-500 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                    </button>
                </div>
            </div>

            {/*Photo of myself inside of a circle*/}
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[275px] h-[275px] lg:w-[305px] lg:h-[305px] relative">
                    <Image
                    src="./images/hero_photo.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -transalte-y-1/2 top-1/5 left-1/2"
                    width={150}
                    height={150}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
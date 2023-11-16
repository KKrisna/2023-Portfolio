"use client";

import React, { useTransition, useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
    const [tab, stateTab] = useState("Skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/portrait.jpeg" width={400} height={400} />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">My name is Krisna Kieng and I recently just graduated from CSULB majoring in computer science. I am currently
                        open to work searching for roles as a software developer or as a support engineer. I live in Long Beach  
                        and I am open to commuting or working remotely. As a past time, I am a huge car enthusiast 
                        and some of my favorite things to do are modify cars and attend car shows. As a result of this, I would say I am a 
                        very detail-oriented person because car shows are all showing off the car you built and how much attention to detail 
                        you incorporated to stand out from the rest of the crowd. Additionally, I picked up photography because it goes 
                        hand-in-hand with being a car enthusiast since photos create memories of the different stages of my car at different locations.
                        This also builds on focusing on details because so much thought goes into taking amazing photos and showcasing certains details. 
                    </p>

                    <div className="flex flex-row mt-8">
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-green-500">Skills</span>
                        <span>Education</span>
                        <span>Hobbies</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
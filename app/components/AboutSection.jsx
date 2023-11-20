"use client";

{/*This is the About Me section*/}

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

//array that contains the content of each tab
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>Kotlin</li>
                <li>Python</li>
                <li>C++</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>Android Studio</li>              
            </ul>
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>California State University, Long Beach</li>
            </ul>
        )
    },

    {
        title: "Hobbies",
        id: "hobbies",
        content: (
            <ul className="list-disc pl-2">
                <li>Wrench on my Personal Cars</li>
                <li>Attend Car Shows</li>
                <li>Photography</li>
                <li>Play Computer Games</li>
                <li>Visit Theme Parks</li>
            </ul>
        )
    }
]


const AboutSection = () => {

    //sets tab to skills section first
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    //keeps track of current clicked on tab
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

                {/*Portrait of myself*/}
                <Image src="./images/portrait.jpeg" width={400} height={400} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    {/*About Me Title*/}
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

                    {/*Introduction paragraph*/}
                    <p className="text-base lg:text-lg">My name is Krisna Kieng and I recently just graduated from CSULB majoring in computer science. I am currently
                        open to work searching for roles as a software developer or as a support engineer. I live in Long Beach  
                        and I am open to commuting or working remotely. As a past time, I am a huge car enthusiast 
                        and some of my favorite things to do are modify cars and attend car shows. As a result of this, I would say I am a 
                        very detail-oriented person because car shows are all showing off the car you built and how much attention to detail 
                        you incorporated to stand out from the rest of the crowd. Additionally, I picked up photography because it goes 
                        hand-in-hand with being a car enthusiast since photos create memories of the different stages of my car at different locations.
                        This also builds on focusing on details because so much thought goes into taking amazing photos and showcasing certains details. 
                    </p>

                    {/*The different tab options*/}
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>Hobbies</TabButton>
                    </div>

                    {/*Finds the content to the matching tab*/}
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
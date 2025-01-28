
import Image from 'next/image';

import Header from "@/components/shareby/header";
import { Label } from "@/components/ui/label";
import { Globe, SendHorizonalIcon } from "lucide-react";
import image1 from '@/public/images/image1.png'
import image2 from '@/public/images/image2.png'
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import AngularImg from '@/public/images/angularjs.png'
import wordPressImg from '@/public/images/wordpress.png'
import AdvertismentImg from '@/public/images/ads1.png'
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from 'react';



// leftbar side components
export const DateAndTime = () => {
    return (
        <>
            <div className="w-64 h-64 bg-gray-200 rounded shadow-md">
                <Label>19 : 05 Sun, 5 January 2025</Label>
            </div>

        </>
    )
}

export const CompleteYourProfile = () => {
    return (
        <>
            <div className="w-64 mx-5 p-4 bg-white shadow-md rounded-lg border border-gray-200">
                {/* Header */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Complete Your Profile
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                    Your Profile is missing followings!
                </p>

                {/* Progress Bar */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24">

                    </div>
                </div>

                {/* Missing Steps */}
                <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <button className="text-blue-500 text-xl">+</button>
                            <span className="text-sm text-gray-700">Upload Your Picture</span>
                        </div>
                        <span className="text-sm text-gray-500">10%</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <button className="text-blue-500 text-xl">+</button>
                            <span className="text-sm text-gray-700">Your University?</span>
                        </div>
                        <span className="text-sm text-gray-500">20%</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <button className="text-blue-500 text-xl">+</button>
                            <span className="text-sm text-gray-700">Add Payment Method</span>
                        </div>
                        <span className="text-sm text-gray-500">20%</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export const Advertisment = () => {
    return (
        <>
            <div className="w-64 h-64 mx-5 bg-gray-200 rounded shadow-md">
                <Image src={AdvertismentImg} alt="ads" />
            </div>
        </>
    )
}

export const PopularCourses = () => {
    return (
        <>
            <div className="w-64 h-auto p-4 bg-gray-200 rounded shadow-md">
                <Label className="text-base font-semibold"> Popular Courses</Label>
                <Image className="rounded-[5px]" src={AngularImg} alt="" />
                <Image className="rounded-[5px]" src={AngularImg} alt="" />
                <Label className="text-sm font-semibold my-3">Node JS Online video course</Label>
                <div className="flex justify-end items-center">
                    <Label className=" text-blue-500 text-sm font-bold">$234</Label>
                </div>
            </div>

            <div className="">
                <Image className="rounded-[5px]" src={wordPressImg} alt="" />
                <Label className="text-sm font-semibold my-3">Wordpress Online video course</Label>
                <div className="flex justify-end items-center">
                    <Label className=" text-blue-500 text-sm font-bold">$124</Label>
                </div>
            </div>

        </>
    )
}

export const RecentBlogs = () => {
    return (
        <>
            <div className="w-64 p-2 flex flex-col bg-gray-300/50 rounded">
                <div className="flex justify-between items-center  mb-4">
                    <Label>Recent Blogs</Label>
                    <Label className="text-xs font-semibold text-blue-500">View All</Label>
                </div>

                <div className="flex flex-col gap-3">
                    {/* blog 1  */}
                    <div className="flex gap-2 items-center">
                        <Image className="w-20 rounded-[5px]" src={wordPressImg} alt="" />
                        <div className="flex flex-col gap-1">
                            <Label className="text-xs font-semibold line-clamp-2 leading-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, explicabo.</Label>
                            <Label className="text-xs font-light">2 day ago</Label>
                        </div>
                    </div>

                    {/* blog 2  */}
                    <div className="flex gap-2 items-center">
                        <Image className="w-20 rounded-[5px]" src={AngularImg} alt="" />
                        <div className="flex flex-col gap-1">
                            <Label className="text-xs font-semibold line-clamp-2 leading-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, explicabo.</Label>
                            <Label className="text-xs font-light">15 day ago</Label>
                        </div>
                    </div>

                    {/* blog 3  */}
                    <div className="flex gap-2 items-center">
                        <Image className="w-20 rounded-[5px] " src={image1} alt="" />
                        <div className="flex flex-col gap-1">
                            <Label className="text-xs font-semibold line-clamp-2 leading-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, explicabo.</Label>
                            <Label className="text-xs font-light">23 day ago</Label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const LeftNavbar = () => {
    return (
        <div className="sticky top-20 h-96 flex flex-col bg-gray-200/70 rounded w-64 p-3">
            <div className="flex justify-between items-center mb-5">
                <Label className="text-base font-semibold">Useful Links</Label>
                <Label className="text-xs font-semibold text-blue-500 hover:underline">See All</Label>
            </div>
            <div>
                {[
                    "About",
                    "Career",
                    "Advertise",
                    "Socimo Apps",
                    "Socimo Blog",
                    "Help",
                    "Socimo Gifts",
                    "Content Policy",
                    "User Policy",
                ].map((link, index) => (
                    <div key={index} className="flex flex-col my-3">
                        <Label className="text-sm font-medium text-slate-600 hover:text-blue-600 hover:underline transform ease-in-out duration-300">
                            {link}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );
};





// right side bar components 
export const YourGroup = () => {
    return (
        <>
            <div className="flex w-64 mx-5 flex-col gap-2 rounded">
                <div className="flex items-center gap-2">
                    <Image className="w-12 h-12 object-contain rounded-full ring-2 ring-black" src={image1} alt="img" />
                    <div className="flex flex-col">
                        <Label className="text-base font-semibold">React Stack</Label>
                        <div className="flex gap-1 items-center justify-between">
                            <SendHorizonalIcon className="w-4 h-4" />
                            <Label>Notification</Label>
                            <Label className="text-xs font-medium border-2 rounded border-red-600 px-1">13</Label>
                        </div>
                        <Label className="text-blue-500 text-xs font-semibold hover:scale-105 ease-in-out duration-100 hover:text-blue-700/70 w-auto ">view Feed</Label>
                    </div>
                </div>
                <Separator className="bg-gray-500 my-1" />
            </div>
        </>
    )
}

export const SuggestGroup = () => {
    return (
        <div className="bg-gray-300/70 w-64 rounded py-2 px-4 mx-5">
            <Label className="text-sm font-semibold ">Suggest Groups </Label>
            <div className="bg-white  rounded-xl">
                <div className="relative">
                    <Image className="w-full h-32 object-cover" src={image1} alt="a" />
                    <Image className="absolute left-0 mx-5  -bottom-5 rounded-full ring-2 ring-black/80  w-14 h-14" src={image2} alt="a" />
                </div>
                <div>
                    <div className="flex flex-col gap-1 mt-2 pl-20">
                        <Label>Neuron Hunter</Label>
                        <Label>@annHunt</Label>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button className=" border-2 hover:bg-blue-300 hover:-translate-y-1 ease-in-out duration-300 hover:scale-105 rounded-xl border-blue-500 shadow-sm m-2">Join Community</Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-1 m-2">
                <input className="w-4 h-4 accent-blue-500" type="radio" name="group-selection" id="group1" />
                <input className="w-4 h-4 accent-blue-500" type="radio" name="group-selection" id="group2" />
            </div>

        </div>
    )
}

export const ExploreEvent = () => {
    return (
        <>
            <div className="flex w-64 mx-5 flex-col gap-4 bg-gray-300/50 rounded p-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <Label className="text-sm font-semibold">Explore Event</Label>
                    <Label className="text-xs font-semibold text-blue-500 hover:underline">View All</Label>
                </div>

                {/* Image Section */}
                <div className="flex flex-col gap-4">
                    {/* First Image with Text */}
                    <div className="relative">
                        <Image className="object-cover rounded" src={AngularImg} alt="Angular Event" />
                        <Label className="absolute inset-0 text-center flex items-center justify-center bg-black/50 text-white text-sm font-semibold p-2 rounded">
                            BZ University Good Night Event in Columbia
                        </Label>
                    </div>

                    {/* Second Image with Text */}
                    <div className="relative">
                        <Image className="object-cover rounded" src={wordPressImg} alt="WordPress Event" />
                        <Label className="absolute inset-0 text-center flex items-center justify-center bg-black/50 text-white text-sm font-semibold p-2 rounded">
                            BZ University Good Night Event in Columbia
                        </Label>
                    </div>
                </div>
            </div>
        </>
    )
}


export const Sponser = () => {
    return (
        <>
            <div className="w-64 mx-5 p-3 bg-gray-100 rounded">
                <div className="flex gap-3 mb-5 ">
                    <Globe className="w-5 h-5" />
                    <Label className="text-sm font-semibold">Sponsered</Label>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <Image className="w-16 h-16 object-cover rounded" src={image1} alt="" />
                        <div className="flex flex-col ">
                            <Label className="text-base font-semibold">IQ option baker</Label>
                            <Label className="text-xs font-light text-gray-500">www.livque.com</Label>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Image className="w-16 h-16 object-cover rounded" src={image2} alt="" />
                        <div className="flex flex-col">
                            <Label className="text-base font-semibold">IQ option baker</Label>
                            <Label className="text-xs font-light text-gray-500">www.livque.com</Label>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export const WhoIsFollowing = () => {
    const people = [
        { name: 'Kelly Bill', relation: 'Department colleague', action: 'Follow' },
        { name: 'Issabel', relation: 'Department colleague', action: 'Follow' },
        { name: 'Andrew', relation: 'Department colleague', action: 'Follow' },
        { name: 'Sophia', relation: 'Department colleague', action: 'Follow' },
        { name: 'Allen', relation: 'Department colleague', action: 'Follow' },
    ];

    return (
        <div className="w-64 mx-5 sticky top-20 p-4 bg-gray-200 rounded">
            <Label className="text-sm font-semibold">Who's Following</Label>

            <div className="mt-5">
                {people.map(({ name, relation, action }, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                        <div className="flex gap-2 items-center">
                            <Avatar>
                                <AvatarFallback>{name[0]}</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <Label className="text-sm font-semibold">{name}</Label>
                                <Label className="text-xs font-light">{relation}</Label>
                            </div>
                        </div>

                        <Button className="text-xs text-blue-500 hover:underline font-semibold">{action}</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// main news components 
const NewsFeedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div className="sticky top-0 z-50 w-full">
                    <Header.PrimaryHeader />
                </div>
                <div className="w-full">
                    <Header.SecondaryHeader />
                </div>
                <div className="mx-20 flex justify-between mt-4">
                    {/* left sidebar */}
                    <aside className="w-1/4 flex flex-col gap-5">
                        <div className="space-y-5">
                            <DateAndTime />
                            <CompleteYourProfile />
                            <Label>Advertisement</Label>
                            <Advertisment />
                            <PopularCourses />
                            <RecentBlogs />
                        </div>
                        <LeftNavbar />
                    </aside>

                    {/* Main content area */}
                    <main className="w-1/2 min-h-screen overflow-y-auto">
                        {children}
                    </main>

                    {/* right sidebar */}
                    <aside className="w-1/4 gap-3 flex flex-col">
                        <div className="bg-gray-100 p-3">
                            <Label className="text-base font-semibold">Your Group</Label>
                            <YourGroup />
                            <YourGroup />
                        </div>
                        <SuggestGroup />
                        <ExploreEvent />
                        <Sponser />
                        <WhoIsFollowing />
                    </aside>
                </div>
            </div>
        </>
    );
};

export default NewsFeedLayout;

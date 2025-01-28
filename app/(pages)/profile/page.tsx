import React from 'react'
import Angular from '@/public/images/angularjs.png'
import Pic from '@/public/images/wordpress.png'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Ellipsis, Facebook, Github, Instagram, Search, Youtube } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { CreateNewPost, PostCard } from '../newsfeed/page'
import { WhoIsFollowing, Advertisment } from '../newsfeed/layout'
import Image from 'next/image'
import Link from 'next/link'

const UserProfile = () => {
    return (
        <div>
            {/* user profile image */}
            <div className='relative w-full'>
                <Image className='w-full h-80 rounded-xl' src={Angular} alt="" />
                <div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black/40 to-white/60 w-full h-full'></div>
                <Image className='absolute left-8 ring-2 ring-white bottom-8 w-32 h-32 object-cover rounded-full' src={Pic} alt="" />
            </div>



            <div>
                {/* name and information about the user */}
                <div className='flex justify-between p-2'>
                    <div className='flex flex-col '>
                        <Label className="text-lg font-semibold ">George Peter</Label>
                        <Label className="text-xs font-medium text-blue-400">@Georgeofficial</Label>
                    </div>
                    <div className='flex items-center gap-5'>
                        {[
                            { label: "Joined", value: "April 2020" },
                            { label: "Follow", value: "55K" },
                            { label: "Followers", value: "2.2K" },
                            { label: "Posts", value: "932Posts" }
                        ].map((item, index) => (
                            <Label key={index} className="flex gap-1 text-center">
                                <span className="font-semibold">{item.label}:</span>
                                <span className="text-gray-500">{item.value}</span>
                            </Label>
                        ))}
                    </div>
                </div>

                {/* buttons about page children */}
                <div className='flex justify-between px-1 items-center'>
                    {/* button  */}
                    <div className='flex gap-3 items-center'>
                        {[{ text: "posts", path: "/profile/posts", },
                        { text: "picture", path: "/profile/picture" },
                        { text: "video", path: "/profile/video" },
                        { text: "friends", path: "/profile/friends" },
                        { text: "about", path: "/profile/about" }].map((btn, index) => {
                            return (
                                <Link key={index} href={btn.path}>
                                    <Button className="text-blue-400 bg-gray-200/80 hover:bg-gray-300/80 rounded-[8px] px-3 py-0 ">
                                        {btn.text}
                                    </Button>
                                </Link>
                            );
                        })}
                    </div>
                    {/* searchs */}
                    <div className='flex gap-3 items-center'>
                        <div className='relative flex'>
                            <Input className="w-36 border-t-0 border-l-0 border-r-0 border-b-2 text-gray-400 py-1 pr-10" placeholder="Search..." />
                            <Search className='absolute right-0 top-0  pt-3 w-8 h-8 text-gray-400/80' />
                        </div>
                        <Ellipsis />
                    </div>
                </div>

                {/* about me and social media icons */}
                <div className='flex gap-10  bg-gray-200/40 py-3 px-2 rounded-xl mt-5'>
                    {/* about me */}
                    <div className='basis-2/3 flex flex-col gap-2'>
                        <div>
                            <Label className="text-lg font-semibold text-blue-500">About Me</Label>
                            <Label className="text-sm font-light line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci ac velit lobortis bibendum. Donec pulvinar, ligula at semper congue, justo velit gravida velit, at pellentesque neque lectus a lectus.</Label>
                        </div>
                        <div className='mt-3 flex flex-col gap-1 '>
                            <Label className="text-sm font-semibold">My Favorite Technology</Label>
                            <Label className="text-sm font-light">Angular, React, Node.js, Python</Label>
                        </div>
                    </div>

                    {/* post */}
                    <div className=" basis-1/3 flex flex-col gap-5 ">
                        <Label className="text-lg font-semibold  ">Share Profile</Label>
                        <div className='flex gap-5 items-center '>
                            <Facebook />
                            <Youtube />
                            <Instagram />
                            <Github />
                        </div>
                    </div>
                </div>

                <div className='flex  mt-10'>
                    {/* new post */}
                    <div className='w-2/3 gap-5 flex flex-col'>
                        <CreateNewPost />
                        <PostCard />
                        <PostCard />
                      
                    </div>
                    <div className='flex gap-4 flex-col items-center'>
                        <Advertisment />
                        <WhoIsFollowing />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfile
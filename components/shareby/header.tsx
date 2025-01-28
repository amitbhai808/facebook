import React from 'react'
import image1 from '@/public/images/image1.png'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { AlignJustifyIcon, Book, Home, MonitorCheck, PanelsTopLeft, Radio, Search, Star, Users, Video, Youtube, Zap } from 'lucide-react'
import { MessageSquare } from 'lucide-react'
import { Bell } from 'lucide-react'
import { CirclePlus } from 'lucide-react'
import { Blocks } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'

const PrimaryHeader = () => {
    return (
        <div className='sticky top-0 z-50 flex items-center justify-between bg-gray-100 px-2 h-16 border-b'>
            {/* Header Section */}
            <div className="flex items-center space-x-4 px-3">
                <img className="w-10 h-10 rounded-full" src={image1.src} alt="image" />
                <Label className="text-lg font-semibold">SocialMart</Label>
                <div className='relative items-center flex gap-2'>
                    <Search className='absolute left-0 mx-2 text-gray-500' />
                    <Input
                        className="ml-auto border rounded-xl text-gray-700/80 font-semibold pr-3 pl-10 py-2 w-96 
                     bg-gray-200/90 hover:bg-gray-300/80 focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* Navigation Section */}
            <div className="px-4 py-2 flex items-center gap-2">
                <Link href={"/profile"} className="flex items-center space-x-2 py-2 cursor-pointer">
                    <div className='flex items-center justify-between gap-2 border rounded-xl hover:bg-gray-200 transition-colors py-1 px-2'>
                        <Avatar className="bg-gray-500/50 w-8 h-8">
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <Label>Amit Pajiyar</Label>
                    </div>
                </Link>

                {[
                    { icon: <Radio />, text: "GO live", path: "/go-live" },
                    { icon: <Home />, text: "Home", path: "/" },
                    { icon: <MessageSquare />, text: "Messages", path: "/messages" },
                    { icon: <Bell />, text: "Notification", path: "/notifications" },
                    { icon: <CirclePlus />, text: "Add Post", path: "/add-post" },
                    { icon: <Blocks />, text: "More", path: "/more" },
                ].map((item, index) => (
                    <Link key={index} href={item.path} className="flex items-center space-x-2 py-2 cursor-pointer">
                        <div className="text-xl rounded-full bg-blue-300/90 hover:bg-blue-400 text-blue-900 p-2 transition-colors">
                            {item.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const SecondaryHeader = () => {
    return (
        <div className="flex border-b justify-between items-center px-2 py-2 bg-white h-14">
            {/* sidebar menu  */}
            <AlignJustifyIcon className="cursor-pointer hover:text-blue-600 transition-colors" />

            <div className='flex justify-between items-center text-blue-600/80 w-3/6'>
                {[
                    { icon: <Zap />, text: "NewsFeed", path: "/newsfeed" },
                    { icon: <Youtube />, text: "Videos", path: "/videos" },
                    { icon: <MonitorCheck />, text: "Course", path: "/courses" },
                    { icon: <Book />, text: "Book", path: "/books" },
                    { icon: <PanelsTopLeft />, text: "Blogs", path: "/blogs" },
                    { icon: <Users />, text: "Groups", path: "/groups" },
                ].map((item, index) => (
                    <Link
                        key={index}
                        href={item.path}
                        className='hover:border-b-4 transform ease-in-out duration-150 border-blue-700/80 
                        px-10 py-2 h-10 cursor-pointer hover:text-blue-800 transition-colors'
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>

            {/* follower star  */}
            <div className="flex flex-col gap-2">
                <Label>Follower: 209</Label>
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-4 h-4 text-yellow-500" />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Header = {
    PrimaryHeader,
    SecondaryHeader
};

export default Header;
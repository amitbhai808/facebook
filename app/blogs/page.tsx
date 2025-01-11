import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Angular from '@/public/images/angularjs.png';
import { Book, Clock, LucideMessageSquareText } from 'lucide-react';
import Image from 'next/image';

const generateBlogEntry = (index:number) => (
    <div key={index} className="flex gap-4 my-3">
        <Image className="w-2/5 object-cover h-52 rounded-[10px]" src={Angular} alt="" />
        <div className="flex flex-col gap-2 w-1/2">
            <div className='flex gap-5  text-gray-400'>
                <div className='flex gap-2 items-center'>
                    <Book className='w-4 h-4' />
                    <Label className="text-xs">93k</Label>
                </div>
                <div className='flex gap-2 items-center'>
                    <LucideMessageSquareText className='w-4 h-4' />
                    <Label className="text-xs">93k</Label>
                </div>
            </div>
            <Label className="text-lg font-semibold line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Label>
            <Label className="text-xs font-light line-clamp-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sit. Animi in harum nihil, pariatur esse eius beatae corrupti consequatur.</Label>
            <div className='flex justify-between items-center px-2'>
                <div className='flex gap-2 items-center text-blue-500'>
                    <Clock className='w-4 h-4' />
                    <Label className="text-xs font-light ">January 23, 2021</Label>
                </div>
                <Button className='font-semibold border rounded-2xl  hover:bg-[#6ba4e1] bg-[#83b9ff]'>Read More</Button>
            </div>
        </div>
    </div>
);

export default function BlogPage() {
    return (
        <div className="flex flex-col gap-4">
            <Label>
                <span className="text-lg font-bold">Blogs</span>
            </Label>
            <Separator className="bg-gray-500/70 my-2" />
            <div className="flex flex-col gap-4">
                {Array.from({ length: 4 }).map((_, index) => generateBlogEntry(4))}
            </div>
        </div>
    );
}

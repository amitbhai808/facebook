import React from 'react'
import { Label } from '@/components/ui/label'
import Angular from '@/public/images/angularjs.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Car, Clock, Heart, ShoppingCart } from 'lucide-react'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList } from '@/components/ui/breadcrumb'
import htmlimg from '@/public/images/png/html.png'
import viteimg from '@/public/images/png/vite.png'
import cssimg from '@/public/images/png/css.png'
import angularimg from '@/public/images/png/angular.png'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'

// CourseCard component to display individual course details
const CourseCard = () => {
    return (
        <div className="flex  flex-col gap-2 border border-gray-500/40 bg-white rounded-md hover:scale-[1.01] ease-in duration-50 ">
            <div className="basis-1">
                <Image
                    className="object-cover rounded-t-md"
                    src={Angular}
                    alt="Angular Logo"
                    width={300}
                    height={400}
                />
            </div>
            <div className="basis-2 flex flex-col px-4 my-2">
                <div className='flex flex-col '>
                    <Label className="text-lg font-semibold line-clamp-2 text-black/90 hover:text-black">Figma UI/UX Design Essential Course</Label>
                    <Label className="text-sm text-blue-700/90">Additional Info</Label>
                    <Label className="text-sm text-gray-500/70 line-clamp-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
                        placeat unde, sapiente suscipit cupiditate ex nulla non vero
                        doloremque autem.
                    </Label>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center my-2'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="-mr-1">
                                <Avatar className="object-cover  w-8 h-8 ring-2 ring-gray-400 rounded-full">
                                    <AvatarImage src={Angular.src} />
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-between items-center'>
                        <Label className="text-base font-extralight text-gray-600/80">Join 341 + Member</Label>
                    </div>
                </div>

                <div className='flex  gap-2'>
                    <Label className="text-2xl items-center flex font-bold text-black/80">$284</Label>
                    <Label className='text-base flex items-start font-extralight text-gray-600/80 line-through'>$327</Label>
                </div>

                <div className='flex items-center justify-between  gap-2 '>
                    <Label className="text-sm font-medium my-1  bg-purple-600/80 text-white py-1 px-5 rounded-sm">Best Seller</Label>
                    <Label className='text-sm font-medium my-1 text-green-500 py-1 px-2 rounded-sm border-2 border-green-600'>
                        <Heart />
                    </Label>
                </div>
            </div>
        </div>
    );
};

// CategoryCard component to display individual category details
export const CategoryCard = () => {
    return (
        <div className='flex max-w-44 flex-col shadow-slate-400 shadow-lg gap-2 bg-white rounded-[10px] p-3'>
            <div className='flex flex-col justify-center items-center gap-1'>
                {/* Category image */}
                <Image className='object-cover rounded-[10px]' src={htmlimg} alt="" />
                <Label className="text-sm font-semibold">Html5 course</Label>
            </div>
            <div className='flex justify-between items-center'>
                <Label className="text-xs text-gray-500/90 font-light">6 course</Label>
                <Label className="text-xs text-gray-500/90 font-light">5 bundles</Label>
            </div>
        </div>
    )
}
const RecommendedBookCard = () => {
    return (
        <div className="flex max-w-64  flex-col items-center bg-white shadow-md border hover:scale-[1.04] ease-in duration-75 border-gray-500/40 rounded-md">
            <Image className=" object-cover rounded-t-md" src='https://dummyjson.com/image/200x150' width={250} height={150} alt="" />
            <div className='flex flex-col px-4 py-2 gap-1 '>
                <div className='flex justify-between items-center'>
                    <Label className="text-sm font-semibold line-clamp-1">Figma UI/UX Design Essential Course</Label>
                    <Label className='text-sm font-extralight text-black/90'>$233</Label>
                </div>
                <Label className="text-xs text-gray-500/90 font-light line-clamp-3 leading-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</Label>
                <div className='flex items-center justify-between gap-1 '>
                    <Label className="text-sm text-gray-500/90 font-light">Pajiyar808</Label>
                    <Label>|</Label>
                    <Label className="text-sm text-gray-500/90 font-light">2 hours course</Label>
                </div>
            </div>
        </div>
    );
};

// CoursePage component to display the main course page
const CoursePage = () => {
    // Function to render multiple CourseCard components
    const renderCourseCards = () => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Link href={`/courses/${index + 1}`}>
                <CourseCard key={index} />
            </Link>
        ));
    };

    // Function to render breadcrumb items
    const renderBreadcrumbItems = () => {
        return (
            <>
                {Array.from({ length: 4 }).map((_, index) => (
                    <BreadcrumbItem key={index} className="hover:text-primary-foreground bg-blue-400/60 rounded-full py-2 px-4 text-sm font-medium">
                        {index + 1}
                    </BreadcrumbItem>
                ))}
                <BreadcrumbEllipsis className="text-sm font-semibold">...</BreadcrumbEllipsis>
                {Array.from({ length: 2 }).map((_, index) => (
                    <BreadcrumbItem key={index + 9} className="hover:text-primary-foreground bg-blue-400/60 rounded-full py-2 px-4 text-sm font-medium">
                        {index + 9}
                    </BreadcrumbItem>
                ))}
            </>
        );
    };

    // Function to render multiple CategoryCard components
    const renderCategoryCards = () => {
        return (
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center px-2'>
                    <Label className="text-base font-semibold">Category</Label>
                    <Label className="text-sm font-medium text-gray-400/90 hover:underline hover:text-blue-800">View all</Label>
                </div>
                <Separator className="bg-gray-500/70 my-2" />
                <div className='flex justify-between items-center gap-5'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CategoryCard key={index} />
                    ))}
                </div>
            </div>
        )
    };

    const RecommendedBooks = () => {
        return (
            <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between items-center px-2">
                    <Label className="text-base font-semibold">Recommended Books</Label>
                    <Label className="text-sm font-semibold text-gray-700/90 hover:underline hover:pb-1 hover:text-blue-800 hover:shadow-sm">View all</Label>
                </div>
                <Separator className="bg-gray-500/70 my-2" />

                <Carousel className="w-full">
                    <CarouselContent className="">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/4">
                                <RecommendedBookCard key={index} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>
            </div>

        );
    };

    return (
        <div className='bg-gray-200/30 p-4'>
            <Label className="text-xl font-bold">Course Page</Label>
            <div className='mt-6 grid grid-cols-3 gap-6'>
                {renderCourseCards()}
            </div>
            <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                <Breadcrumb className="flex items-center justify-center gap-2">
                    <BreadcrumbList className="flex items-center gap-2 text-sm">
                        {renderBreadcrumbItems()}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex justify-between items-center gap-5 p-5 rounded-xl bg-gray-50 border my-5">
                {renderCategoryCards()}
            </div>
            <div className="flex justify-between  items-center gap-5 p-5 rounded-xl bg-gray-50 shadow-md my-5">
                {RecommendedBooks()}
            </div>

        </div>
    );
}

export default CoursePage
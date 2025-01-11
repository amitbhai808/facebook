import React from 'react'
import { Label } from '@/components/ui/label'
import Angular from '@/public/images/angularjs.png'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Clock, ShoppingCart } from 'lucide-react'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList } from '@/components/ui/breadcrumb'
import htmlimg from '@/public/images/png/html.png'
import viteimg from '@/public/images/png/vite.png'
import cssimg from '@/public/images/png/css.png'
import angularimg from '@/public/images/png/angular.png'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

// CourseCard component to display individual course details
const CourseCard = () => {
    return (
        <div className='flex w-full flex-col border border-gray-400/40 shadow-lg gap-2 bg-gray-200/30 rounded-[10px] p-3'>
            <div>
                {/* Course image */}
                <Image className='object-cover rounded-[10px]' src={Angular} alt="" />
            </div>
            <div className='flex items-center justify-between px-2'>
                <div className='flex gap-2 items-center'>
                    {/* Instructor information */}
                    <Avatar>
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col gap-2'>
                        <Label>Amit Pajiyar</Label>
                        <Label>Frontend Developer</Label>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    {/* Course price */}
                    <ShoppingCart />
                    <Label>$29</Label>
                </div>
            </div>
            <Label className="text-xs font-semibold">Node JS Online video course</Label>
            <div className='flex justify-between items-center px-1'>
                <Label className="text-gray-400/70 font-medium text-xs">20 Lecture</Label>
                <Label className="font-medium text-xs flex gap-1 items-center justify-center text-gray-400/90">
                    <Clock className='w-4 h-4' /> 20 hours
                </Label>
            </div>
        </div>
    )
}

// CategoryCard component to display individual category details
export const CategoryCard = () => {
    return (
        <div className='flex w-44 flex-col shadow-slate-400 shadow-lg gap-2 bg-white rounded-[10px] p-3'>
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
        <div className="flex flex-col items-center gap-1">
            <Image className="w-32 object-cover rounded-[10px]" src={htmlimg} alt="" />
            <p className="text-sm font-semibold">Html5 course</p>
        </div>
    );
};

// CoursePage component to display the main course page
const CoursePage = () => {
    // Function to render multiple CourseCard components
    const renderCourseCards = () => {
        return Array.from({ length: 10 }).map((_, index) => (
            <CourseCard key={index} />
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
                    <Label className="text-xs font-medium">View all</Label>
                </div>
                <Separator className="bg-gray-500/70 my-2" />
                <div className='flex justify-between items-center gap-5'>
                    {Array.from({ length: 4 }).map((_, index) => (
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
                    <Label className="text-xs font-medium">View all</Label>
                </div>
                <Separator className="bg-gray-500/70 my-2" />
                <div className="flex justify-center w-full items-center gap-6">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <RecommendedBookCard key={index} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='bg-gray-200/30 p-4'>
            <Label className="text-xl font-bold">Course Page</Label>
            <div className='mt-6 grid grid-cols-2 gap-6'>
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
            <div className="flex justify-between  items-center gap-5 p-5 rounded-xl bg-gray-50 border my-5">
                {RecommendedBooks()}
            </div>

        </div>
    );
}

export default CoursePage
import React from 'react';

import Header from '@/components/shareby/header';
import { ExploreEvent, WhoIsFollowing } from '../newsfeed/layout';

import { Bookmark} from 'lucide-react';

import Footer from '@/components/shareby/footer';


export const PopularCourses = () => {
    const courses = [
        { title: "Vu.js 2 Basics", author: "Richard Ali" },
        { title: "CSS3 for Beginners", author: "Richard Ali" },
        { title: "Technology Wants 2020", author: "Richard Ali" },
        { title: "Technology Wants 2020", author: "Richard Ali" },
    ];

    return (
        <aside className="p-4 mx-5 w-64 bg-gray-200 rounded-[5px]">
            <h2 className="text-sm font-semibold mb-4">Popular Courses</h2>
            <ul className="space-y-5">
                {courses.map((course, index) => (
                    <li key={index} className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-sm line-clamp-1">{course.title}</span>
                                <span className="font-medium text-xs text-blue-500 line-clamp-1">{course.author}</span>
                            </div>
                        </div>
                        <Bookmark />
                    </li>
                ))}
            </ul>
        </aside>
    );
};


const CourseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50 w-full">
                <Header.PrimaryHeader />
            </div>
            <Header.SecondaryHeader />

            <div className="flex flex-1 mx-20 mt-14 ">
                <main className="flex-1  overflow-x-hidden">
                    {children}
                </main>
                <aside className="w-1/4 flex gap-5 items-center flex-col ">
                    {/* Add sidebar content here */}
                    <PopularCourses />
                    <ExploreEvent />
                    <div className='sticky top-20'>

                        <WhoIsFollowing />
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    );
};



export default CourseLayout;


'use client'
import { Bookmark } from 'lucide-react';
import Header from '@/components/shareby/header';
import Footer from '@/components/shareby/footer';
import { ExploreEvent, WhoIsFollowing } from '../newsfeed/layout';
import { usePathname } from 'next/navigation';

// Note: Removed useRouter as it's not needed in a Server Component

export const PopularCourses = () => {
    const courses = [
        { title: "Vue.js 2 Basics", author: "Richard Ali" },
        { title: "CSS3 for Beginners", author: "Richard Ali" },
        { title: "Technology Wants 2020", author: "Richard Ali" },
        { title: "Technology Wants 2020", author: "Richard Ali" },
    ];

    return (
        <aside className="p-4 mx-5 w-64 bg-gray-200 rounded-lg">
            <h2 className="text-sm font-semibold mb-4">Popular Courses</h2>
            <ul className="space-y-5">
                {courses.map((course, index) => (
                    <li key={index} className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <img
                                src="/api/placeholder/50/50"
                                alt={`${course.title} thumbnail`}
                                className="w-12 h-12 rounded"
                            />
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-sm line-clamp-1">
                                    {course.title}
                                </span>
                                <span className="font-medium text-xs text-blue-500 line-clamp-1">
                                    {course.author}
                                </span>
                            </div>
                        </div>
                        <Bookmark className="w-5 h-5" />
                    </li>
                ))}
            </ul>
        </aside>
    );
};

interface CourseLayoutProps {
    children: React.ReactNode;
}

const CourseLayout = async ({ children }: CourseLayoutProps) => {
    const currentPath = usePathname();

    const showSidebar = currentPath === '/courses';


    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50 w-full">
                <Header.PrimaryHeader />
            </div>
            <Header.SecondaryHeader />

            <div className="flex flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
                <main className={`overflow-x-hidden `}>
                    {children}
                </main>
                {showSidebar && (
                    <aside className="w-80 flex gap-5 flex-col ml-6">
                        <PopularCourses />
                        <ExploreEvent />
                        <div className="sticky top-20">
                            <WhoIsFollowing />
                        </div>
                    </aside>
                )}
            </div>
            <Footer />
        </div>

    );
};

export default CourseLayout;
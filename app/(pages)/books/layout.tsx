import React from 'react';
import Footer from '@/components/shareby/footer';
import { PopularCourses } from '../courses/layout';
import { ExploreEvent } from '../newsfeed/layout';
import { WhoIsFollowing } from '../newsfeed/layout';
import Header from '@/components/shareby/header';


const BookLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50">
                <Header.PrimaryHeader />
            </div>
            <Header.SecondaryHeader />
            <div className="flex mx-20 mt-10">
                <main className="flex-1">
                    {children}
                </main>
                <aside className="w-1/4 flex flex-col gap-4">
                    <PopularCourses />
                    <ExploreEvent />
                    <WhoIsFollowing />
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default BookLayout;

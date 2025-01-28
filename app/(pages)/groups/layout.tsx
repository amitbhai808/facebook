import React, { Children } from 'react';

import Header from '@/components/shareby/header';
import Footer from '@/components/shareby/footer';
import { WhoIsFollowing } from '../newsfeed/layout';
import { ExploreEvent } from '../newsfeed/layout';
import { PopularCourses } from '../newsfeed/layout';

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50 w-full">
                <Header.PrimaryHeader />
            </div>
            <Header.SecondaryHeader />
            <div className="flex mx-20 mt-10">
                <main className="flex-1">
                    {children}
                </main>
                <aside className="w-1/4 flex flex-col gap-4">
                    {/* Add right sidebar content here */}
                    <PopularCourses />
                    <ExploreEvent />
                    <WhoIsFollowing />
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default GroupLayout;


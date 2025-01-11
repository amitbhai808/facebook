import React from 'react';

import Header from '@/components/shareby/header';
import Footer from '@/components/shareby/footer';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PopularCourses } from '../courses/layout';
import { ExploreEvent, WhoIsFollowing } from '../newsfeed/layout';


const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50">
                <Header.PrimaryHeader />
            </div>
            <Header.SecondaryHeader />
            <div className="mx-20 mt-4 flex flex-1">

                <main className="flex-1 p-5 bg-gray-100 rounded-[10px]">
                    {children}
                </main>

                <aside className="w-1/4 flex flex-col gap-4">
                    <Label>Recent Posts</Label>
                    <PopularCourses />
                    <ExploreEvent />
                    <WhoIsFollowing />
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default BlogLayout;


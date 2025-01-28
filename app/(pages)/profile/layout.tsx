'use client'
import { Sponser, YourGroup, SuggestGroup, ExploreEvent } from "../newsfeed/layout";


import React from 'react'
import Header from "@/components/shareby/header";
import { usePathname } from "next/navigation";
const UserProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50">
                <Header.PrimaryHeader />
            </div>
            <Header.SecondaryHeader />

            <div className="mx-20 flex">
                {pathname === '/profile' && <aside className="w-1/4 flex flex-col gap-4">
                    <Sponser />
                    <YourGroup />
                    <SuggestGroup />
                    <ExploreEvent />
                </aside>}

                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default UserProfileLayout
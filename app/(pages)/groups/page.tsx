import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Angular from '@/public/images/angularjs.png'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
const GroupPage = () => {
  return (

    <>
      <div className=" mx-auto  p-5 bg-gray-100 ">
        <h2 className="text-2xl font-bold mb-4">Groups</h2>
        <Separator className="bg-gray-500/70 my-5" />
        <div className="grid grid-cols-4 gap-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="flex flex-col p-5 bg-gray-200 rounded-[10px] items-center gap-3" key={index}>
              <Image
                className="w-24 h-24 object-cover rounded-full ring-2 ring-black"
                src={Angular}
                alt=""
              />
              <div className="flex flex-col gap-0">
                <h3 className="text-base font-semibold">Angular JS</h3>
                <p className="text-xs text-gray-500">12M followers</p>
              </div>
              <Button className="bg-blue-300 text-white hover:bg-blue-500 rounded-[10px]">
                Join Group
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <BreadcrumbItem
                  key={index}
                  className="hover:text-primary-foreground bg-blue-400/60 rounded-full py-2 px-4 text-sm font-medium"
                >
                  {index + 1}
                </BreadcrumbItem>
              ))}
              <BreadcrumbEllipsis className="text-sm font-semibold">
                ...
              </BreadcrumbEllipsis>
              {Array.from({ length: 2 }).map((_, index) => (
                <BreadcrumbItem
                  key={index + 9}
                  className="hover:text-primary-foreground bg-blue-400/60 rounded-full py-2 px-4 text-sm font-medium"
                >
                  {index + 9}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="mt-10 mb-60 bg-gray-100">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-2xl font-bold mb-4">Recommended Groups</h2>
          <div className="flex gap-2 items-center">
            <ChevronLeft className="w-6 h-6" />
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>
        <Separator className="bg-gray-500/70 my-2" />
        <div className="grid grid-cols-2 gap-5 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="relative" key={index}>
              <Image
                className="h-48 object-cover rounded-[10px]"
                src={Angular}
                alt=""
              />
              <div className="absolute bottom-10 left-10 flex items-center gap-3">
                <Image
                  className="w-24 h-24 object-cover rounded-full ring-2 ring-black"
                  src={Angular}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-lg font-semibold">Group Name</h3>
                  <p className="text-xs text-gray-300">@username</p>
                  <Button className="bg-blue-300 p-0 font-medium text-white hover:bg-blue-500 rounded-[10px] text-xs">
                    Join Group
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default GroupPage;


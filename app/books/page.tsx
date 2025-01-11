import React from 'react';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import book1 from '@/public/images/book1.png';
import { Button } from '@/components/ui/button';
import { CategoryCard } from '../courses/page';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList } from '@/components/ui/breadcrumb';
import Image from 'next/image';

const BookPage = () => {
  const renderBreadcrumbs = () => (
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

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Book Page</h1>

      <div className="space-x-3">
        <Button variant="outline">Suggestions</Button>
        <Button variant="outline">Newest</Button>
        <Button variant="outline">My Books</Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Image className="rounded" src={book1} alt="book cover" />
            <span className="text-sm font-semibold hover:text-blue-400">Book Title</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Image className="rounded w-full h-[350px] object-cover"  src={book1} alt="book cover" />
            <span className="text-sm font-semibold hover:text-blue-400">Book Title</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Image className="rounded" src={book1} alt="book cover" />
            <span className="text-sm font-semibold hover:text-blue-400">Book Title</span>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
        <Breadcrumb className="flex items-center justify-center gap-2">
          <BreadcrumbList className="flex items-center gap-2 text-sm">{renderBreadcrumbs()}</BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-10 space-y-4">
        <div className="space-x-3">
          <span className="text-base font-semibold">Category</span>
          <span className="text-xs font-medium">View all</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CategoryCard key={index} />

          ))}
        </div>
      </div>
    </div>
  );
};

export default BookPage;

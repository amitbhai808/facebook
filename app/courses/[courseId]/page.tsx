import { Accordion, AccordionContent, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { AccordionItem } from '@radix-ui/react-accordion'
import { Book, CalendarDays, DollarSignIcon, Eye, Heart, MessageCircleQuestion, Share2, SquareCheckBig, Star, ThumbsDown, ThumbsUp, Tv, Video } from 'lucide-react'
import Image from 'next/image'

import React from 'react'
import { PopularCourses } from '../layout'
import { ExploreEvent } from '@/app/newsfeed/layout'

const CourseDetailPage = () => {
    const dummyData = [
        {
            title: "1. Basic HTML Introduction",
            content: [
                "Html Intro Lecture",
                "Html Basic Lecture",
                "Html Tags Lecture",
            ],
        },
        {
            title: "2. CSS Fundamentals",
            content: [
                "CSS Intro Lecture",
                "CSS Selectors Lecture",
                "CSS Box Model Lecture",
            ],
        },
        {
            title: "3. JavaScript Basics",
            content: [
                "JS Intro Lecture",
                "JS Variables Lecture",
                "JS Functions Lecture",
            ],
        },
    ];

    const DummyFeatures = [
        { text: '28 Hours Video', icon: <Video /> },
        { text: 'Certificate', icon: <SquareCheckBig /> },
        { text: '12 Article', icon: <Book /> },
        { text: 'Watch Offline', icon: <Tv /> },
        { text: 'Life Time Access', icon: <CalendarDays /> },
        { text: 'Paid', icon: <DollarSignIcon /> }
    ];

    return (
        <div className="grid grid-cols-12 w-[1280px] gap-4 p-1">

            {/* course details and images  */}
            <div className='col-span-12 grid grid-cols-12'>
                {/* course detail  */}
                <div className="col-span-7 flex flex-col gap-5">
                    <div className="flex items-center gap-1 text-yellow-500 font-light text-sm">
                        {[...Array(5)].map((_, index) => (
                            <Label key={index}><Star /></Label>
                        ))}
                        <Label className="rounded-sm bg-orange-500/70 text-white px-4 py-1">4.5</Label>
                    </div>
                    <div className="flex w-full justify-between">
                        <Label className="text-3xl font-semibold text-black/90 line-clamp-2 hover:text-blue-700/70 ease-linear duration-75 cursor-pointer">
                            Learn Basic JavaScript
                        </Label>
                        <div className="flex gap-2">
                            <Label className="font-semibold text-2xl text-black/80">$19.99</Label>
                            <Label className="font-semibold text-lg text-gray-500/80 line-through">$39.99</Label>
                        </div>
                    </div>
                    <Label className="text-gray-500/90 line-clamp-3 text-sm leading-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero, adipisci fugiat quidem reiciendis veritatis, labore, consectetur voluptates quisquam dolores perspiciatis magnam officia? Labore magnam cum in deleniti at temporibus necessitatibus, blanditiis quod et praesentium quas ipsam quasi vero eum laboriosam, eligendi odit pariatur dolorum molestias enim. Voluptatum, a commodi.
                    </Label>
                    <div className="flex items-center justify-between pr-5">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                                <Label className="text-sm font-semibold">Pajiyar808</Label>
                                <Label className="text-xs text-gray-500/90">Last Updata : 2 Aug, 2024</Label>
                            </div>
                        </div>
                        <Button variant="outline" className="text-xs border-blue-500 text-blue-500 hover:text-blue-600">
                            Follow
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 justify-between w-2/5">
                        <Label className="flex items-center gap-1">
                            <Eye /> 1.2k
                        </Label>
                        <Label className="flex items-center gap-1">
                            <ThumbsUp /> 52k
                        </Label>
                        <Label className="flex items-center gap-1">
                            <ThumbsDown /> 122
                        </Label>
                        <Label className="flex items-center gap-1">
                            <Share2 /> Share
                        </Label>
                    </div>
                </div>

                {/* course image  */}
                <div className="col-span-5 flex flex-col items-center justify-center gap-3 py-3 px-5">
                    <Image className='rounded-lg object-contain' src="https://dummyjson.com/image/450x250" alt="" width={450} height={250} />
                    <div className="flex items-center gap-2">
                        <Button>Start</Button>
                        <Button><Heart /> Add to WishList</Button>
                    </div>
                    <Label className='text-xs font-light'>30 days money back guarantee</Label>
                </div>
            </div>

            {/* description and accordation  */}
            <div className="col-span-12 flex gap-2">
                {/* description  */}
                <div className='flex-1'>
                    <Label className="text-lg font-semibold">Description</Label>
                    <Separator className="bg-gray-500/70 my-2" />
                    <Label className="text-base font-thin text-gray-500/90 line-clamp-6 leading-6 pr-2 "> busdam ab ipsa provident ad, culpa atque aut ipsam, illum officia similique adipisci alias? Aut, ipsa! Eius tenetur placeat, ea vero omnis qui odit provident? Optio repudiandae accusantium rerum provident id corrupti voluptatum laborum quo a quisquam! ipsum dolor, sit amet consectetur adipisicing elit. Architecto, officia.</Label>
                </div>

                {/* accordation  */}
                <div className='flex-1'>
                    <Label className="text-lg font-semibold">Curriculam</Label>
                    <Separator className="bg-gray-500/70 my-2" />
                    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                        {dummyData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center w-full text-left font-medium text-gray-700 focus:outline-none">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="px-4 py-3 bg-white">
                                    <div className="flex flex-col gap-2">
                                        {item.content.map((content, idx) => (
                                            <Label key={idx} className="text-sm font-thin text-gray-600 line-clamp-6 leading-6 pr-2">
                                                {content}
                                            </Label>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </div>

            {/* course features and reviews  */}
            <div className="col-span-12 grid grid-cols-10 gap-4">
                {/* course features */}
                <div className="col-span-4 ">
                    <Label className="text-lg font-semibold">Features</Label>
                    <Separator className="bg-gray-500/70 my-2" />
                    <div className='grid grid-cols-2  gap-2 pt-4'>
                        {DummyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Label>{feature.icon}</Label>
                                <Label>{feature.text}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* course reviews   */}
                <div className="col-span-6 ">
                    <Label className="text-lg font-semibold">Reviews</Label>
                    <Separator className="bg-gray-500/70 my-2" />
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-2 pt-3'>
                        {/* overal review points out of 5  */}
                        <div className='md:col-span-1 flex flex-col items-center gap-1'>
                            <Label className="text-4xl font-semibold">4.5</Label>
                            <div className="flex gap-1 ">{
                                [...Array(5)].map((_, index) => (
                                    <Label className='text-xs font-thin text-yellow-500/90' key={index}><Star className='w-4 h-4' /></Label>
                                ))
                            }</div>
                            <Label className='text-sm font-semibold'>Course Rating</Label>
                        </div>

                        {/* progress bar  */}
                        <div className='md:col-span-3 flex flex-col items-center gap-1'>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className='flex items-center gap-1 w-full'>
                                    <Progress value={50}
                                        // indicatorColor="yellow-500"
                                        className="flex-1 bg-gray-500/30 h-4 rounded-sm  " />
                                    {[...Array(5)].map((_, idx) => (
                                        <Label key={idx} className='text-xs font-thin text-yellow-500/90'>
                                            <Star className='w-4 h-4' />
                                        </Label>
                                    ))}
                                    <Label className='text-sm font-semibold'>78%</Label>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* feedback and ads banner  */}
            <div className='col-span-12 grid grid-cols-7 h-auto gap-4 pr-7 my-10'>
                {/* feedback */}
                <Card className="col-span-5 w-full max-w-4xl mx-auto">
                    <CardHeader className="space-y-2">
                        <CardTitle className="text-2xl font-bold">Feedback</CardTitle>
                        <CardDescription>Help us to make this course better</CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-6">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex w-full items-start gap-4 p-4 rounded-lg hover:bg-gray-50/50 transition-colors">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold">John Doe</p>
                                            <p className="text-xs text-gray-500">1 day ago</p>
                                        </div>
                                        <div className="flex items-center gap-1 bg-orange-500/80 text-white rounded-md px-2 py-1">
                                            <Star className="w-4 h-4" />
                                            <span className="text-sm font-medium">4.2</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                        Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Hic asperiores excepturi optio ratione dolorum! Impedit perspiciatis tempora molestiae
                                        repellendus maxime! consectetur adipisicing elit. Quisquam, quidem!
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>

                    <CardFooter className="flex flex-col items-start gap-6 pt-6">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold">Give Your Review</span>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className="w-5 h-5 text-yellow-400 cursor-pointer hover:scale-110 transition-transform"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-4">
                            <Input
                                className="w-full"
                                placeholder="Name"
                            />
                            <Input
                                className="w-full"
                                placeholder="Email"
                            />
                            <Textarea
                                className="w-full min-h-[100px]"
                                placeholder="Write Something..."
                            />
                            <Button className="w-32 mt-2">
                                Add Review
                            </Button>
                        </div>
                    </CardFooter>
                </Card>

                {/* ads banner */}
                <div className='col-span-2 flex items-center gap-3 flex-col'>
                    {/* ask a question form  */}
                    <Card className='w-60 p-3 h-auto'>
                        <CardHeader className='p-2'>
                            <CardTitle>Ask a Question</CardTitle>
                        </CardHeader>
                        <CardContent className='p-1'>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <MessageCircleQuestion className='w-14 h-14' />
                                    <Label className="text-xs font-medium">Ask questions in Q&A to get help from experts in your field.</Label>
                                </div>
                                <Dialog >
                                    <DialogTrigger className=" border rounded-md border-gray-500/40 px-2 py-1"  >
                                        Ask a question...
                                    </DialogTrigger>
                                    <DialogContent>
                                        <Card className='p-3 shadow-none border-none'>
                                            <CardHeader>
                                                <CardTitle>Ask Your Question Here</CardTitle>
                                            </CardHeader>
                                            <CardContent className='p-1'>
                                                <Input className='w-full' placeholder='Ask your question here ...' />
                                            </CardContent>
                                            <CardFooter className='p-1'>
                                                <Button className="w-full">Post</Button>
                                            </CardFooter>
                                        </Card>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardContent>
                        <CardFooter className='p-1'>
                            <Button className="w-full">Send</Button>
                        </CardFooter>
                    </Card>

                    {/* explore events  */}
                    <ExploreEvent />

                    {/* explore popular books  */}
                    <PopularCourses />


                </div>
            </div>
        </div >
    );
};

export default CourseDetailPage
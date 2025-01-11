import { Image, PenLine, Smile, Video, Ban, CalendarDays, Ellipsis, FlagIcon, Globe, PenBox, Trash, ThumbsUp, MessageSquareText, Share, Bookmark } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import image1 from '@/public/images/image1.png'
import Video1 from "@/public/images/image1.png"

const RecentStories = () => {
    return (
        <>
            <div className='flex gap-4 flex-col '>
                <div className='flex justify-between items-center px-2'>
                    <Label className="text-base font-semibold">Recent Stories</Label>
                    <Label className="text-xs font-medium text-blue-400">View All</Label>
                </div>
                <div className='flex gap-4 '>
                    <div className='relative '>
                        <Avatar className="absolute top-4 left-4 border">
                            <AvatarImage />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <img className='w-32 h-52 rounded-xl p-1 object-cover' src={image1.src} />
                    </div>
                    <div className='relative '>
                        <Avatar className="absolute top-4 left-4 border">
                            <AvatarImage />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <img className='w-32 h-52 rounded-xl p-1 object-cover' src={image1.src} />
                    </div>
                    <div className='relative '>
                        <Avatar className="absolute top-4 left-4 border">
                            <AvatarImage />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <img className='w-32 h-52 rounded-xl p-1 object-cover' src={image1.src} />
                    </div>
                    <div className='relative '>
                        <Avatar className="absolute top-4 left-4 border">
                            <AvatarImage />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <img className='w-32 h-52 rounded-xl p-1 object-cover' src={image1.src} />
                    </div>

                </div>
            </div>
        </>
    )
}

const PostCard = () => {
    return (
        <>
            <div>
                <Card className="rounded-xl">
                    <CardHeader className="flex gap-3">
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <Avatar>
                                    <AvatarImage />
                                    <AvatarFallback className="border">A</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <Label className="text-base font-semibold text-blue-600">Amit Pajiyar</Label>
                                        <Label className=" font-medium">Programmer</Label>
                                    </div>
                                    <Label className="text-xs flex gap-1 items-center text-gray-500/70 pl-1">
                                        <Globe className='w-3 h-3' />
                                        published: Sep,15 2020
                                    </Label>
                                </div>
                            </div>
                            <DropdownMenu >
                                <DropdownMenuTrigger>   <Ellipsis /></DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white ">
                                    <div className='flex gap-2 my-2'>
                                        <PenBox className='w-5 h-5' />
                                        <div className='flex flex-col'>
                                            <Label className="text-xs font-semibold">Edit Post</Label>
                                            <Label className="text-xs font-light text-gray-500/50">Edit this post within a hours</Label>
                                        </div>
                                    </div>

                                    <div className='flex gap-2 my-2'>
                                        <Ban className='w-5 h-5' />
                                        <div className='flex flex-col'>
                                            <Label className="text-xs font-semibold">Hide Post</Label>
                                            <Label className="text-xs font-light text-gray-500/50">Hide this post</Label>
                                        </div>
                                    </div>

                                    <div className='flex gap-2 my-2'>
                                        <Trash className='w-5 h-5' />
                                        <div className='flex flex-col'>
                                            <Label className="text-xs font-semibold">Delete Post</Label>
                                            <Label className="text-xs font-light text-gray-500/50">if inapporite post by mistake</Label>
                                        </div>
                                    </div>

                                    <div className='flex gap-2'>
                                        <FlagIcon className='w-5 h-5' />
                                        <div className='flex flex-col'>
                                            <Label className="text-xs font-semibold">Report Post</Label>
                                            <Label className="text-xs font-light text-gray-500/50">inapporite content</Label>
                                        </div>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                        <div className='flex gap-1 flex-col'>
                            <CardTitle className="text-sm font-semibold">Full Stack web Development One Shots</CardTitle>
                            <CardDescription className="text-xs font-normal line-clamp-3 text-gray-700/70">lorem30 Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</CardDescription>
                        </div>
                    </CardHeader>


                    <CardContent>
                        <div className="flex justify-center items-center w-full max-h-96 aspect-video overflow-hidden">
                            <video controls src={Video1.src} className="w-full h-full object-contain"></video>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <div className='flex justify-between items-center w-full'>
                            <div className='w-1/2 items-center gap-3 flex justify-between'>
                                <div className='flex gap-1 items-center py-1 px-3 border rounded-[6px] '>
                                    <ThumbsUp className='w-5 h-5 ' />
                                    <Label>like</Label>
                                </div>

                                <div className='flex gap-1 items-center py-1 px-3 border rounded-[6px] '>
                                    <MessageSquareText className='w-5 h-5 ' />
                                    <Label>comment</Label>
                                </div>

                                <div className='flex gap-1 items-center py-1 px-3 border rounded-[6px] '>
                                    <Share className='w-5 h-5 ' />
                                    <Label>share</Label>
                                </div>
                            </div>
                            <Bookmark />

                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

const CreateNewPost = () => {
    return (
        <>
            <div className="flex gap-2 flex-col my-2">
                <div className='w-1/2 flex items-center gap-5'>
                    <Button className='border bg-gray-200/70 rounded-lg ' >Home</Button>
                    <Button className='border bg-gray-200/70 rounded-lg ' >Recent</Button>
                    <Button className='border bg-gray-200/70 rounded-lg ' >Favourite</Button>
                </div>

                <div className='border rounded-xl bg-gray-200/20 p-5 flex flex-col gap-4'>
                    <Label className="font-semibold text-base">Create your post</Label>
                    <div className='relative flex items-center '>
                        <PenLine className='absolute left-0 ml-3' />
                        <Input className="rounded-2xl  bg-gray-300/40 pl-12" />
                    </div>
                    <div className='flex items-center gap-3 justify-between w-3/4'>
                        <div className='flex gap-1 items-center'>
                            <Image className='w-5 h-5' />
                            <Label>Image/video</Label>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <Smile className='w-5 h-5' />
                            <Label>Feeling/Activity</Label>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <Video className='w-5 h-5' />
                            <Label>Live Stream</Label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function NewsFeed() {
    return (
        <div className="container mx-auto px-4">
            <div>
                <CreateNewPost />
            </div>
            <div className='mt-8'>
                <RecentStories />
            </div>
            <div className='my-10'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}


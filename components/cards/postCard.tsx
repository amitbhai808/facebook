import { Ban, CalendarDays, Ellipsis, FlagIcon, Globe, PenBox, Trash } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Label } from "../ui/label"
import { ThumbsUp, MessageSquareText, Share, Bookmark } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Video from "@/public/images/image1.png"

export const PostCard = () => {
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
                            <video controls src={Video.src} className="w-full h-full object-contain"></video>
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
export default PostCard
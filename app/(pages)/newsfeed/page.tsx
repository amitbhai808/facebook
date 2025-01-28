import { Image, PenLine, Smile, Video, Ban, CalendarDays, Ellipsis, FlagIcon, Globe, PenBox, Trash, ThumbsUp, MessageSquareText, Share, Bookmark, Facebook, Tv, BookOpen, Book, Home, Clock, Star, Users, Lock } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import image1 from '@/public/images/image1.png'
import Video1 from "@/public/images/image1.png"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"



const postOptions = [
    { icon: <Image className="w-5 h-5" />, text: 'Photo / Video' },
    { icon: <Globe className="w-5 h-5" />, text: 'Location' },
    { icon: <PenBox className="w-5 h-5" />, text: 'GIF' },
    // ... other options
];

const quickActions = [
    { icon: <Image className="w-5 h-5" />, label: 'Image/video' },
    { icon: <Smile className="w-5 h-5" />, label: 'Feeling/Activity' },
    { icon: <Video className="w-5 h-5" />, label: 'Live Stream' },
];

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
}

async function fetchPosts(): Promise<{ posts: Post[] }> {
    const response = await fetch('https://dummyjson.com/posts', {
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}




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

interface PostCardProps {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: number;
}


export const PostCard = ({ id, title, body, tags, reactions }: PostCardProps) => {
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
                            <CardTitle className="text-sm font-semibold">{title}</CardTitle>
                            <CardDescription className="text-xs font-normal line-clamp-3 text-gray-700/70">{body}</CardDescription>
                            <div className="flex gap-3 items-center">
                                {tags?.map((tag, index) => (
                                    <Label key={index} className="text-xs font-semibold text-blue-500/70 hover:text-blue-600/70 border rounded-md px-2 py-1 cursor-pointer">{tag}</Label>
                                ))}
                            </div>
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

export const CreateNewPost = () => {
    return (
        <div className="flex gap-2 flex-col my-2">
            <div className='w-1/2 flex items-center gap-5'>
                <Button variant="ghost" className='hover:bg-gray-100 rounded-lg flex gap-2'>
                    <Home className="w-4 h-4" />
                    Home
                </Button>
                <Button variant="ghost" className='hover:bg-gray-100 rounded-lg flex gap-2'>
                    <Clock className="w-4 h-4" />
                    Recent
                </Button>
                <Button variant="ghost" className='hover:bg-gray-100 rounded-lg flex gap-2'>
                    <Star className="w-4 h-4" />
                    Favourite
                </Button>
            </div>

            <div className='border rounded-xl bg-white shadow-sm p-5 flex flex-col gap-4'>
                <Label className="font-semibold text-lg">Create your post</Label>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className='relative flex items-center cursor-pointer'>
                            <PenLine className='absolute left-0 ml-3 text-gray-500' />
                            <Input
                                className="rounded-2xl bg-gray-50 pl-12 hover:bg-gray-100 transition-colors"
                                placeholder="What's on your mind?"
                            />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="lg:max-w-[900px] h-[600px]">
                        <DialogHeader className="space-y-4">
                            <div className="flex justify-between items-center">
                                <DialogTitle className="text-2xl">Create Post</DialogTitle>
                                <Select defaultValue="public">
                                    <SelectTrigger className="w-[150px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="public">
                                            <div className="flex items-center gap-2">
                                                <Globe className="w-4 h-4" />
                                                Public
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="friends">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                Friends
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="private">
                                            <div className="flex items-center gap-2">
                                                <Lock className="w-4 h-4" />
                                                Only me
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src="/avatar.png" />
                                    <AvatarFallback>UN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">User Name</p>
                                    <p className="text-sm text-gray-500">@username</p>
                                </div>
                            </div>
                            <Separator />
                        </DialogHeader>

                        <div className="grid grid-cols-2 gap-6 h-full">
                            <div className="space-y-4">
                                <Textarea
                                    placeholder="What's on your mind?"
                                    className="min-h-[200px] text-lg"
                                />
                                <div className="grid grid-cols-3 gap-4">
                                    {postOptions.map((item, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className="flex flex-col gap-2 h-auto py-4 hover:bg-gray-50"
                                        >
                                            {item.icon}
                                            <span className="text-sm">{item.text}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="border-l pl-6">
                                <h3 className="font-semibold mb-4">Preview</h3>
                                {/* Add preview content */}
                            </div>
                        </div>

                        <DialogFooter>
                            <Button className="w-full">Post</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <div className='flex items-center gap-6 justify-start'>
                    {quickActions.map((action, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className="flex items-center gap-2 hover:bg-gray-50"
                        >
                            {action.icon}
                            <span>{action.label}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

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


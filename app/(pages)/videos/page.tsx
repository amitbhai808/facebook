
import { Input } from "@/components/ui/input";
import { Home, TrendingUp, Save, Tv, Globe, Ellipsis, Ban, Bookmark, FlagIcon, MessageSquareText, PenBox, Share, ThumbsUp, Trash } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/shareby/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import video1 from '@/public/images/image1.png'




export const WatchNavigationBar = () => {
  const navigationItems = [
    { icon: <Home />, label: "Home", href: "/home" },
    { icon: <TrendingUp />, label: "Latest", href: "/latest" },
    { icon: <TrendingUp />, label: "Trending", href: "/trending" },
    { icon: <Tv />, label: "Live", href: "/live" },
    { icon: <Save />, label: "Saved Videos", href: "/saved-videos" },
  ];

  return (
    <nav className="bg-blue-100 min-h-full p-4 rounded-[10px] mx-5">
      <div className="flex flex-col gap-3 min-h-full">
        <Label className="text-lg font-semibold">Watch</Label>
        <Input
          className="w-full rounded-xl border-none bg-gray-300/60 px-3 text-sm font-semibold 
                             text-black/70 placeholder:text-gray-500/60"
          placeholder="Search..."
        />

        <div className="flex flex-col gap-3  sticky top-20">
          {navigationItems.map(({ icon, label, href }, index) => (
            <a
              key={index}
              href={href}
              className="flex items-center space-x-2 p-2 hover:bg-gray-400/50 
                                     rounded-xl transition-colors"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
          <Separator className="bg-gray-400 my-2" />

          <div className="overflow-y-auto">
            <h4 className="text-lg font-semibold mt-4">Your Watch List</h4>
            <ul className="flex flex-col gap-2 mt-2">
              {[
                "Rosie Garebal",
                "Danial Cabral",
                "William John",
                "Adrew Jane",
                "Billgates",
                "Rita Arvind",
              ].map(name => (
                <li key={name} className="flex items-center space-x-2">
                  <img
                    src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`}
                    className="w-10 h-10 rounded-full"
                    alt={name}
                  />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};


export const VideoCard = () => {
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
              <video controls src={video1.src} className="w-full h-full object-contain"></video>
            </div>
          </CardContent>

          <CardFooter>
            <div className='flex justify-between items-center w-full'>
              <div className='w-auto items-center gap-3 flex justify-between'>
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
                  <Label>share</Label>g
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


const VideoLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 bg-white">
        <Header.PrimaryHeader />
      </div>
      <Header.SecondaryHeader />

      <div className="flex mx-20 pt-4">
        <aside className="basis-1/4 min-h-screen flex flex-col">
          <WatchNavigationBar />
        </aside>

        <main className="flex-1 flex gap-5 flex-col pb-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <VideoCard key={index} />
          ))}
        </main>
      </div>
    </div>
  );
};
export default VideoLayout
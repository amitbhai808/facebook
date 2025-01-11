import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Label } from "../ui/label"
import image1 from '@/public/images/image1.png';

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

export default RecentStories
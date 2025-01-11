import { Image, PenLine, Smile, Video } from "lucide-react"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"



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

export default CreateNewPost
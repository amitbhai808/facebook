import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"


const pictureprofileVideo = () => {
    return (
        <>
            {/* user profile image */}
            <Label>Picture 35</Label>
            <div className="flex gap-5 items-center">
                {
                    ["All Videos", "New Videos", 'Most Viewed', 'Mobile Videos'].map((item, index) =>
                    (
                        <Label className="border-b-2 pb-1 border-black/70 cursor-pointer " key={index}>{item}</Label>
                    ))
                }
            </div>
            <Separator className="bg-gray-500/70 my-5 " />

            <div className="grid grid-cols-4 gap-4 p-2">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div className="flex flex-col gap-1 items-center">
                        <Image src={'https://dummyjson.com/image/300x300'} width={300} height={200} alt="" key={index} />
                        <Label>video title</Label>
                    </div>
                ))}
            </div>


        </>

    )
}

export default pictureprofileVideo
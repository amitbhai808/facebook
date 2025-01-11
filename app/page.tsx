
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import image from '@/public/images/homeBanner.jpg'
import { Facebook, Heart, Instagram, Mail, MailsIcon, Phone, SquareCheckBig, User, Youtube } from 'lucide-react'
import { Lightbulb } from 'lucide-react'
import image1 from '@/public/images/image1.png';
import image2 from '@/public/images/image2.png';

import event1 from '@/public/images/event1.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import FeatureCard from '@/components/cards/featureCard'
import Image from 'next/image'
import Footer from '@/components/shareby/footer'
import Link from 'next/link'

const HomePage = () => {

  const features = [
    {
      title: "Learn from industry experts",
      description:
        "Share your research, collaborate with your peers, and get the support you need to advance your career.",
    },
    {
      title: "Collaborate effectively",
      description:
        "Work with like-minded individuals to build projects and achieve shared goals seamlessly.",
    },
    {
      title: "Access exclusive content",
      description:
        "Gain insights from exclusive resources and materials tailored for your growth.",
    },
  ]

  const topics = [
    "Engeneering", "development", "Biology", "Computer Science", "Climite", "Designing", "Art", "Cooking"
  ]

  return (
    <>
      <div className='flex flex-col lg:w-screen '>

        {/* header and banner */}
        <div className='relative '>
          {/* Banner Image */}
          <Image className=' w-full h-[85vh] object-cover' src={image} alt="banner" />

          {/* Overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-blue-900 to-transparent opacity-50  z-10'></div>

          {/* Header Content */}
          <div className='absolute top-0 left-0 right-0 flex justify-between items-center bg-black/50  px-6 py-4 z-20'>
            <div className='flex gap-5 items-center'>
              <Label className="text-xl font-semibold text-white">SocialMart</Label>
              <Input className="w-96 p-2 font-medium border-none rounded-xl bg-gray-500/80  text-white " placeholder="Search..." />
            </div>

            <div className='flex gap-5 items-center text-white'>
              <Label className="border border-white rounded-xl p-3">Today's NewsFeed</Label>
              <Label>Help</Label>
              <Label>Eng</Label>
              <Label>Login / Register</Label>
            </div>
          </div>

          {/* Call-to-Action Text */}
          <div className="absolute top-0 left-0 right-0 bottom-0 items-center flex justify-center flex-col text-white z-20">
            <Label className="font-semibold text-center px-6 sm:text-4xl md:text-6xl">
              Discover Your <span className='text-blue-500'>Scientific</span> <br />
              KnowLedge
            </Label>
            <Label className="text-2xl py-2 my-4">And stay Connected with your Friends</Label>
            <Link href="/newsfeed/">
              <Button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-lg p-5">Get Started</Button>
            </Link>
          </div>
        </div>


        {/* Features */}
        <div className="mx-5 md:mx-10 my-16 ">
          <div className="flex flex-wrap justify-evenly gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className=" mx-20 my-38">
          <div className=" w-full flex justify-between items-end">
            <div className='flex flex-col gap-1 items-center border px-20 py-5'>
              <SquareCheckBig />
              <Label className="text-2xl">599</Label>
              <Label className="text-sm">Reasercher</Label>
            </div>

            <div className='flex flex-col gap-1 items-center border px-20 py-5'>
              <SquareCheckBig />
              <Label className="text-2xl">599</Label>
              <Label className="text-sm">Reasercher</Label>
            </div>

            <div className='flex flex-col gap-1 items-center border px-20 py-5'>
              <SquareCheckBig />
              <Label className="text-2xl">599</Label>
              <Label className="text-sm">Reasercher</Label>
            </div>

            <div className='flex flex-col gap-1 items-center border px-20 py-5'>
              <SquareCheckBig />
              <Label className="text-2xl">599</Label>
              <Label className="text-sm">Reasercher</Label>
            </div>
          </div>
        </div>

        {/* Image and Text 1*/}
        <div className='md:mx-20 mb-5 mt-20 flex justify-center items-center'>
          <div className='grid grid-cols-10  justify-center items-center px-4'>
            <div className='col-span-6  gap-3 '>
              <Lightbulb />
              <div className='flex flex-col gap-6 pr-32'>
                <Label className="text-5xl font-light">Measure Your scientific impact</Label>
                <Label className="text-sm font-extralight">Get in depth stats on who's been reading your work and keep track of <br /> your citations.</Label>
              </div>
            </div>
            <div className='col-span-4 justify-center items-center w-[450px] h-[450px] border border-blue-500 rounded-xl border-dashed p-5'>
              <Image className='w-full h-full rounded-xl' src={image1} alt="img" />
            </div>
          </div>
        </div>


        {/* Image and Text 2*/}
        <div className='md:mx-20 mt-5 mb-20 flex  justify-center items-center'>
          <div className='grid grid-cols-10 gap-32  justify-center items-center px-4'>
            <div className='col-span-4 justify-center items-center w-[450px] h-[450px] border border-blue-500 rounded-xl border-dashed p-5'>
              <Image className='w-full h-full rounded-xl' src={image2} alt="img" />
            </div>
            <div className='col-span-6  gap-3 '>
              <Lightbulb />
              <div className='flex flex-col gap-6 pr-32'>
                <Label className="text-5xl font-light">Connect with Your <br /> scientific Community</Label>
                <div className='flex flex-wrap items-center justify-start gap-2 w-[500px]'>
                  {topics.map((topic) => (
                    <Label className="text-sm font-extralight border-blue-500 border rounded-xl py-1 px-3">{topic}</Label>
                  ))}
                </div>


              </div>
            </div>

          </div>
        </div>

        {/* Banner */}
        <div>
          <div className='relative'>
            <Image className='w-full h-[50vh] object-cover' src={image} alt="banner" />
            <div className='absolute left-0 right-0 top-0 bottom-0 bg-blue-900 opacity-35'>

            </div>


            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col gap-2'>
              <div className='flex flex-col gap-2 items-center'>
                <Label className="text-5xl font-semibold text-center text-white">Advance your research</Label>
                <Label className="text-2xl font-light text-center text-white">Share your research, collaborate with your peers, and get the support you need to advance your career.</Label>
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-lg p-5">Get Started</Button>
              </div>
            </div>
          </div>
        </div>

        {/* recent event  */}
        <div className='mx-20 my-10 flex flex-col justify-center items-center'>

          <div className='flex flex-col gap-5 items-center justify-between leading-5 '>
            <Label className="text-5xl font-semibold text-center ">Recent Events</Label>
            <Label className="text-sm text-gray-400 font-light  text-center">Our Recent News about the events.</Label>
          </div>


          <div className='flex justify-evenly items-center m-20 gap-10'>


            {/* event card  */}
            <div className='border-gray-900/50 bg-gray-100/40 border rounded-xl p-4'>
              <div className='w-72 overflow-hidden'>
                <Image className='hover:scale-105 ease-in-out duration-500 rounded-xl' src={event1} alt="event1" />
              </div>

              <div className='flex gap-5 my-4'>
                <div className='flex items-center gap-3'>
                  <Avatar className="ring-2 ring-black w-5 h-5 ">
                    <AvatarImage src={image1.src} alt="avatar" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Label>Saden joe</Label>
                </div>
                <div className='flex gap-2 items-center'>
                  <Heart className='w-4 h-4' />
                  <Label className="text-xs">3.2k</Label>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='bg-blue-500 text-white p-3 rounded-xl'>
                  <Label className="text-sm font-semibold">06 <br /> aug</Label>
                </div>
                <div>
                  <Label className="text-xl font-semibold line-clamp-2 ">Oddo is coming to dubai <br /> in 2020</Label>
                </div>
              </div>
            </div>


            {/* event card  */}
            <div className='border-gray-900/50 bg-gray-100/40 border rounded-xl p-4'>
              <div className='w-72 overflow-hidden'>
                <Image className='hover:scale-105 ease-in-out duration-500 rounded-xl' src={event1} alt="event1" />
              </div>

              <div className='flex gap-5 my-4'>
                <div className='flex items-center gap-3'>
                  <Avatar className="ring-2 ring-black w-5 h-5 ">
                    <AvatarImage src={image1.src} alt="avatar" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Label>Saden joe</Label>
                </div>
                <div className='flex gap-2 items-center'>
                  <Heart className='w-4 h-4' />
                  <Label className="text-xs">3.2k</Label>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='bg-blue-500 text-white p-3 rounded-xl'>
                  <Label className="text-sm font-semibold">06 <br /> aug</Label>
                </div>
                <div>
                  <Label className="text-xl font-semibold line-clamp-2 ">Oddo is coming to dubai <br /> in 2020</Label>
                </div>
              </div>
            </div>

            {/* event card  */}
            <div className='border-gray-900/50 bg-gray-100/40 border rounded-xl p-4'>
              <div className='w-72 overflow-hidden'>
                <Image className='hover:scale-105 ease-in-out duration-500 rounded-xl' src={event1} alt="event1" />
              </div>

              <div className='flex gap-5 my-4'>
                <div className='flex items-center gap-3'>
                  <Avatar className="ring-2 ring-black w-5 h-5 ">
                    <AvatarImage src={image1.src} alt="avatar" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Label>Saden joe</Label>
                </div>
                <div className='flex gap-2 items-center'>
                  <Heart className='w-4 h-4' />
                  <Label className="text-xs">3.2k</Label>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='bg-blue-500 text-white p-3 rounded-xl'>
                  <Label className="text-sm font-semibold">06 <br /> aug</Label>
                </div>
                <div>
                  <Label className="text-xl font-semibold line-clamp-2 ">Oddo is coming to dubai <br /> in 2020</Label>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* newslatter section  */}
        <div className='mx-20 my-10 flex justify-around py-5 rounded-xl shadow-xl items-center border border-gray-300/50'>
          <div className='flex gap-5 items-center justify-center'>

            <MailsIcon className='w-24 h-24 mx-auto' />
            <div className='flex flex-col items-start '>
              <Label className="text-sm text-blue-600/80 font-semibold  text-center">our newsletter</Label>
              <Label className="text-2xl font-bold text-center ">subscribe now</Label>
            </div>
          </div>
          <div className='flex gap-5 items-center justify-center relative'>
            <Input className="w-96 p-2 font-medium text-black/80 border-none placeholder:text-gray-500/80 px-5 bg-gray-300/60 rounded-xl" placeholder="Enter your email" />
            <Button className="absolute right-0 bg-blue-500/80 hover:bg-blue-600/80 text-white  rounded-xl text-lg p-3">Subscribe</Button>
          </div>
        </div>


        {/* what our students say */}
        <div className='mx-20 my-10 flex flex-col justify-center items-center gap-20'>
          <div className='flex flex-col justify-center items-center'>
            <Label className="text-4xl font-semibold text-center">What our Students Have Today!</Label>
            <Label className="text-base text-gray-400 font-light  text-center">Our Researchers have today now?</Label>
          </div>

          <div className='flex justify-evenly items-center gap-10'>
            {/* testimonial card  */}
            <div className='flex flex-col  items-center  gap-2 p-3'>
              <Avatar className="ring-2 ring-black w-20 h-20 ">
                <AvatarImage src={image1.src} alt="avatar" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Label className="text-2xl font-semibold text-center">Saden joe</Label>
              <Label className="text-sm text-gray-400 font-light  text-center">Our Researchers have today now?</Label>
              <Label className="text-sm font-light text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, nemo."</Label>
            </div>

            {/* testimonial card  */}
            <div className='flex flex-col items-center  gap-2 p-3'>
              <Avatar className="ring-2 ring-black w-20 h-20 ">
                <AvatarImage src={image1.src} alt="avatar" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Label className="text-2xl font-semibold text-center">Saden joe</Label>
              <Label className="text-sm text-gray-400 font-light  text-center">Our Researchers have today now?</Label>
              <Label className="text-sm font-light text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, nemo."</Label>
            </div>

            {/* testimonial card  */}
            <div className='flex flex-col items-center  gap-2 p-3'>
              <Avatar className="ring-2 ring-black w-20 h-20 ">
                <AvatarImage src={image1.src} alt="avatar" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Label className="text-2xl font-semibold text-center">Saden joe</Label>
              <Label className="text-sm text-gray-400 font-light  text-center">Our Researchers have today now?</Label>
              <Label className="text-sm font-light text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, nemo."</Label>
            </div>
          </div>
        </div>


        {/* footer */}
        <Footer />
      </div>
    </>
  )
}

export default HomePage
import { Facebook, Instagram, Mail, Phone, User, Youtube } from 'lucide-react'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Footer = () => {
    return (
        <div className="bg-[#003E8F] text-white mt-20 flex justify-evenly items-start px-20 py-10 flex-wrap ">
            {/* Column 1: Company Info */}
            <div className="flex flex-col gap-4 w-72">
                {/* Logo and Name */}
                <div className="flex items-center gap-2">
                    <User />
                    <Label className="text-lg font-semibold">SocialMart</Label>
                </div>

                {/* Description */}
                <Label className="text-sm font-light leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo.
                </Label>

                {/* Contact Info */}
                <div className="flex flex-col gap-2">
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <Label className="text-sm font-light">+9234567890</Label>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <Label className="text-sm font-light">Pajiyar808@gmail.com</Label>
                    </div>
                </div>
            </div>

            {/* Column 2: Company Links */}
            <div className="flex flex-col gap-4 w-40">
                <Label className="text-lg font-semibold">Company</Label>
                <ul className="space-y-1">
                    {["About Us", "Careers", "Privacy", "Terms", "FAQs", "Contact"].map((item, index) => (
                        <li key={index}>
                            <Label className="text-sm font-medium">{item}</Label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="flex flex-col gap-4 w-40">
                <Label className="text-lg font-semibold">Quick Links</Label>
                <ul className="space-y-1">
                    {["Product", "Market", "Courses", "Services", "Enterprise", "Sitemap"].map((item, index) => (
                        <li key={index}>
                            <Label className="text-sm font-medium">{item}</Label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div className="flex flex-col gap-4 w-40">
                <Label className="text-lg font-semibold">Follow Us</Label>
                <ul className="space-y-1">
                    {["Facebook", "Twitter", "Reddit", "Instagram", "Google", "WhatsApp"].map((item, index) => (
                        <li key={index}>
                            <Label className="text-sm font-medium">{item}</Label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 5: Newsletter */}
            <div className="flex flex-col gap-4 w-72">
                {/* Newsletter Header */}
                <Label className="text-lg font-semibold">Newsletter</Label>
                {/* Email Subscription Form */}
                <div className="relative">
                    <Input
                        className="w-full p-3 text-black placeholder-gray-500 bg-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                    <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl">
                        Subscribe
                    </Button>
                </div>
                {/* Description */}
                <Label className="text-sm font-light leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisci nulla voluptates?
                </Label>
                {/* Download App */}
                <Label className="text-lg font-semibold">Download App</Label>
                <div className="flex gap-4">
                    <Facebook />
                    <Youtube />
                    <Instagram />
                </div>
            </div>
        </div>
    )
}

export default Footer
import { SquareCheckBig } from 'lucide-react'
import React from 'react'
import { Label } from '../ui/label'

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
    return (
        <div className="flex flex-col p-3 bg-gray-600/50 w-96 max-w-md rounded-xl shadow-md">
            <div className="flex gap-5 items-start">
                <div className="flex items-center justify-center">
                    <SquareCheckBig />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium">{title}</Label>
                    <Label className="text-xs font-light">{description}</Label>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard
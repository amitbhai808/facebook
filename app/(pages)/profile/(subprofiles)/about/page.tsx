import { Label } from '@/components/ui/label'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About
          </h1>
        </div>
        
        <div className="flex-1 space-y-8">
          {/* Personal Information Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-purple-500">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              <InfoItem label="Gender" value="Male" />
              <InfoItem label="Religion" value="Islam" />
              <InfoItem label="Marital Status" value="Single" />
              <InfoItem label="Language" value="English" />
              <InfoItem label="Education" value="UnderGraduate" />
              <InfoItem label="Country" value="India" />
              <InfoItem label="Occupation" value="Student" />
              <InfoItem label="State" value="Uttar Pradesh" />
              <InfoItem label="City" value="Lucknow" />
            </div>
          </div>

          {/* Interests Section */}
          <div className="bg-white/5  backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-purple-500">Interests</h2>
            <div className="space-y-6">
              <InterestItem 
                title="Favourite TV Shows"
                content="Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy, The Last Windbender, Game of Wars"
              />
              <InterestItem 
                title="Favourite Music Bands / Artists"
                content="Iron Maid, DC/AC, Megablow, Kung Fighters, System of a Revenge, Rammstown"
              />
              <InterestItem 
                title="Favourite Movies"
                content="The Revengers Saga, The Scarred Wizard and the Fire Crown, Crime Squad, Metal Man, The Dark Rider, Watchers, The Impossible Heist"
              />
              <InterestItem 
                title="Favourite Books"
                content="The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water"
              />
              <InterestItem 
                title="Favourite Games"
                content="The First of Us, Assassin's Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const InfoItem = ({ label, value }: { label: string, value: string }) => (
  <div className="transition-all duration-300 hover:bg-white/5 p-2 rounded-lg">
    <Label className="flex gap-2 items-center text-black/80">
      {label}: <span className="text-blue-500 font-medium">{value}</span>
    </Label>
  </div>
)

const InterestItem = ({ title, content }: { title: string, content: string }) => (
  <div className="transition-all duration-300 hover:bg-white/5 p-3 rounded-lg">
    <Label className="block">
      <span className="block text-sm font-semibold text-black/70 mb-2">{title}</span>
      <span className="text-black/40 text-xs font-medium leading-relaxed">{content}</span>
    </Label>
  </div>
)

export default AboutPage
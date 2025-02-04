import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
    <div className="font-sans bg-gray-50 p-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-lg">
                <h1 className="text-3xl font-bold text-white">📱 SocioMart</h1>
                <p className="text-white/90 mt-2">Your Social Marketplace Revolution</p>
            </div>

            {/* Main Content */}
            <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Welcome aboard, {firstName}! 🎉
                </h2>

                <p className="text-gray-600 mb-6">
                    Get ready to experience the perfect blend of social networking and ecommerce.
                    Here's what awaits you:
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                        ['🛍️', 'Social Marketplace', 'Buy & sell within communities'],
                        ['👥', 'Groups & Networks', 'Connect with like-minded people'],
                        ['🎥', 'Video Hub', 'Watch & share videos'],
                        ['✍️', 'Blog Platform', 'Write & read articles'],
                        ['📢', 'Social Posts', 'Share moments & ideas'],
                        ['💬', 'Live Chat', 'Real-time conversations']
                    ].map(([icon, title, desc]) => (
                        <div key={title} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                            <span className="text-2xl mr-4">{icon}</span>
                            <div>
                                <h3 className="font-semibold text-gray-800">{title}</h3>
                                <p className="text-gray-600 text-sm">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href="#"
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg 
                    hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                    Complete Your Profile Now 🚀
                </a>

                {/* Social Proof */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/40?img=${i}`}
                                    alt="User"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">
                            Join 1M+ users connecting and trading daily
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-6 rounded-b-lg border-t border-gray-200">
                <div className="text-center text-sm text-gray-600">
                    <p>© 2024 SocioMart. All rights reserved.</p>
                    <div className="mt-2">
                        <a href="#" className="text-blue-600 hover:underline">Unsubscribe</a> |
                        <a href="#" className="text-blue-600 hover:underline ml-2">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
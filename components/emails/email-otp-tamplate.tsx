import * as React from 'react';

interface OTPEmailTemplateProps {
    firstName: string;
    otp: string;
}

export const OTPEmailTemplate: React.FC<Readonly<OTPEmailTemplateProps>> = ({ firstName, otp }) => (
    <div className="font-sans bg-gray-50 p-4 sm:p-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
                <h1 className="text-2xl font-bold text-white">🔒 SocioMart Security Verification</h1>
                <p className="text-white/90 mt-2 text-sm">Secure Access to Your Social Marketplace</p>
            </div>

            {/* Main Content */}
            <div className="p-6 sm:p-8">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Hi {firstName},
                    </h2>
                    <p className="text-gray-600 mt-2">
                        We received a request to access your SocioMart account. Use this One-Time Password (OTP) 
                        to verify your identity:
                    </p>
                </div>

                {/* OTP Display */}
                <div className="bg-blue-50 rounded-lg p-6 text-center mb-8">
                    <div className="flex items-center justify-center space-x-4">
                        <div className="text-4xl font-bold text-blue-700 tracking-wider">
                            {otp.match(/.{1,3}/g)?.join(' ') || otp}
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 transition-colors"
                                onClick={() => navigator.clipboard.writeText(otp)}>
                            📋 Copy
                        </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                        (Valid for 10 minutes)
                    </p>
                </div>

                {/* Security Tips */}
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                    <h3 className="font-semibold text-red-600 mb-2">⚠️ Security Tips:</h3>
                    <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
                        <li>Never share this OTP with anyone</li>
                        <li>SocioMart team will never ask for your OTP</li>
                        <li>Delete this email after verification</li>
                    </ul>
                </div>

                {/* Additional Info */}
                <div className="text-gray-600 text-sm">
                    <p>If you didn't request this OTP, please:</p>
                    <div className="mt-2 flex gap-4">
                        <a href="#" className="text-blue-600 hover:underline">Secure Your Account →</a>
                        <a href="#" className="text-blue-600 hover:underline">Contact Support →</a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-600">
                    <p>Need help? Reply to this email or visit our 
                        <a href="#" className="text-blue-600 hover:underline ml-1">Help Center</a>
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                        <span>•</span>
                        <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                    </div>
                    <p className="mt-4">© 2024 SocioMart. All rights reserved.</p>
                    
                    {/* Social Proof */}
                    <div className="mt-4 flex items-center justify-center space-x-2">
                        <div className="flex -space-x-2">
                            {[1,2,3].map((i) => (
                                <img 
                                    key={i}
                                    src={`https://i.pravatar.cc/32?img=${i+4}`} 
                                    alt="User"
                                    className="w-6 h-6 rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500">Trusted by 1M+ users worldwide</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
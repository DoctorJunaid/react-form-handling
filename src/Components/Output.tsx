import React from 'react'
import { User, Mail, Calendar, Users, CheckCircle, Eye, EyeOff } from 'lucide-react'

interface FormData {
    FirstName?: string
    LastName?: string
    age?: string
    gender?: string
    Email?: string
    Password?: string
    ConfirmPassword?: string
    checkbox?: boolean
}

interface OutputProps {
    formObj: FormData
}

const Output: React.FC<OutputProps> = ({ formObj }) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const isEmpty = !formObj || Object.keys(formObj).length === 0 || 
        Object.values(formObj).every(value => value === '' || value === undefined || value === null)

    if (isEmpty) {
        return (
            <div className="min-h-screen bg-[#605A71] flex items-center justify-center p-4">
                <div className="bg-[#2C2638] rounded-xl p-8 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-[#3C364C] rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-[#7F7B89]" />
                    </div>
                    <h2 className="text-2xl font-medium text-white mb-2">No Data Available</h2>
                    <p className="text-[#7F7B89]">Please fill out the form to see your information here.</p>
                </div>
            </div>
        )
    }

    const formatFieldName = (field: string) => {
        switch (field) {
            case 'FirstName': return 'First Name'
            case 'LastName': return 'Last Name'
            case 'Email': return 'Email Address'
            case 'age': return 'Age'
            case 'gender': return 'Gender'
            case 'Password': return 'Password'
            case 'ConfirmPassword': return 'Confirm Password'
            case 'checkbox': return 'Terms & Conditions'
            default: return field
        }
    }

    const getFieldIcon = (field: string) => {
        switch (field) {
            case 'FirstName':
            case 'LastName':
                return <User className="w-5 h-5 text-[#6D54B3]" />
            case 'Email':
                return <Mail className="w-5 h-5 text-[#6D54B3]" />
            case 'age':
                return <Calendar className="w-5 h-5 text-[#6D54B3]" />
            case 'gender':
                return <Users className="w-5 h-5 text-[#6D54B3]" />
            case 'checkbox':
                return <CheckCircle className="w-5 h-5 text-green-500" />
            default:
                return <User className="w-5 h-5 text-[#6D54B3]" />
        }
    }

    const renderFieldValue = (field: string, value: any) => {
        if (field === 'checkbox') {
            return (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    value ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                    {value ? 'Accepted' : 'Not Accepted'}
                </span>
            )
        }

        if (field === 'Password') {
            return (
                <div className="flex items-center gap-2">
                    <span className="font-mono text-[#7F7B89]">
                        {showPassword ? value : '•'.repeat(value?.length || 8)}
                    </span>
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[#7F7B89] hover:text-white transition-colors"
                    >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
            )
        }

        if (field === 'ConfirmPassword') {
            return (
                <div className="flex items-center gap-2">
                    <span className="font-mono text-[#7F7B89]">
                        {showConfirmPassword ? value : '•'.repeat(value?.length || 8)}
                    </span>
                    <button
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-[#7F7B89] hover:text-white transition-colors"
                    >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
            )
        }

        if (field === 'age') {
            return <span className="text-white font-medium">{value} years old</span>
        }

        return <span className="text-white font-medium">{value}</span>
    }

    return (
        <div className="min-h-screen bg-[#605A71] p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-medium text-white mb-2">
                        Account Information
                    </h1>
                    <p className="text-[#7F7B89] text-sm md:text-base">
                        Review your submitted information
                    </p>
                </div>

                {/* Main Content */}
                <div className="bg-[#2C2638] rounded-xl overflow-hidden">
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-[#6D54B3] to-[#493684] p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium text-white">
                                    {formObj.FirstName && formObj.LastName 
                                        ? `${formObj.FirstName} ${formObj.LastName}`
                                        : formObj.FirstName || formObj.LastName || 'User Profile'
                                    }
                                </h2>
                                <p className="text-purple-200">
                                    {formObj.Email || 'No email provided'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Information Cards */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(formObj).map(([field, value]) => {
                                if (!value && value !== false) return null

                                return (
                                    <div 
                                        key={field}
                                        className="bg-[#3C364C] rounded-lg p-4 transition-all duration-200 hover:bg-[#423B4D] group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1">
                                                {getFieldIcon(field)}
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-[#7F7B89] text-sm font-medium block mb-1">
                                                    {formatFieldName(field)}
                                                </label>
                                                <div className="text-white">
                                                    {renderFieldValue(field, value)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Password Match Indicator */}
                        {formObj.Password && formObj.ConfirmPassword && (
                            <div className="mt-6 p-4 bg-[#3C364C] rounded-lg">
                                <div className="flex items-center gap-3">
                                    {formObj.Password === formObj.ConfirmPassword ? (
                                        <>
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-green-400 font-medium">
                                                Passwords match
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            </div>
                                            <span className="text-red-400 font-medium">
                                                Passwords do not match
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-[#6D54B3] hover:bg-[#493684] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 active:scale-95">
                                Edit Information
                            </button>
                            <button className="flex-1 bg-[#3C364C] hover:bg-[#423B4D] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 active:scale-95">
                                Download Summary
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-[#7F7B89] text-sm">
                        This information is securely stored and processed according to our{' '}
                        <span className="text-purple-300 underline cursor-pointer hover:text-purple-200">
                            privacy policy
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Output
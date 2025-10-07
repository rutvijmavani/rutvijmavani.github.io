import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
    return (
        <div className = 'mt-20'>
            <div className = 'text-center'>
                <Image src = {isDarkMode ? assets.Rutvij_dark : assets.Rutvij} alt = '' className='w-36 mx-auto mb-2'></Image>
                <div className = 'w-max flex items-center gap-2 mx-auto '>
                    <Image src = {isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt = '' className='w-6'></Image>
                    <a href="mailto:rutvijmavani@gmail.com">rutvijmavani@gmail.com</a>
                </div>
            </div>

            <div className = 'text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
                <p>© 2025 Rutvij Mavani. All rights reserved.</p>
                <ul className = 'flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target = '_blank' href="https://github.com/rutvijmavani">Github</a></li>
                    <li><a target = '_blank' href="https://www.linkedin.com/in/mavanirutvij/">LinkedIn</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer

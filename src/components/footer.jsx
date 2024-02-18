import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className='mx-auto bg-[#1a1f24] w-[100%] mt-10 p-6'>
            <div className='mx-10 flex justify-between items-center flex-row'>
                <p className='text-white'>Copyright © 2024 Zorfts Technologies Ltd. All rights reserved.</p>
                <span className='text-white text-xl flex justify-end items-center flex-row gap-4'>
                    <FaXTwitter />
                    <FaInstagramSquare />
                    <FaLinkedin />
                    <FaWhatsappSquare />
                </span>
            </div>
        </div>
    </>
  )
}

export default Footer
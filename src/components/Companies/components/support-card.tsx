import { Box } from '@mui/material'
import React from 'react'
import support_bg from '@/companies/connect_bg.avif'
import img1 from '@/companies/micro-internships.avif'
import Image from 'next/image'
import ParaField from '@/components/common/Para-Field'
const SupportCard = () => {
    return (
        <Box sx={{ backgroundImage: `url(${support_bg.src})`, backgroundPosition: "50%", backgroundSize: "cover", border: "1px solid #f3f3f3", borderRadius: "20px", padding: "25px", position: 'relative' }}>
            <Image src={img1} alt="" />
            <ParaField label="Offer Micro-Internships" sx={{ fontSize: 24, fontWeight: 700 }} />
            <ParaField label="Host micro-internships or shadowing opportunities" sx={{ fontSize: 24, color: "#262626" }} />
        </Box>
    )
}

export default SupportCard
import { Box } from '@mui/material'
import React from 'react'
import support_bg from '@/companies/connect_bg.avif'
import img1 from '@/companies/micro-internships.avif'
import Image from 'next/image'
import ParaField from '@/components/common/Para-Field'
import { JOIN_CARD_PROPS } from '@/utils/types'
const SupportCard = ({ img, heading, description }: JOIN_CARD_PROPS) => {
    return (
        <Box sx={{ backgroundImage: `url(${support_bg.src})`, backgroundPosition: "50%", backgroundSize: "cover", border: "1px solid #f3f3f3", borderRadius: "20px", padding: "25px", position: 'relative' }}>
            <Image src={img} alt="" />
            <ParaField label={heading} sx={{ fontSize: 24, fontWeight: 700 }} />
            <ParaField label={description} sx={{ fontSize: 24, color: "#262626" }} />
        </Box>
    )
}

export default SupportCard
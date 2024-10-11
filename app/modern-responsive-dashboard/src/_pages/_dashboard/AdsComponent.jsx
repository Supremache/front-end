import { Box, alpha } from '@mui/material'
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function AdsComponent({ colors }) {
    const slides = [
        { logo: 'https://ausdroid.net/wp-content/uploads/2019/08/Android-master-logo_horizontal-RGB.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/1200px-NVIDIA_logo.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Intuit_logo_2022.svg/2560px-Intuit_logo_2022.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Norton-logo-2021.svg/1280px-Norton-logo-2021.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1024px-PayPal_logo.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Autodesk_Logo.svg/2560px-Autodesk_Logo.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Symantec_logo10.svg/2560px-Symantec_logo10.svg.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HubSpot_Logo.png/640px-HubSpot_Logo.png' },
        { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png' },
    ];

    const duplicatedSlides = [...slides, ...slides];

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: alpha(colors.primary[400], .77),
                border: `2px solid ${colors.primary[400]}`,
                borderRadius: '10px',
                p: 2,
                mx: 'auto',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 20,
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '25%',
                        height: '100%',
                        background: `linear-gradient(to right, transparent, transparent)`,
                        filter: 'blur(3px)',
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '25%',
                        height: '100%',
                        background: 'linear-gradient(to left, transparent, transparent)',
                        filter: 'blur(3px)',
                    },
                }}
            />
            <MotionBox
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                    alignItems: 'center',
                }}
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    },
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <Box key={index} sx={{ flexShrink: 0, width: `${100 / slides.length}%`, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Box component="img" src={slide.logo} alt={`slide-logo-${index}`} sx={{ maxHeight: '100%', maxWidth: '100%' }} />
                    </Box>
                ))}
            </MotionBox>
        </Box>
    )
}

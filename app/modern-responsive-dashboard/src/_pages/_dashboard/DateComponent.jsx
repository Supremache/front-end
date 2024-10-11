import { useEffect, useRef } from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { Box, Chip, Typography } from '@mui/material';

export default function DateComponent({ theme }) {
    const today = new Date();
    const monthName = format(today, 'MMMM');
    const scrollContainerRef = useRef(null);

    // Generate multiple weeks for infinite scroll effect
    const weeks = [];
    let start = startOfWeek(today);
    for (let i = -4; i <= 4; i++) {
        const week = Array.from({ length: 7 }, (_, j) => addDays(start, j + i * 7));
        weeks.push(week);
    }

    // Handle drag to scroll
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current);// * 2; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // Center the scroll position on the current day
    useEffect(() => {
        if (scrollContainerRef.current) {
            const currentDayElement = scrollContainerRef.current.querySelector('.current-day');
            if (currentDayElement) {
                const containerWidth = scrollContainerRef.current.offsetWidth;
                const elementLeft = currentDayElement.offsetLeft;
                const elementWidth = currentDayElement.offsetWidth;
                scrollContainerRef.current.scrollLeft = elementLeft - (containerWidth / 2) + (elementWidth / 2);
            }
        }
    }, []);
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: 2,
        }}>
            <Box>
                <Chip label={monthName} size="small" sx={{ m: .5 }} />
            </Box>
            <Box
                ref={scrollContainerRef}
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'hidden',
                    cursor: 'grab',
                    width: '100%',
                    bottom: 0,
                    zIndex: 10,
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {weeks.map((week, weekIndex) => (
                    week.map((day, dayIndex) => (
                        <Box
                            key={`${weekIndex}-${dayIndex}`}
                            className={isSameDay(day, today) ? 'current-day' : ''}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: 2,
                                borderRadius: '10px',
                                width: 40,
                                height: 60,
                                m: 0.5,

                                boxShadow: isSameDay(day, today) ? 1 : 0,
                                backgroundColor: isSameDay(day, today) ? theme.palette.background.default : 'transparent',
                            }}
                        >
                            <Typography variant="body2" color={isSameDay(day, today) ? 'secondary' : 'neutral'}>
                                {format(day, 'EEE')}
                            </Typography>
                            <Typography variant="body2" color={isSameDay(day, today) ? 'secondary' : 'neutral'}>
                                {format(day, 'd')}
                            </Typography>
                        </Box>
                    ))
                ))}
            </Box>
        </Box>
    )
}

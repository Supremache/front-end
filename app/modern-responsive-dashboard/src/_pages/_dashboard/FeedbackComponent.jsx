import { Avatar, Box, Button, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}


export default function FeedbackComponent({ theme, data }) {
    const maxLength = 25;
    const [isTruncated, setIsTruncated] = useState(data.map(() => true));

    const toggleTruncated = (index) => {
        setIsTruncated((prev) => {
            const newTruncated = [...prev];
            newTruncated[index] = !newTruncated[index];
            return newTruncated;
        });
    };


    return (
        <div>
            {data.map((item, index) => (
                <Box
                    key={index}
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: theme.palette.background.default,
                        borderRadius: '10px',
                        gap: 1,
                        p: 1,
                        my: 1
                    }}>

                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: stringToColor(item.name),
                            }}
                            alt={item.name}
                            src="/static/images/avatar/1.jpg"
                        >
                            {`${item.name.split(' ')[0][0]}${item.name.split(' ')[1][0]}`}
                        </Avatar>

                        <Box sx={{ flexGrow: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography variant="body1" fontWeight={600} color="text.primary">
                                    {item.name}
                                </Typography>
                                <Rating
                                    name={`rating-${index}`}
                                    value={item.rating}
                                    max={5}
                                    readOnly
                                />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                                <Typography variant="body2" color="text.secondary">Order Date:</Typography>
                                <Typography variant="body2" color="secondary">{item.orderDate || 'N/A'}</Typography>
                            </Box>

                        </Box>
                    </Box>
                    <Box sx={{ m: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                            {isTruncated[index] ? item.message.slice(0, maxLength) + '...' : item.message}
                            {item.message.length > maxLength && (
                                <Button sx={{ p: 0 }} size="small" onClick={() => toggleTruncated(index)} color="secondary">
                                    {isTruncated[index] ? 'Read more' : 'Show less'}
                                </Button>
                            )}
                        </Typography>
                    </Box>
                </Box>
            ))
            }
        </div >
    )
}

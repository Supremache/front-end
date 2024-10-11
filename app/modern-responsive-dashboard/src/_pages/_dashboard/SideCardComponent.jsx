import { Avatar, AvatarGroup, Box, IconButton, Typography, alpha } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SideCardComponent({ theme, colors, icon, title, subTitle, value, projects, data }) {

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

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: theme.palette.background.default,
            gap: 3,
            p: 2,
            borderRadius: '10px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                alignItems: 'center'
            }}>
                <Box sx={{
                    display: 'flex',
                    p: 2,
                    maxWidth: '52px',
                    borderRadius: '10px',
                    alignItems: "center",
                    bgcolor: alpha("hsl(201, 52%, 76%)", .2),
                    color: "hsl(201, 52%, 76%)"
                }}>
                    {icon}
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <Typography variant="h4" color="neutral">{title}</Typography>
                    <Typography variant="body2" color={theme.palette.
                        // @ts-ignore
                        neutral.main}>{projects} projects</Typography>
                    <Typography variant="body1" color='secondary'>{value} {subTitle}</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex'
            }}>
                <AvatarGroup total={value} >
                    {data.map((item, index) => (
                        <Avatar
                            key={index}
                            sx={{
                                bgcolor: stringToColor(item.name)
                            }}
                            children={`${item.name.split(' ')[0][0]}${item.name.split(' ')[1][0]}`}
                            alt={item.name}
                            src={item.src}
                        />
                    ))}
                </AvatarGroup>
            </Box>
            <Box sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
            }}>
                <IconButton sx={{
                    bgcolor: alpha(colors.primary[400], .77),
                    borderRadius: '10px 0',
                }}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

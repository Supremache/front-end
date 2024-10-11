import { Box, Typography, alpha, useTheme } from "@mui/material"
import MyResponsiveLine from '../../_pages/_line/MyResponsiveLine';
import { tokens } from '../../theme';


export default function CardComponent({title, data, icon, color, scheme, isSale = false}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const Data = data
    const getTotalCount = (data) => {
        return new Intl.NumberFormat().format(data.reduce((total, item) => total + item.y, 0));
    };

    return (
        <Box sx={{
            display: 'flex',
            bgcolor: alpha(colors.primary[400], .77),
            width: "200px",
            // @ts-ignore
            border: `2px solid ${colors.primary[400]}`,
            borderRadius: '10px',
            p: 1,
            gap: 1.5,
        }}>

            <Box sx={{
                display: 'flex',
                m: '5px 0',
                p: 2,
                borderRadius: '10px',
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: alpha(color, .2),
                color: color
            }}>
                {icon}
                {/* <GroupIcon sx={{ fontSize: '25px', color: 'hsl(27, 61%, 77%)' }} /> */}
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,

            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography
                        variant="body2"
                        // @ts-ignore
                        color={theme.palette.neutral.light}
                    >{title}
                        {/* Total Staff */}
                    </Typography>

                    <Typography variant="body1" color= {color}>{isSale ? '$' : ''}{getTotalCount(Data[0].data)}</Typography>
                </Box>

                <Box sx={{ height: '30px', width: '115px' }}>
                    <MyResponsiveLine LineData={Data} isDashboard={true} scheme={scheme} />
                </Box>
            </Box>
        </Box>
    )
}

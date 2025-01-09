import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  Divider,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { getAllBlogPosts } from "../../blog/data";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  

  useEffect(() => {
    getAllBlogPosts().then(setAllPosts);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [activeCard, setActiveCard] = useState(null); // Keep track of the currently hovered card

  // Function to handle the tilt effect
  const handleMouseMove = (e, index) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;

    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    const rotateX = ((y - cardHeight / 2) / cardHeight) * 10;
    const rotateY = ((x - cardWidth / 2) / cardWidth) * -10;

    setActiveCard({
      index,
      style: {
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`,
      },
    });
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <Box
      component={"section"}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 500,
          margin: "0 auto",
          mb: 5,
        }}
      >
        <Typography level="title-md" color="primary">
          Blogs
        </Typography>

        <Typography
          level="h2"
          variant="plain"
          textColor={"text.primary"}
          textTransform={"capitalize"}
        >
          Browse the ISTIDAFA blog
        </Typography>

        <Typography level="body-md" textColor="text.tertiary">
          Showcase the experiences and feedback from real users.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
          gap: 3,
          flexWrap: "wrap",
          perspective: "1000px",
        }}
      >
        {allPosts.slice(0, 3).map((item, index) => (
          <Card
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => (navigate(`/blog/${item.slug}`))}
            key={index}
            variant="plain"
            sx={{
              height: 500,
              width: "100%",
              cursor: "pointer",
              transform:
                activeCard?.index === index
                  ? activeCard.style.transform
                  : "rotateX(0deg) rotateY(0deg)",
              transition: "transform 0.3s ease-out",
              ":hover": {
                "& .icon": {
                  transform: "translate(3px, -3px)",
                },
              },
            }}
          >
            <CardCover>
              <Box
                component={"img"}
                src={item.img}
                loading="lazy"
                alt={item.title}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgba(255,255,255, .12)",
                }}
              />
            </CardCover>
            <CardContent sx={{ justifyContent: "flex-end", gap: 1 }}>
              <Typography level="title-lg" textColor="neutral.100">
                {item.title}
              </Typography>
              <Typography
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}
                textColor="neutral.300"
                level="body-sm"
              >
                {item.content}
              </Typography>
              <Typography
                // variant={null}
                color="neutral"
                sx={{ color: "neutral.100" }}
                endDecorator={
                  <ArrowOutwardRoundedIcon
                    sx={{ transition: ".3s ease" }}
                    className="icon"
                  />
                }
                level="title-sm"
              >
                Read more
              </Typography>
            </CardContent>
          </Card>
          // <Card
          //   key={item.img}
          //   variant="plain"
          //   size="md"
          // >
          //   <AspectRatio ratio="21/9">
          //     {loading ? (
          //       <Skeleton animation="wave" variant="overlay">
          //         <Box
          //           component={"img"}
          //           alt="loading"
          //           src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          //         />
          //       </Skeleton>
          //     ) : (
          //       <Box
          //         component={"img"}
          //         alt={item.title}
          //         src={item.img}
          //         color={"beige"}
          //       />
          //     )}
          //   </AspectRatio>

          //   <Typography level="title-lg" sx={{ overflow: "hidden", mt: 2 }}>
          //     {loading ? (
          //       <Skeleton animation="wave" variant="text" sx={{ width: 200 }} />
          //     ) : (
          //       item.title
          //     )}
          //   </Typography>

          //   <Typography
          //     level="body-sm"
          //     sx={{
          //       overflow: "hidden",
          //       display: "-webkit-box",
          //       WebkitLineClamp: 1,
          //       WebkitBoxOrient: "vertical",
          //       textOverflow: "ellipsis",
          //     }}
          //   >
          //     {loading ? (
          //       <>
          //         <Skeleton animation="wave" variant="text" sx={{ width: 350 }} />
          //         <Skeleton animation="wave" variant="text" sx={{ width: 350 }} />
          //         <Skeleton animation="wave" variant="text" sx={{ width: 200 }} />
          //       </>
          //     ) : (
          //       <>{item.description}</>
          //     )}
          //   </Typography>

          //   {!loading && (
          //     <Button
          //       endDecorator={<ArrowOutwardRoundedIcon />}
          //       sx={{ mt: 1 }}
          //       size="sm"
          //     >
          //       Read more
          //     </Button>
          //   )}
          //   <Divider inset="none" />

          //   <CardContent orientation="horizontal">
          //     {loading ? (
          //       <>
          //         <Skeleton
          //           animation="wave"
          //           variant="circular"
          //           width={40}
          //           height={40}
          //         />
          //         <div>
          //           <Skeleton
          //             animation="wave"
          //             variant="text"
          //             sx={{ width: 120 }}
          //           />
          //           <Skeleton
          //             animation="wave"
          //             variant="text"
          //             sx={{ width: 200 }}
          //           />
          //         </div>
          //       </>
          //     ) : (
          //       <>
          //         <Avatar alt={item.authorName} src={item.authorImg} size="sm" />
          //         <div>
          //           <Typography level="title-sm">{item.authorName}</Typography>
          //           <Typography level="body-xs">{item.date}</Typography>
          //         </div>
          //       </>
          //     )}
          //   </CardContent>
          // </Card>
        ))}
      </Box>
    </Box>
  );
}

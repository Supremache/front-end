import {
  AspectRatio,
  Avatar,
  AvatarGroup,
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { cardData, getAllBlogPosts } from "./data";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography level="body-sm" textColor={"text.primary"}>
          {authors.map((author) => author.name).join(", ")}
        </Typography>
      </Box>
      <Typography level="body-xs">July 14, 2021</Typography>
    </Box>
  );
}

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  textDecoration: "none",
  "&:hover": { cursor: "pointer" },
  "& .arrow": {
    visibility: "hidden",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&:hover .arrow": {
    visibility: "visible",
    opacity: 0.7,
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "3px",
    borderRadius: "8px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "1px",
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.text.primary,
    opacity: 0.3,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [focusedCardIndex, setFocusedCardIndex] = useState(null);
  const [allPosts, setAllPosts] = useState([])
  const [post, setPost] = useState(null); 

  useEffect(() => {
    getAllBlogPosts().then((posts) => {
      setAllPosts(posts);
      const foundPost = posts.find((p) => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        navigate("*");
      }
    });
  }, [slug, navigate]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info("You clicked the filter chip.");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Breadcrumbs aria-label="breadcrumbs">
        {["Home", "Blog"].map((item) => (
          <Link
            key={item}
            color="neutral"
            onClick={() => {
              navigate(`/${item}`.toLowerCase());
            }}
          >
            {item}
          </Link>
        ))}
        <Typography>{post.title}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Main Section (Latest Posts) */}
        <Grid
          container
          spacing={0}
          xs={12}
          md={8}
          sx={{ order: { xs: 1, md: 2 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <AspectRatio ratio="16/9">
              <Box
                component={"img"}
                alt={post.title}
                src={post.img}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "sm",
                }}
              />
            </AspectRatio>
            <Author authors={post.authors} />
            <Typography level="h2" gutterBottom>
              {post.title}
            </Typography>
            <Typography level="body-md">{post.content}</Typography>
          </Box>

          <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography level="body-sm">Share this post:</Typography>
              <Tooltip title="Facebook" variant="outlined">
              <IconButton
                variant="outlined"
                size="sm"
                aria-label="Share on Facebook"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                component="a"
              >
                <FacebookIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="Twitter" variant="outlined">
              <IconButton
                variant="outlined"
                size="sm"
                aria-label="Share on Twitter"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                component="a"
              >
                <TwitterIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn" variant="outlined">
              <IconButton
                variant="outlined"
                size="sm"
                aria-label="Share on LinkedIn"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                component="a"
              >
                <LinkedInIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="WhatsApp" variant="outlined">
              <IconButton
                variant="outlined"
                size="sm"
                aria-label="Share on WhatsApp"
                href={`https://wa.me/?text=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                component="a"
              >
                <WhatsAppIcon />
              </IconButton>
              </Tooltip>
            </Stack>
            
          <Box
            sx={{
              mt: 5,
            }}
          >
            <Divider sx={{ mb: 2 }} />
            <Typography level="h4" gutterBottom>
              Latest Posts
            </Typography>
            <Grid container spacing={2}>
              {allPosts.filter((p) => p.slug !== post.slug).slice(0, 5).map((post, index) => (
                <Grid xs={12} sm={6} md={4} key={index}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      transition: ".3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: "md",
                        borderColor: "neutral.outlinedHoverBorder",
                        bgcolor: "transparent",
                      },
                    }}
                    onClick={() =>  navigate(`/blog/${post.slug}`)}
                  >
                    <AspectRatio ratio="16/9">
                      <img
                        src={post.img}
                        alt={post.title}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </AspectRatio>
                    <CardContent
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Chip variant="outlined" size="sm">
                        {post.tag}
                      </Chip>
                      <Typography level="title-md">{post.title}</Typography>
                      <StyledTypography level="body-sm" sx={{ mb: 2 }}>
                        {post.content}
                      </StyledTypography>
                      <Author authors={post.authors} />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Aside Section (Popular Posts) */}
        <Grid xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
          <Box>
            <Typography level="h4" gutterBottom>
              Popular Posts
            </Typography>
            {allPosts.filter((p) => p.slug !== post.slug).map((post, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  height: "100%",
                  mb: 2,
                }}
                onFocus={() => handleFocus(0)}
                onBlur={handleBlur}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <Chip size="sm" variant="outlined">
                    {post.tag}
                  </Chip>

                  <TitleTypography
                    gutterBottom
                    level="title-md"
                    onFocus={() => handleFocus(index)}
                    onBlur={handleBlur}
                    tabIndex={0}
                    className={focusedCardIndex === index ? "Mui-focused" : ""}
                    onClick={() =>  navigate(`/blog/${post.slug}`)}
                  >
                    {post.title}
                    <NavigateNextRoundedIcon
                      className="arrow"
                      sx={{ fontSize: "1rem" }}
                    />
                  </TitleTypography>
                  <StyledTypography level="body-sm" textColor="text.secondary">
                    {post.content}
                  </StyledTypography>

                  <Author authors={post.authors} />
                </CardContent>
              </Card>
            ))}

            <Card>
              <CardContent>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {cardData.map((tag, index) => (
                    <Chip
                      key={index}
                      onClick={handleClick}
                      variant="soft"
                      color="neutral"
                    >
                      {tag.tag}
                    </Chip>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

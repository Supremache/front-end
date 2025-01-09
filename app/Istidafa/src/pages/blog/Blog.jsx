import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  IconButton,
  Input,
  AspectRatio,
  Grid,
  AvatarGroup,
  Avatar,
  Breadcrumbs,
  Link,
  Stack,
  styled,
} from "@mui/joy";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { getAllBlogPosts } from "./data";
import { Hidden, useMediaQuery } from "@mui/material";

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
        <Typography level="body-sm" textColor="text.primary">
          {authors.map((author) => author.name).join(", ")}
        </Typography>
      </Box>
      <Typography level="body-xs">July 14, 2021</Typography>
    </Box>
  );
}

function Search() {
  return (
    <Input
      size="sm"
      startDecorator={<SearchRoundedIcon />}
      placeholder="Search…"
      aria-label="Search blog posts"
      sx={{ flexGrow: 1 }}
    />
  );
}

function BlogCard({ post, onClick, hidden = false }) {

  return (
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
      onClick={onClick}
    >
      <Box sx={{ display: hidden ? { xs: 'block', md: 'none' } : 'block' }}>
      <AspectRatio ratio="16/9">
        <img
          src={post?.img}
          alt={post?.title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </AspectRatio>
    </Box>
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Chip variant="outlined" size="sm">
          {post?.tag}
        </Chip>
        <Typography level="title-md">{post.title}</Typography>
        <StyledTypography level="body-sm" sx={{ mb: 2 }}>
          {post?.content}
        </StyledTypography>
        <Author authors={post?.authors} />
      </CardContent>
    </Card>
  );
}

export default function Blog() {
  const navigate = useNavigate();
  const [allPosts, setAllPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All categories");

  useEffect(() => {
    getAllBlogPosts().then(setAllPosts);
  }, []);

  const handleNavigate = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const filteredPosts =
    selectedTag === "All categories"
      ? allPosts
      : allPosts.filter((post) => post.tag === selectedTag);

  const tags = ["All categories", ...allPosts.map((post) => post.tag)];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Breadcrumbs aria-label="breadcrumbs">
        <Link
          onClick={() => {
            navigate("/");
          }}
          color="neutral"
        >
          Home
        </Link>
        <Typography>Blog</Typography>
      </Breadcrumbs>

      <Box>
        <Typography level="h1">Blog</Typography>
        <Typography level="body-md">
          Stay in the loop with the latest about our products
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            order: { xs: 2, md: 1 },
          }}
        >
          {tags.map((tag, index) => (
            <Chip
              key={index}
              onClick={() => setSelectedTag(tag)}
              variant={selectedTag === tag ? "outlined" : "plain"}
            >
              {tag}
            </Chip>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "auto" },
            overflow: "auto",
            order: { xs: 1, md: 2 },
          }}
        >
          <Search />
          <IconButton
            size="sm"
            variant="outlined"
            color="neutral"
            aria-label="RSS Feed"
          >
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {/* {filteredPosts.slice(0, 6).map((post, index) => (
          <Grid xs={12} md={index < 2 ? 6 : 4} key={post.slug}>
            <BlogCard post={post} onClick={() => handleNavigate(post.slug)} />
          </Grid>
        ))} */}
        {filteredPosts[0] && (
          <Grid xs={12} md={6}>
            <BlogCard
              post={filteredPosts[0]}
              onClick={() => handleNavigate(filteredPosts[0]?.slug)}
            />
          </Grid>
        )}
        {filteredPosts[1] && (
          <Grid xs={12} md={6}>
            <BlogCard
              post={filteredPosts[1]}
              onClick={() => handleNavigate(filteredPosts[1]?.slug)}
            />
          </Grid>
        )}
        {filteredPosts[2] && (
          <Grid xs={12} md={4}>
            <BlogCard
              post={filteredPosts[2]}
              onClick={() => handleNavigate(filteredPosts[2]?.slug)}
            />
          </Grid>
        )}
        {filteredPosts[3] && (
          <Grid xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "100%",
              }}
            >
              {filteredPosts[3] && (
                <BlogCard
                  post={filteredPosts[3]}
                  onClick={() => handleNavigate(filteredPosts[3]?.slug)}
                  hidden={true}
                />
              )}
              {filteredPosts[4] && (
                <BlogCard
                  post={filteredPosts[4]}
                  onClick={() => handleNavigate(filteredPosts[4]?.slug)}
                  hidden={true}
                />
              )}
            </Box>
          </Grid>
        )}
        {filteredPosts[5] && (
          <Grid xs={12} md={4}>
            <BlogCard
              post={filteredPosts[5]}
              onClick={() => handleNavigate(filteredPosts[5]?.slug)}
            />
          </Grid>
        )}
      </Grid>

      <Grid container spacing={4}>
        {/* Main Section (Latest Posts) */}
        <Grid xs={12} md={8} sx={{ order: { xs: 1, md: 2 } }}>
          <Box>
            <Typography level="h4" gutterBottom>
              Latest Posts
            </Typography>
            {allPosts.slice(0, 10).map((post, index) => (
              <Card
                key={index}
                variant="plain"
                sx={{
                  height: "100%",
                  mb: 2,
                  transition: ".3s  ease",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                    bgcolor: "transparent",
                  },
                }}
                onClick={() => handleNavigate(post.slug)}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Chip size="sm" variant="outlined">
                    {post.tag}
                  </Chip>

                  <TitleTypography gutterBottom level="title-md" tabIndex={0}>
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
          </Box>
          <Pagination />
        </Grid>

        {/* Aside Section (Popular Posts) */}
        <Grid xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
          <Box>
            <Typography level="h4" gutterBottom>
              Popular Posts
            </Typography>
            {allPosts.slice(0, 8).map((post, index) => (
              <Card
                key={post.slug}
                variant="outlined"
                sx={{
                  height: "100%",
                  mb: 2,
                }}
                onClick={() => handleNavigate(post.slug)}
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

                  <TitleTypography gutterBottom level="title-md" tabIndex={0}>
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
                  {tags
                    .filter((tag) => tag !== "All categories")
                    .map((tag, index) => (
                      <Chip
                        key={index}
                        onClick={() => setSelectedTag(tag)}
                        variant="soft"
                        color="neutral"
                      >
                        {tag}
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

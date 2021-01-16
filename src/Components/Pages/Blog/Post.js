import React from "react";
import { Redirect } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent, CardMedia, Divider } from "@material-ui/core";
import Markdown from "react-markdown";

import ScrollToTop from "../../ScrollToTop";
import postList from "../../../posts.json";
import "./Posts.css";

const Post = (props) => {
  const RenderPost = () => {
    const fetchedPost = postList.find((x) => x.id === props.match.params.id);
    if (fetchedPost == null) {
      return <Redirect to="/404" />;
    }

    fetchedPost.title = fetchedPost.title
      ? fetchedPost.title
      : "No title given";
    fetchedPost.author = fetchedPost.author
      ? fetchedPost.author
      : "No author given";
    fetchedPost.date = fetchedPost.date ? fetchedPost.date : "No date given";
    fetchedPost.content = fetchedPost.content
      ? fetchedPost.content
      : "No content given";

    // console.log(fetchedPost);

    return (
      <Grid
        container
        item
        xs={11}
        sm={9}
        md={7}
        xl={5}
        spacing={3}
        direction="column"
        justify="center"
        alignItems="stretch"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Card>
          {fetchedPost.thumbnail ? (
            <CardMedia
              component="img"
              src={fetchedPost.thumbnail}
              title={fetchedPost.title}
            />
          ) : (
            <></>
          )}
          <CardContent>
            <Typography variant="h4">{fetchedPost.title}</Typography>
            <Typography variant="subtitle1">
              Published on {fetchedPost.date} by {fetchedPost.author}
            </Typography>
            <Divider />
            <Markdown
              source={fetchedPost.content}
              escapeHtml={false}
              className="postContent"
            />
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "25px" }} />
      {RenderPost()}
    </div>
  );
};

export default Post;

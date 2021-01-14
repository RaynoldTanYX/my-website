import React from "react";
import { Redirect } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import Markdown from "react-markdown";

import ScrollToTop from "../../ScrollToTop";
import postList from "../../../posts.json";

const Post = (props) => {

  const RenderPost = () => {
    const validId = parseInt(props.match.params.id)
    if (!validId)
    {
      return <Redirect to="/404"/>
    }

    const fetchedPost = {};
    postList.forEach((post, i) => {
      if (validId === post.id) {
        fetchedPost.title = post.title ? post.title : "No title given";
        fetchedPost.author = post.author ? post.author : "No author given";
        fetchedPost.date = post.date ? post.date : "No date given";
        fetchedPost.content = post.content ? post.content : "No content given";
        console.log(fetchedPost);
      }
    })

    return(
      <Grid container item
      xs={11}
      sm={9}
      md={7}
      xl={5}
      spacing={3}
      direction="column"
      justify="center"
      alignItems="stretch"
      style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Card>
        <CardContent>
          <Typography variant="h4">
            {fetchedPost.title}
          </Typography>
          <Typography variant="subtitle1">
            Published on {fetchedPost.date} by {fetchedPost.author}
          </Typography>
          <Markdown source={fetchedPost.content} escapeHtml={false}/>
        </CardContent>
      </Card>
      </Grid>)
  }

  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "25px" }} />
      {RenderPost()}
    </div>
  );
}

export default Post;

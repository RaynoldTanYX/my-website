import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

import ScrollToTop from "../../ScrollToTop";
import postList from "../../../posts.json";
import "./Posts.css";

function PostsList() {
  const RenderPostsList = () => {
    const excerptList = postList.map((post) => {
      return post.content.split(" ").slice(0, 50).join(" ") + "...";
    });
    return (
      <div>
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
          {postList.length &&
            postList.map((post, i) => {
              return (
                <Grid item key={i}>
                  <Card>
                    {post.thumbnail ? (
                      <CardMedia
                        component="img"
                        src={post.thumbnail}
                        title={post.title}
                      />
                    ) : (
                      <></>
                    )}

                    <CardContent>
                      <Typography variant="h4" className="postTitle">
                        <Link
                          to={`/post/${post.id}`}
                          color="inherit"
                          underline="hover"
                        >
                          {post.title}
                        </Link>
                      </Typography>
                      <Typography variant="subtitle1">
                        Published on {post.date} by {post.author}
                      </Typography>
                      <Divider />
                      <Markdown source={excerptList[i]} escapeHtml={false} className="postExerpt"/>
                      <Typography variant="caption" className="readMore">
                        <Link
                          to={`/post/${post.id}`}
                          color="inherit"
                          underline="hover"
                        >
                          Read more
                        </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  };

  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "25px" }} />
      {RenderPostsList()}
    </div>
  );
}

export default PostsList;

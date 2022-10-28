import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";
import { Pagination } from "./Pagination";

export const Userspagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const onClickHandler = () => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/")
      .then(res => {
        console.log(res.data.results);
        setPosts(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

//   Get current posts
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1>Random User Generator</h1>
      <Button isActive={activeUser} clicked={onClickHandler} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {posts.map((user, index) => {
            return (
              <Fragment key={user.id}>
                <img src={user.picture.large} />
              </Fragment>
            );
          })}
        </div>
      )}
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

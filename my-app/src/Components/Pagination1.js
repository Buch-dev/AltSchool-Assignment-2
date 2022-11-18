import React, { useState, useFetch } from "react";

export const Pagination1 = () => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useFetch(
    "https://randomuser.me/api/?results=50&seed=abc"
  );

  console.log({ loading, error, data });

  const PER_PAGE = 10;
  const total = data?.results?.length;
  const pages = Math.ceil(total / PER_PAGE);
  // Magic of pagination
  // 1 + 10 - 10 = 0
  // 2 * 10 - 10 = 10
  // 3 * 10 - 10 = 20
  const skip = page * PER_PAGE - PER_PAGE;

  // use the useEffect to make api call based on the page
  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="Pagination">
      <h1>List of users</h1>
      {/* TODO: another magic with Array.slice */}
      {data?.results.slice(skip, skip + PER_PAGE).map((each, index) => {
        const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
        return (
          <li key={name.toLowerCase().replaceAll(" ", "")}>{`${index + 1
            }. ${name}`}</li>
        );
      })}
      {
        <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>prev</button>
      }
      <p>Pages: {page} of {pages}</p>
      {
        <button disabled={page >= pages} aria-disabled={page >= pages} onClick={() => setPage((prev) => prev + 1)}>next</button>
      }
    </div>
  );
};

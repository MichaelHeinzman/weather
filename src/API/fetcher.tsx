const fetcher = (url: RequestInfo | URL) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
};



export { fetcher, };

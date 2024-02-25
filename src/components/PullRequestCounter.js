import React, { useState, useEffect } from "react";
import { fetchTotalPullRequests } from "../apis/githubApi";

const PullRequestCounter = () => {
  const [pullRequestCount, setPullRequestCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPullRequests = async () => {
      setLoading(true);
      try {
        const totalCount = await fetchTotalPullRequests();
        setPullRequestCount(totalCount);
      } catch (error) {
        console.error("Failed to fetch pull requests:", error);
      }
      setLoading(false);
    };

    fetchPullRequests();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Total Pull Requests: {pullRequestCount}</p>
      )}
    </div>
  );
};

export default PullRequestCounter;

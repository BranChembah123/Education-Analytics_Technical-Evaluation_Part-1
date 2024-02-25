import axios from "axios";

const BASE_URL = "https://api.github.com";

// Function to fetch the total count of pull requests for the lodash repository
export const fetchTotalPullRequests = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/repos/lodash/lodash/pulls?state=all&per_page=1`
    );
    console.log('response==>', response)
    const linkHeader = response.headers.link;
    const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
    if (lastPageMatch) {
      return parseInt(lastPageMatch[1], 10); // Return the total count
    }
    return 0; // Return 0 if no match found
  } catch (error) {
    console.error("Failed to fetch pull requests:", error);
    throw error;
  }
};

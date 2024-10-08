import client from "../sanityClient";

const fetchPosts = async () => {
    try {
        const query = '*[_type == "post" && _id in path("drafts.**") == false]';
        const result = await client.fetch(query);
        return result;
    } catch (error) {
        console.error("Fetch failed:", error.message);
        return [];
    }
};

export default fetchPosts;
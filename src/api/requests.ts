import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";
export const getPosts = async () => {
    try {
        const res = await axios.get(`${FIRST_API_URL}/posts/101`,{
        params: { offset: 0, limit: 10 },
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")`}
        

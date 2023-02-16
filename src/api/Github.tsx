import axios from "axios";

const githubUSer = import.meta.env.VITE_GITHUB_USER
const githubRepor = import.meta.env.VITE_GUTHUB_REPOR




export const userAPi = axios.create({
   baseURL: `https://api.github.com/users/${githubUSer}` || "https://api.github.com/users/luiszkm"
})

export const issueApi = axios.create({
   baseURL: `https://api.github.com/repos/${githubUSer}/$ {githubRepor}/issues` || "https://api.github.com/repos/luiszkm/GitHubBlog/issues"
})


export const searchApi = axios.create({
   baseURL: 'https://api.github.com/search'
})
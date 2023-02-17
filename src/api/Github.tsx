import axios from "axios";

const githubUSer = import.meta.env.VITE_GITHUB_USER
const githubRepor = import.meta.env.VITE_GITHUB_REPOR




export const userAPi = axios.create({
   baseURL: "https://api.github.com/users/luiszkm" // `https://api.github.com/users/${githubUSer}` 
})

export const issueApi = axios.create({
   baseURL:  "https://api.github.com/repos/luiszkm/GitHubBlog/issues"// `https://api.github.com/repos/${githubUSer}/$ {githubRepor}/issues` 
})


export const searchApi = axios.create({
   baseURL: 'https://api.github.com/search'
})
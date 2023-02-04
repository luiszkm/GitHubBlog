import axios from "axios";


export const userAPi = axios.create({
   baseURL: "https://api.github.com/users"
})

export const issueApi = axios.create({
baseURL: 'https://api.github.com/repos/luiszkm/GitHubBlog/issues'
})


export const searchApi = axios.create({
   baseURL: 'https://api.github.com/search/issues'
})
export const baseURL = "https://api.themoviedb.org/3"
const movieLists = {
    trending: `/trending`,
    popular: `/popular`,
    top_rated: `/top_rated`,
    upcoming: `/upcoming`,
    now_playing: `/now_playing`
}
const pathParams = {
    day: "/day",
    week: "/week"
}
const queryParams = {

}
const imageBaseURL = `https://image.tmdb.org/t/p/w500`
export{

movieLists,
pathParams,
imageBaseURL
}
const requests = {
    getTrending: '/movie/TRENDING',
    getNetflix: '/movie/NETFLIX',
    getTopRated: '/movie/TOP_RATED',
    getActionMovies: '/movie?withGenre=ACTION',
    getComedyMovies: '/movie?withGenre=COMEDY',
    getHorrorMovies: '/movie?withGenre=HORROR',
    getRomanceMovies: '/movie?withGenre=ROMANCE',
    getDocumenaries: '/movie?withGenre=DOCUMENTARY',
    getGenreList: '/genre',
    removeMovie: '/movie/'
}

export default requests;
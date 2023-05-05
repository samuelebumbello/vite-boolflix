import { reactive } from "vue";

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/movie/550?api_key=59f38b96ab80195bb7f7f401824cdeee&language=it-IT',
    movieResultArray: [],
    movieSearchTitle: ""
})
import { reactive } from "vue";

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=184e820e32cadab24e0fe3a59c9aca6a&language=it-IT&query=Fight Club',
    movieResultArray: [],
    movieSearchTitle: ""
})
export const getApi = (type) =>{
    return `https://api.themoviedb.org/3/movie/${type}?api_key=bad062b33ad4ea1aef293cb220260cc3`;
}

export const getImage = (ImgPath) =>{
    return `https://image.tmdb.org/t/p/original/${ImgPath}`;
}

export const shrinkOverview = (txt) =>{
    if (txt.length > 100) {
        return txt.substring(0, 100) + '...';
    }

    return txt;
}

export const getMovieById = (id, type) => {
    if (type == "movie") {
        return `https://api.themoviedb.org/3/movie/${id}?api_key=bad062b33ad4ea1aef293cb220260cc3`
    }else if(type == "tv"){
        return `https://api.themoviedb.org/3/tv/${id}?api_key=bad062b33ad4ea1aef293cb220260cc3`
    }
}


export const getMovieBySearch = (text) =>{
    return `https://api.themoviedb.org/3/search/multi?query=${text}&api_key=bad062b33ad4ea1aef293cb220260cc3`;
}




export const getMovieVideoAPI = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bad062b33ad4ea1aef293cb220260cc3`
}

export const getVideoURL = (key) => {
    return `https://www.youtube.com/embed/${key}`;
}

export const getAllMovies = () => {
    return "https://api.themoviedb.org/3/trending/movie/day?api_key=bad062b33ad4ea1aef293cb220260cc3";
}


export const getTvshow = ( type) =>{
    return `https://api.themoviedb.org/3/tv/${type}?api_key=bad062b33ad4ea1aef293cb220260cc3`
}

export const getAllTvshow = () =>{
    return "https://api.themoviedb.org/3/trending/tv/day?api_key=bad062b33ad4ea1aef293cb220260cc3";
}
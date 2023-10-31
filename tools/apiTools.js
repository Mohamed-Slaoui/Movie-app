export const getApi = (type) =>{
    return `https://api.themoviedb.org/3/movie/${type}?api_key=bad062b33ad4ea1aef293cb220260cc3`;
}

export const getImage = (ImgPath) =>{
    return `https://image.tmdb.org/t/p/original/${ImgPath}`;
}


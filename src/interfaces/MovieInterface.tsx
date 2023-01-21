export interface MoviesResponseApi {
    page : number,
    results : Movie[],
    total_pages : number,
    total_results : number
}

export interface Actor {
    id : number ,
    name : string
}

export interface Movie {
    id : number,
    poster_path : string,
    original_title : string,
    release_date : string,
    genre_ids : number[],
    genderNames : string[],
    actors : Actor[]
}

export interface GenderResponseApi {
    genres : Gender[]
}

export interface Gender {
    id :number,
    name : string
}

export interface Cast {
    adult : boolean,
    gender : number,
    id : number,
    known_for_department : string,
    name : string,
    original_name : string
}

export interface ApiResponseActors {
   id : number,
   cast : Cast[],
}
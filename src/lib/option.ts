export interface Option {
    id: string,
    beer: string,
    brewery: string,
    location: string,
    table: number,
    score?: number,
    averageRating: number,
    ratings: number,
    broScore?: number,
    style: string,
    abv: string,
    url: string,
    voteCount?: number
}
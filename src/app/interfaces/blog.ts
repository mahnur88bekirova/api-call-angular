import { Launch } from "./launch";
import { Event } from "./event";

export interface Blog {
    id: number, 
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    updatedAt: string,
    launches: Array<Launch>,
    events: Array<Event> 
} 
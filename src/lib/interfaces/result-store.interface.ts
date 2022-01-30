import { Result } from "./result.interface";

export interface ResultStore {
    timespan: number;
    data: Result;
}
import { createReducer, on } from "@ngrx/store";

export type MainState = { 
  itemsList: {id: number, name: string}[];
};

export const mainReducer = createReducer<MainState>(
  {
    itemsList: [],
  }
);

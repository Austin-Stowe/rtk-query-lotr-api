import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-one-api.dev/v2",
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${process.env.API_KEY}`)
      return headers;
    }
  }),
  tagTypes: [],
  endpoints: (build) => ({
    getBook: build.query<GetBookApiResponse, GetBookApiArg>({
      query: () => ({ url: `/book` }),
    }),
    getBookById: build.query<GetBookByIdApiResponse, GetBookByIdApiArg>({
      query: (queryArg) => ({ url: `/book/${queryArg.id}/` }),
    }),
    getBookByIdChapter: build.query<
      GetBookByIdChapterApiResponse,
      GetBookByIdChapterApiArg
    >({
      query: (queryArg) => ({ url: `/book/${queryArg.id}/chapter` }),
    }),
    getMovie: build.query<GetMovieApiResponse, GetMovieApiArg>({
      query: () => ({ url: `/movie` }),
    }),
    getMovieById: build.query<GetMovieByIdApiResponse, GetMovieByIdApiArg>({
      query: (queryArg) => ({ url: `/movie/${queryArg.id}` }),
    }),
    getMovieByIdQuote: build.query<
      GetMovieByIdQuoteApiResponse,
      GetMovieByIdQuoteApiArg
    >({
      query: (queryArg) => ({ url: `/movie/${queryArg.id}/quote` }),
    }),
    getCharacter: build.query<GetCharacterApiResponse, GetCharacterApiArg>({
      query: () => ({ url: `/character` }),
    }),
    getCharacterById: build.query<
      GetCharacterByIdApiResponse,
      GetCharacterByIdApiArg
    >({
      query: (queryArg) => ({ url: `/character/${queryArg.id}` }),
    }),
    getCharacterByIdQuote: build.query<
      GetCharacterByIdQuoteApiResponse,
      GetCharacterByIdQuoteApiArg
    >({
      query: (queryArg) => ({ url: `/character/${queryArg.id}/quote` }),
    }),
    getQuote: build.query<GetQuoteApiResponse, GetQuoteApiArg>({
      query: () => ({ url: `/quote` }),
    }),
    getQuoteById: build.query<GetQuoteByIdApiResponse, GetQuoteByIdApiArg>({
      query: (queryArg) => ({ url: `/quote/${queryArg.id}` }),
    }),
    getChapter: build.query<GetChapterApiResponse, GetChapterApiArg>({
      query: () => ({ url: `/chapter` }),
    }),
    getChapterById: build.query<
      GetChapterByIdApiResponse,
      GetChapterByIdApiArg
    >({
      query: (queryArg) => ({ url: `/chapter/${queryArg.id}` }),
    }),
  }),
});
export type GetBookApiResponse =
  /** status 200 Successful response */ GetAllBooksResponse;
export type GetBookApiArg = {};
export type GetBookByIdApiResponse =
  /** status 200 Successful response */ GetBookByIdResponse;
export type GetBookByIdApiArg = {
  id: string;
};
export type GetBookByIdChapterApiResponse =
  /** status 200 Successful response */ GetChaptersOfBookByIdResponse;
export type GetBookByIdChapterApiArg = {
  id: string;
};
export type GetMovieApiResponse =
  /** status 200 Successful response */ GetAllMoviesResponse;
export type GetMovieApiArg = {};
export type GetMovieByIdApiResponse =
  /** status 200 Successful response */ GetMovieByIdResponse;
export type GetMovieByIdApiArg = {
  id: string;
};
export type GetMovieByIdQuoteApiResponse =
  /** status 200 Successful response */ GetQuotesByMovieIdResponse;
export type GetMovieByIdQuoteApiArg = {
  id: string;
};
export type GetCharacterApiResponse =
  /** status 200 Successful response */ GetAllCharactersResponse;
export type GetCharacterApiArg = {};
export type GetCharacterByIdApiResponse =
  /** status 200 Successful response */ GetCharacterByIdResponse;
export type GetCharacterByIdApiArg = {
  id: string;
};
export type GetCharacterByIdQuoteApiResponse =
  /** status 200 Successful response */ GetAllQuotesByCharacterIdResponse;
export type GetCharacterByIdQuoteApiArg = {
  id: string;
};
export type GetQuoteApiResponse =
  /** status 200 Successful response */ GetAllQuotesResponse;
export type GetQuoteApiArg = {};
export type GetQuoteByIdApiResponse =
  /** status 200 Successful response */ GetQuoteByIdResponse;
export type GetQuoteByIdApiArg = {
  id: string;
};
export type GetChapterApiResponse =
  /** status 200 Successful response */ GetAllChaptersResponse;
export type GetChapterApiArg = {};
export type GetChapterByIdApiResponse =
  /** status 200 Successful response */ GetChapterByIdResponse;
export type GetChapterByIdApiArg = {
  id: string;
};
export type BaseResponse = {
  total?: number;
  limit?: number;
  offset?: number;
  page?: number;
  pages?: number;
};
export type GetAllBooksResponse = BaseResponse;
export type GetBookByIdResponse = BaseResponse;
export type GetChaptersOfBookByIdResponse = BaseResponse;
export type GetAllMoviesResponse = BaseResponse;
export type GetMovieByIdResponse = BaseResponse;
export type GetQuotesByMovieIdResponse = BaseResponse;
export type GetAllCharactersResponse = BaseResponse;
export type GetCharacterByIdResponse = BaseResponse;
export type GetAllQuotesByCharacterIdResponse = BaseResponse;
export type GetAllQuotesResponse = BaseResponse;
export type GetQuoteByIdResponse = BaseResponse;
export type GetAllChaptersResponse = BaseResponse;
export type GetChapterByIdResponse = BaseResponse;
export const {
  useGetBookQuery,
  useGetBookByIdQuery,
  useGetBookByIdChapterQuery,
  useGetMovieQuery,
  useGetMovieByIdQuery,
  useGetMovieByIdQuoteQuery,
  useGetCharacterQuery,
  useGetCharacterByIdQuery,
  useGetCharacterByIdQuoteQuery,
  useGetQuoteQuery,
  useGetQuoteByIdQuery,
  useGetChapterQuery,
  useGetChapterByIdQuery,
} = api;


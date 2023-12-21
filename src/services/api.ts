import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay/'
  }),
  endpoints: (builder) => ({
    getFeatureGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnsale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGAme: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeatureGameQuery,
  useGetOnsaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetGAmeQuery
} = api
export default api

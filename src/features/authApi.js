import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';


export const authApi = createApi({
  reducerpath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  tagTypes: ['User'],

  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (data) => ({
        url: '/api/userLogin',
        body: data,
        method: 'POST'
      })
    }),

    userSignup: builder.mutation({
      query: (data) => ({
        url: '/api/userRegister',
        body: data,
        method: 'POST'
      })
    }),

    userUpdate: builder.mutation({
      query: (query) => ({
        url: '/api/userUpdate',
        body: query.body,
        method: 'PATCH',
        headers: {
          Authorization: query.token
        },
      }),
      invalidatesTags: ['User']
    }),

  })
})

export const { useUserLoginMutation, useUserSignupMutation, useUserUpdateMutation } = authApi;
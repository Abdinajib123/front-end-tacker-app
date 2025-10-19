import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api', // use proxy
    // credentials: 'include', // uncomment if using cookies/sessions
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Auth'], // ✅
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'users/login', // -> /api/users/login via proxy
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
      async onQueryStarted(args, { queryFulfilled }) { // ✅
        try {
          const { data } = await queryFulfilled;
          console.log('login ok:', data);
        } catch (e) {
          console.error('login err:', e);
        }
      },
    }),

    signup: builder.mutation({
      query: (body) => ({
        url: 'users/register',  // POST /api/users/register
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Signup OK:', data);
        } catch (e) {
          console.error('Signup Error:', e);
        }
      },
    }),

  }),
});



export const { useLoginMutation, useSignupMutation } = authApi;
export default authApi;

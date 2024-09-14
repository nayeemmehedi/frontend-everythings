import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosInstance } from '../../../Api/AxiosInstance'
import { axiosBaseQuery } from '../BaseQuery'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // GET request
    getPosts: builder.query({
      query: () => ({ url: '/v1/company', method: 'GET' }),
      providesTags: ['Post'],
    }),

    // GET request with ID
    getPost: builder.query({
      query: (id) => ({ url: `/posts/${id}`, method: 'GET' }),
      providesTags: ['Post'],
    }),

    // POST request
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        data: newPost,
      }),
      invalidatesTags: ['Post'],
    }),

    // PATCH request
    updatePost: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        data: patch,
      }),
      invalidatesTags: ['Post'],
    }),

    // DELETE request
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

// Export the auto-generated hooks for usage in your components
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiSlice
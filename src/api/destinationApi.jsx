import{createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const destinationApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    tagTypes:['Destinations'],
    endpoints: (builder)=>({
        getAllDestination:builder.query({
            query:()=>"destination",
            providesTags:['Destinations'],
            transformResponse:(res)=>res.sort((a,b)=> b.id - a.id )
        }),
        getDestination:builder.query({
            query:({id})=>`destination/${id}`,
        }),
        addDestination:builder.mutation({
            query:(destination)=>({
                url:"destination",
                method:"POST",
                body:destination
            }),
            invalidatesTags:['Destinations']
        }),
        updateDestination:builder.mutation({
            query:(destination)=>({
                url:`destination/${destination.id}`,
                method:"PUT",
                body:destination
            }),
            invalidatesTags:['Destinations']

        }),
        deleteDestination:builder.mutation({
            query:({id})=>({
                url:`destination/${id}`,
                method:"DELETE",
                body:id
            }),
            invalidatesTags:['Destinations']
        })
    })
})
export const{
     useGetAllDestinationQuery,
     useAddDestinationMutation,
     useDeleteDestinationMutation,
     useUpdateDestinationMutation
    } = destinationApi;
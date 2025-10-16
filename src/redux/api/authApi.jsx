const { createApi } = require("@reduxjs/toolkit/dist/query");


const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:10000/api' }),
    tagtypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query:(body)=>({
                url:'users/login',
                method:'POST',
                body,
            }),
            invalidatesTags:['Auth'],
            onqueryStarted: async(args,queryFulfilled)=>{
                try{
                    const data = await queryFulfilled;
                    console.log(data);
                }catch(error){
                    console.log(error)
                }

        },
    
})
})
});

export const { useLoginMutation } = authApi;
export default authApi;
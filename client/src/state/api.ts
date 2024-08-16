import { createApi, CreateApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_URL}),
    reducerPath:'api',
    tagTypes:['User','Product','Order','Category','Brand'],
    endpoints:(buil)=>({})
})

export const {} = api
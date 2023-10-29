import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:3080/",
  baseUrl: "https://push-notification-node-server.vercel.app/",
  credentials: "same-origin",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    // const token = getState()?.auth?.token;
    // if (token) {
    //   headers.set("Authorization", token);
    // }
    headers.set("Access-Control-Allow-Origin", "*");
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      //   api.dispatch(adminLoggedOut());
      //   localStorage.clear();
    }
    return result;
  },
  endpoints: (builder) => ({}),
});

export default apiSlice;

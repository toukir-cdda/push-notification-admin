import apiSlice from "../../api/apiSlice";

export const pushApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makeNotification: builder.mutation({
      query: (data) => ({
        url: `/send`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useMakeNotificationMutation } = pushApi;

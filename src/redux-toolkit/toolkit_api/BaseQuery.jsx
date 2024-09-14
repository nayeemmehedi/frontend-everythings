import { axiosInstance } from "../../Api/AxiosInstance"

export const axiosBaseQuery = () => async (args) => {
    try {
      const result = await axiosInstance(args)
      return { data: result.data }
    } catch (axiosError) {
        console.log(axiosError)
      return {

        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      }
    }
  }
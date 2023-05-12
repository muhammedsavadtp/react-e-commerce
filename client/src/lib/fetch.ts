import axios, { AxiosResponse } from "axios";

interface FetchAPIParams {
  url: string;
  method?: string;
  data?: any;
}

const fetchAPI = async ({
  url,
  method = "GET",
  data,
}: FetchAPIParams): Promise<any> => {
  try {
    const response: AxiosResponse = await axios({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    return error;
  }
};
export default fetchAPI;

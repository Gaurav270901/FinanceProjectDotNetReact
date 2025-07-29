import axios from 'axios';
import type { CompanySearch } from './company.d';

interface searchResponse{
    data : CompanySearch[];
}
export const searchCompanies = async (query : string) => {
    try{
        const data = await axios.get<searchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`);
        return data.data;
    } 
    catch (error) {
    if ((error as any).isAxiosError) {
      console.log("error message: ", (error as any).message);
      return (error as any).message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
};
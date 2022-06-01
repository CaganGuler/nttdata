import Axios, { AxiosResponse } from "axios";
import { HelperFunctions } from "../helpers";
import { GetOfferCountDto, OfferDto, OfferListItem } from "../interfaces";
const backendUrl = "https://snetmyapp.herokuapp.com";

export class CaseService {
  public static async Case1(): Promise<AxiosResponse<OfferDto>> {
    try {
      return Axios.get<OfferDto, AxiosResponse>(backendUrl + "/case1");
    } catch (error: any) {
      HelperFunctions.exceptionHandler(error);
      return error;
    }
  }

  public static async Case2(): Promise<AxiosResponse<OfferDto>> {
    try {
      return Axios.get<OfferDto, AxiosResponse>(backendUrl + "/case2");
    } catch (error: any) {
      HelperFunctions.exceptionHandler(error);
      return error;
    }
  }
  public static async Case3(): Promise<AxiosResponse<OfferListItem>> {
    try {
      return Axios.get<OfferListItem, AxiosResponse>(backendUrl + "/case3");
    } catch (error: any) {
      HelperFunctions.exceptionHandler(error);
      return error;
    }
  }

  public static async GetOfferCount(): Promise<
    AxiosResponse<GetOfferCountDto>
  > {
    try {
      return Axios.get<GetOfferCountDto, AxiosResponse>(
        backendUrl + "/get_offer_count"
      );
    } catch (error: any) {
      HelperFunctions.exceptionHandler(error);
      return error;
    }
  }
}

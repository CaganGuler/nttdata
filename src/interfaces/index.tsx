export interface GetOfferCountDto {
  num_offers: number;
}
export interface OfferListItem {
  Cash: number;
  FirmName: string;
  ImagePath: string;
  ProductDesc: string;
  QuotaInfo: QuotaInfo;
  SaleClosed: boolean;
  popoverContent?: popoverContent[];
}
export interface OfferDto {
  offerList: OfferListItem[];
}
interface QuotaInfo {
  HasDiscount: boolean;
  PremiumWithDiscount: number;
}
interface popoverContent {
  Description: string;
  Title: string;
}

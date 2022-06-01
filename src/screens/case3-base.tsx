import React from "react";
import { OfferDto, OfferListItem } from "../interfaces";
import { CaseService } from "../services";
import _ from "lodash";
import { message } from "antd";

const addAndSort = (
  offerList: OfferListItem[],
  newOffer: OfferListItem
): OfferListItem[] => {
  offerList.push(newOffer);
  var i = offerList.length - 1;
  var item = offerList[i];
  while (
    i > 0 &&
    (newOffer.QuotaInfo.HasDiscount
      ? newOffer.QuotaInfo.PremiumWithDiscount
      : newOffer.Cash) <
      (offerList[i - 1].QuotaInfo.HasDiscount
        ? offerList[i - 1].QuotaInfo.PremiumWithDiscount
        : offerList[i - 1].Cash)
  ) {
    offerList[i] = offerList[i - 1];
    i -= 1;
  }
  offerList[i] = item;
  return offerList;
};
export interface Case3Props {}

export interface Case3State {
  loading: boolean;
  offers: OfferDto;
}

export default class Case3Base extends React.PureComponent<
  Case3Props,
  Case3State
> {
  constructor(props: Case3Props) {
    super(props);
    this.state = {
      loading: true,
      offers: {
        offerList: [],
      } as OfferDto,
    };
  }

  async componentDidMount() {
    const offerCount = (await CaseService.GetOfferCount()).data.num_offers;
    message.info(
      `We will fetch ${offerCount} offers. This may take a few seconds`
    );
    for (let index = 0; index < offerCount; index++) {
      let offer = (await CaseService.Case3()).data;
      let currentOffers = _.cloneDeep(this.state.offers);
      currentOffers.offerList = addAndSort(currentOffers.offerList, offer);
      this.setState({ offers: currentOffers });
    }
    this.setState({ loading: false });
  }
}

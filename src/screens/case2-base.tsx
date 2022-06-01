import React from "react";
import { OfferDto } from "../interfaces";
import { CaseService } from "../services";

export interface Case2Props {}

export interface Case2State {
  loading: boolean;
  offers: OfferDto;
}

export default class Case2Base extends React.PureComponent<
  Case2Props,
  Case2State
> {
  constructor(props: Case2Props) {
    super(props);
    this.state = {
      loading: true,
      offers: {} as OfferDto,
    };
  }

  async componentDidMount() {
    const offers = (await CaseService.Case2()).data;
    this.setState({ offers: offers, loading: false });
  }
}

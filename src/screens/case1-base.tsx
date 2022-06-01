import React from "react";
import { OfferDto } from "../interfaces";
import { CaseService } from "../services";

export interface Case1Props {}

export interface Case1State {
  loading: boolean;
  offers: OfferDto;
}

export default class Case1Base extends React.PureComponent<
  Case1Props,
  Case1State
> {
  constructor(props: Case1Props) {
    super(props);
    this.state = {
      loading: true,
      offers: {} as OfferDto,
    };
  }

  async componentDidMount() {
    const offers = (await CaseService.Case1()).data;
    this.setState({ offers: offers, loading: false });
  }
}

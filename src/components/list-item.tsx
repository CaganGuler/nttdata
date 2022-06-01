import { Divider, List, Image, Popover, Button } from "antd";
import { Component } from "react";
import { HelperFunctions } from "../helpers";
import { OfferListItem } from "../interfaces";

interface ListItemProps {
  item: OfferListItem;
}
interface ListItemState {}
export default class ListItem extends Component<ListItemProps, ListItemState> {
  render() {
    const { item } = this.props;

    return (
      <List.Item
        className="list-item"
        actions={[
          <>
            <>
              {item.QuotaInfo.HasDiscount === true && (
                <p className="discount-info">
                  {HelperFunctions.formatMoney(item.Cash)}
                </p>
              )}
              <p className="price-info">
                {HelperFunctions.formatMoney(
                  item.QuotaInfo.HasDiscount
                    ? item.QuotaInfo.PremiumWithDiscount
                    : item.Cash
                )}
              </p>
            </>

            <Button disabled={item.SaleClosed} type="primary">
              Satın al
            </Button>
          </>,
        ]}
      >
        <Popover
          content={
            item.popoverContent && item.popoverContent[0] ? (
              <p>{item.popoverContent[0].Description}</p>
            ) : undefined
          }
          title={
            item.popoverContent && item.popoverContent[0] ? (
              <p>{item.popoverContent[0].Title}</p>
            ) : undefined
          }
        >
          <List.Item.Meta
            avatar={
              <>
                <Image
                  preview={false}
                  className="list-image"
                  src={item.ImagePath}
                />
                <Divider className="divider" type="vertical" />
              </>
            }
            title={item.FirmName}
            description={item.ProductDesc}
          />
        </Popover>
      </List.Item>
    );
  }
}

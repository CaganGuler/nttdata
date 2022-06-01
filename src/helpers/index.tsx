import { Store } from "react-notifications-component";

export class HelperFunctions {
  static exceptionHandler(e: any) {
    var msg = e?.response?.data?.message;
    if (msg) {
      this.displayErrorNotification(msg);
    } else if (e?.message) {
      console.error(e.message);
      this.displayErrorNotification(e.message);
    }
    if (e?.stack) {
      console.error(e.stack);
    }
  }

  static displayErrorNotification(message: any, params?: any) {
    if (message) {
      Store.addNotification({
        title: params?.title ? params.title : "Error!",
        message: message,
        type: "danger",
        container: params?.container ? params.container : "bottom-right",
        animationIn: params?.animationIn
          ? params.animationIn
          : ["animated", "flipInX"],
        animationOut: params?.animationOut
          ? params.animationOut
          : ["animated", "fadeOut"],
        dismiss: {
          duration: params?.duration ? params.duration : 20000,
          pauseOnHover: params?.pauseOnHover ? params.pauseOnHover : true,
          showIcon: params?.showIcon ? params.showIcon : true,
        },
      });
    }
  }
  static formatMoney(num: number) {
    var formatter = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    });
    return formatter.format(num);
  }
}

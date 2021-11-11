import { MessageOptions, showMessage } from "react-native-flash-message";

const commonProps: Partial<MessageOptions> = {
  style: {
    paddingLeft: 80,
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
};

export class FlashMessageService {
  showSuccessMessage(message) {
    showMessage({
      message,
      ...commonProps,
      icon: {
        icon: "success",
        position: "right",
      },
      type: "success",
    });
  }

  showErrorMessage(message) {
    showMessage({
      message,
      ...commonProps,
      icon: {
        icon: "danger",
        position: "right",
      },
      type: "danger",
    });
  }
}

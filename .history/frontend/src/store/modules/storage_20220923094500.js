const storage = {
  async fetch(orderState) {
    const setState = true;
    const arr = [];

    if (orderState == undefined || orderState == null) {
      setState == true;
    } else if (orderState != null || orderState != '') {
      setState == orderState;
    }
  },
};

import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          User Merch Table            /////////////////
////////////////////////////////////////////////////////////////////////////

export async function addUserMerchOrderData(
  productid: string,
  buyingprice: number,
  addressid: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        productid: productid,
        buyingprice: buyingprice,
        addressid: addressid,
      };
      const response = await axios.post(
        MAIN_API_URL + "user_merchandise",
        data,
        {
          headers: authHeader(),
        }
      );
      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getUserAllOrdersData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_merchandise/allmyorders",
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getProductIdAllOrdersData(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_merchandise/productid/" + productid,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getSpecificCreatorAllUserMerchStatsData(
  productid: string
) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_merchandise/alluserdata/forcreator/" + productid,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function updateMerchOrderData(
  orderid: string,
  productid: string,
  deliverystatuslink: string,
  deliverystatus: number,
  isreturninitiated: boolean,
  returnstatus: number,
  deliveredat: string,
  returnedinitiatedat: string,
  returnedreceivedat: string,
  isrefundcomplete: boolean
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        deliverystatuslink: deliverystatuslink,
        deliverystatus: deliverystatus,
        isreturninitiated: isreturninitiated,
        returnstatus: returnstatus,
        deliveredat: deliveredat,
        returnedinitiatedat: returnedinitiatedat,
        returnedreceivedat: returnedreceivedat,
        isrefundcomplete: isrefundcomplete,
      };

      const response = await axios.put(
        MAIN_API_URL +
          "user_merchandise/orderupdate/" +
          orderid +
          "/" +
          productid,
        data,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

////////////////////////////////////////////////////////////////////////////
/////////////////////          User Address Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function addUserAddressData(
  type: string,
  addressline1: string,
  addressline2: string,
  city: string,
  postalcode: number,
  country: string,
  mobileno: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        type: type,
        addressline1: addressline1,
        addressline2: addressline2,
        city: city,
        postalcode: postalcode,
        country: country,
        mobileno: mobileno,
      };
      const response = await axios.post(
        MAIN_API_URL + "user_merchandise/useraddress",
        data,
        {
          headers: authHeader(),
        }
      );
      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getUserAllAddressData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_merchandise/useraddress",
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function updateMobileNoData(addressid: string, mobileno: number) {
  try {
    if (authHeader().Authorization) {
      const data = {
        addressid: addressid,
        mobileno: mobileno,
      };

      const response = await axios.put(
        MAIN_API_URL + "user_merchandise/useraddress/" + addressid,
        data,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

////////////////////////////////////////////////////////////////////////////
/////////////////////      User Merchandise Reviews Table     //////////////
////////////////////////////////////////////////////////////////////////////

export async function addUserMerchReviewData(
  productid: string,
  orderid: string,
  ratings: number,
  commenttitle: string,
  commentdescription: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        productid: productid,
        orderid: orderid,
        ratings: ratings,
        commenttitle: commenttitle,
        commentdescription: commentdescription,
      };
      const response = await axios.post(
        MAIN_API_URL + "user_merchandise/reviews",
        data,
        {
          headers: authHeader(),
        }
      );
      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getProductAllReviewsData(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_merchandise/reviews/" + productid,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getProductRatingsData(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_merchandise/reviews/ratings/" + productid,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function checkProductValidReviewerData(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_merchandise/reviews/check/" + productid,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function updateMerchReviewData(
  reviewid: string,
  commenttitle: string,
  commentdescription: string,
  ratings: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        commenttitle: commenttitle,
        commentdescription: commentdescription,
        ratings: ratings,
      };

      const response = await axios.put(
        MAIN_API_URL + "user_merchandise/reviews/" + reviewid,
        data,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

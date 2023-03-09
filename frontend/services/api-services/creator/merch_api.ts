import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Merch Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorMerchData(
  productid: string,
  title: string,
  description: string,
  inventory: number,
  return_refund_policy: string,
  country_of_origin: string,
  price: number,
  discountpercentage: number,
  warrantyperiod: number,
  shippingcharges: number,
  freeshippingabove: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        productid: productid,
        title: title,
        description: description,
        inventory: inventory,
        return_refund_policy: return_refund_policy,
        country_of_origin: country_of_origin,
        price: price,
        discountpercentage: discountpercentage,
        warrantyperiod: warrantyperiod,
        shippingcharges: shippingcharges,
        freeshippingabove: freeshippingabove,
      };
      const response = await axios.post(
        MAIN_API_URL + "creator_merchandise",
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

export async function addCreatorMerchVariantData(
  productid: string,
  title: string,
  description: string,
  inventory: number,
  return_refund_policy: string,
  country_of_origin: string,
  price: number,
  discountpercentage: number,
  warrantyperiod: number,
  shippingcharges: number,
  variantname: string,
  freeshippingabove: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        productid: productid,
        title: title,
        description: description,
        inventory: inventory,
        return_refund_policy: return_refund_policy,
        country_of_origin: country_of_origin,
        price: price,
        discountpercentage: discountpercentage,
        warrantyperiod: warrantyperiod,
        shippingcharges: shippingcharges,
        variantname: variantname,
        freeshippingabove: freeshippingabove,
      };
      const response = await axios.post(
        MAIN_API_URL + "creator_merchandise/variant",
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

export async function getMerchThumbnail(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "content/merch_images/thumbnail/" + productid,
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

export async function getMerchAllImages(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "content/merch_images/allimages/" + productid,
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

export async function getCreatorAllMerchData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "creator_merchandise/" + creator,
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

export async function getProductIdMerchData(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "creator_merchandise/product/" + productid,
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

export async function getProductIdVariantsData(productid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "creator_merchandise/variants/" + productid,
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

export async function updateCreatorColabData(
  productid: string,
  title: string,
  description: string,
  inventory: number,
  return_refund_policy: string,
  country_of_origin: string,
  price: number,
  discountpercentage: number,
  warrantyperiod: number,
  shippingcharges: number,
  variantname: string,
  freeshippingabove: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        title: title,
        description: description,
        inventory: inventory,
        return_refund_policy: return_refund_policy,
        country_of_origin: country_of_origin,
        price: price,
        discountpercentage: discountpercentage,
        warrantyperiod: warrantyperiod,
        shippingcharges: shippingcharges,
        variantname: variantname,
        freeshippingabove: freeshippingabove,
      };

      const response = await axios.put(
        MAIN_API_URL + "creator_merchandise/" + productid,
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

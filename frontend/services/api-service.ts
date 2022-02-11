import axios from "axios";
import authHeader from "./auth-header";

// Backend Url
const API_URL = "http://localhost:5000/";

/////////////////////////////////////////////////////////////////////////
//////////////////     User Table            ////////////////////////////
/////////////////////////////////////////////////////////////////////////

export async function addNewUser(
  account: string,
  library: any,
  useraddress: string,
  username: string,
  iscreator: boolean,
  twitterhandle: string,
  discord: string,
  tiktok: string,
  instagram: string,
  youtube: string,
  website: string
) {
  const data = {
    useraddress: useraddress,
    username: username,
    iscreator: iscreator,
    twitterhandle: twitterhandle,
    discord: discord,
    tiktok: tiktok,
    instagram: instagram,
    youtube: youtube,
    website: website,
  };
  const response = await axios.post(API_URL, data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["useraddress"] == useraddress) {
    return true;
  }
  return false;
}

export async function updateUserData(
  account: string,
  library: any,
  useraddress: string,
  username: string,
  iscreator: boolean,
  twitterhandle: string,
  discord: string,
  tiktok: string,
  instagram: string,
  youtube: string,
  website: string
) {
  const data = {
    useraddress: useraddress,
    username: username,
    iscreator: iscreator,
    twitterhandle: twitterhandle,
    discord: discord,
    tiktok: tiktok,
    instagram: instagram,
    youtube: youtube,
    website: website,
  };
  const response = await axios.put(API_URL + useraddress, data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["useraddress"] == useraddress) {
    return true;
  }
  return false;
}

export async function getCreators(account: string, library: any) {
  const response = await axios.get(API_URL + "creators", {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  return data;
}

export async function getUserData(
  account: string,
  library: any,
  address: string
) {
  const response = await axios.get(API_URL + address, {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  return data;
}

export async function getUserColumnData(
  account: string,
  library: any,
  address: string,
  column: string
) {
  const response = await axios.get(API_URL + "cn/" + column + "/" + address, {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  return data;
}

/////////////////////////////////////////////////////////////////////////
//////////////////     Token Table            ///////////////////////////
/////////////////////////////////////////////////////////////////////////

export async function addNewToken(
  account: string,
  library: any,
  address: string,
  chainId: number
) {
  const data = {
    address: address,
    chainId: chainId,
  };
  const response = await axios.post(API_URL + "token", data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["tokenaddress"] == address) {
    return true;
  }
  return false;
}

export async function getTokens(
  account: string,
  library: any,
  chainId: number
) {
  const response = await axios.get(API_URL + "token/" + chainId.toString(), {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  return data;
}

/////////////////////////////////////////////////////////////////////////
//////////////////     NFT Table            /////////////////////////////
/////////////////////////////////////////////////////////////////////////

export async function addNewNFT(
  account: string,
  library: any,
  address: string,
  tokenid: number,
  tokenuri: string,
  status: string,
  chainid: number
) {
  const data = {
    address: address,
    tokenid: tokenid,
    tokenuri: tokenuri,
    status: status,
    chainid: chainid,
  };
  const response = await axios.post(API_URL + "nft", data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["nftaddress"] == address) {
    return true;
  }
  return false;
}

export async function updateNFTData(
  account: string,
  library: any,
  address: string,
  tokenid: number,
  status: string,
  chainid: number
) {
  const response = await axios.put(
    API_URL +
      "nft/" +
      address +
      "/" +
      tokenid.toString() +
      "/" +
      chainid.toString() +
      "/" +
      status,
    { headers: await authHeader(account, library) }
  );
  if (response.data[0]["nftaddress"] == address) {
    return true;
  }
  return false;
}

export async function getAllNFTs(
  account: string,
  library: any,
  chainId: number
) {
  const response = await axios.get(API_URL + "nft/" + chainId.toString(), {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  return data;
}

export async function getNFTsOfCreator(
  account: string,
  library: any,
  address: string,
  chainId: number
) {
  try {
    const response = await axios.get(
      API_URL + "nft/address/" + chainId.toString() + "/" + address,
      { headers: await authHeader(account, library) }
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getNFTFromStatus(
  account: string,
  library: any,
  address: string,
  chainId: number,
  status: string
) {
  const response = await axios.get(
    API_URL + "nft/status/" + chainId.toString() + "/" + address + "/" + status,
    { headers: await authHeader(account, library) }
  );
  const data = await response.data;
  return data;
}

export async function getNFTForGivenTokenId(
  account: string,
  library: any,
  address: string,
  chainId: number,
  tokenid: string
) {
  const response = await axios.get(
    API_URL + "nft/address/" + chainId.toString() + "/" + address + "/" + tokenid,
    { headers: await authHeader(account, library) }
  );
  const data = await response.data;
  return data;
}

/////////////////////////////////////////////////////////////////////////
//////////////////     DAO Table            /////////////////////////////
/////////////////////////////////////////////////////////////////////////

export async function addDAOProposal(
  account: string,
  library: any,
  address: string,
  chainId: number,
  creator: string,
  proposalid: number,
  author: string,
  isallowancesproposal: boolean,
  managers: string, 
  allowances: string, 
  isnative: boolean,
  proposallink: string,
  proposaltitle: string,
  proposaldescription: string,
  choices: string,
  duration: number
) {
  const data = {
    address: address,
    chainId: chainId,
    creator: creator,
    proposalid: proposalid,
    author: author,
    isallowancesproposal: isallowancesproposal,
    managers: managers, 
    allowances: allowances, 
    isnative: isnative,
    proposallink: proposallink,
    proposaltitle: proposaltitle,
    proposaldescription: proposaldescription,
    choices: choices,
    duration: duration,
  };
  const response = await axios.post(API_URL + "dao", data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["daoaddress"] == address) {
    return true;
  }
  return false;
}

export async function getDAOAllProposals(
  account: string,
  library: any,
  chainId: number,
  address: string
) {
  const response = await axios.get(
    API_URL + "dao/" + chainId.toString() + "/" + address,
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  console.log(data);
  return data;
}

export async function getDAOProposal(
  account: string,
  library: any,
  chainId: number,
  address: string,
  proposalid: number
) {
  const response = await axios.get(
    API_URL + "dao/" + chainId.toString() + "/" + address + "/" + proposalid,
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  return data;
}

// getPublicContent() {
//   return await axios.get(API_URL + "all");
// }

// export default new APIService();

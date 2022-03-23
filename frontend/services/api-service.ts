import axios from "axios";
import AuthService from "./auth-services";
import authHeader from "./auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

// Video Streaming Server Url
export const VIDEO_API_URL = process.env.NEXT_STATIC_VIDEO_API_URL;

// Thumbnail S3 Bucket Storage
export const S3_BUCKET_THUMBNAIL_URL =
  process.env.NEXT_STATIC_S3_BUCKET_THUMBNAIL_URL;

/////////////////////////////////////////////////////////////////////////
/////////////////////          User Table            ////////////////////
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
  const response = await axios.post(MAIN_API_URL, data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["useraddress"] == useraddress.toLowerCase()) {
    return true;
  }
  return false;
}

export async function addUserNewChain(
  account: string,
  chainId: number,
  library: any,
  useraddress: string
) {
  const data = {
    useraddress: useraddress,
    chainid: chainId,
  };
  const response = await axios.post(MAIN_API_URL + "user_chain", data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["useraddress"] == useraddress.toLowerCase()) {
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
  const response = await axios.put(MAIN_API_URL + useraddress, data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["useraddress"] == useraddress.toLowerCase()) {
    return true;
  }
  return false;
}

export async function getCreators(
  account: string,
  chainId: number,
  library: any
) {
  const response = await axios.get(MAIN_API_URL + "creators/" + chainId, {
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
  const response = await axios.get(MAIN_API_URL + address, {
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
  const response = await axios.get(
    MAIN_API_URL + "cn/" + column + "/" + address,
    {
      headers: await authHeader(account, library),
    }
  );
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
  const response = await axios.post(MAIN_API_URL + "token", data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["tokenaddress"] == address.toLowerCase()) {
    return true;
  }
  return false;
}

export async function getTokens(
  account: string,
  library: any,
  chainId: number
) {
  const response = await axios.get(
    MAIN_API_URL + "token/" + chainId.toString(),
    {
      headers: await authHeader(account, library),
    }
  );
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
  const response = await axios.post(MAIN_API_URL + "nft", data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["nftaddress"] == address.toLowerCase()) {
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
    MAIN_API_URL +
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
  if (response.data[0]["nftaddress"] == address.toLowerCase()) {
    return true;
  }
  return false;
}

export async function getAllNFTs(
  account: string,
  library: any,
  chainId: number
) {
  const response = await axios.get(MAIN_API_URL + "nft/" + chainId.toString(), {
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
      MAIN_API_URL + "nft/address/" + chainId.toString() + "/" + address,
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
    MAIN_API_URL +
      "nft/status/" +
      chainId.toString() +
      "/" +
      address +
      "/" +
      status,
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
    MAIN_API_URL +
      "nft/address/" +
      chainId.toString() +
      "/" +
      address +
      "/" +
      tokenid,
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
  const response = await axios.post(MAIN_API_URL + "dao", data, {
    headers: await authHeader(account, library),
  });
  if (response.data[0]["daoaddress"] == address.toLowerCase()) {
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
    MAIN_API_URL + "dao/" + chainId.toString() + "/" + address,
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
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
    MAIN_API_URL +
      "dao/" +
      chainId.toString() +
      "/" +
      address +
      "/" +
      proposalid,
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  return data;
}

/////////////////////////////////////////////////////////////////////////
//////////////////     Video Table            ///////////////////////////
/////////////////////////////////////////////////////////////////////////

export async function updateVideoDetail(
  account: string,
  library: any,
  videoid: string,
  creator: string,
  title: string,
  description: string
) {
  const data = {
    videoid: videoid,
    creator: creator,
    title: title,
    description: description,
  };
  const response = await axios.put(VIDEO_API_URL + videoid, data, {
    headers: await authHeader(account, library),
  });
  if (creator != "") {
    if (response.data[0]["creator"] == creator.toLowerCase()) {
      return true;
    }
  } else if (title != "") {
    if (response.data[0]["title"] == title) {
      return true;
    }
  } else if (description != "") {
    if (response.data[0]["description"] == description) {
      return true;
    }
  }
  return false;
}

export async function getVideoSignedUrl(
  account: string,
  library: any,
  videoid: string
) {
  const response = await axios.get(VIDEO_API_URL + "video/" + videoid, {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  console.log(data);
  return data;
}

export async function getVideoDetails(
  account: string,
  library: any,
  videoid: string
) {
  const response = await axios.get(VIDEO_API_URL + "details/" + videoid, {
    headers: await authHeader(account, library),
  });
  console.log(VIDEO_API_URL + "details/" + videoid);
  const data = await response.data;
  return data;
}

export async function getCreatorAllVideoDetails(
  account: string,
  library: any,
  creator: string
) {
  console.log("creator");
  console.log(VIDEO_API_URL + "details/creator/" + creator);
  const response = await axios.get(
    VIDEO_API_URL + "details/creator/" + creator,
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  console.log("data");
  console.log(data);
  return data;
}

export async function getVideoThumbnail(
  account: string,
  library: any,
  videoid: string
) {
  console.log(VIDEO_API_URL + "thumbnail/" + videoid);
  const response = await axios.get(VIDEO_API_URL + "thumbnail/" + videoid, {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  return data;
}

export async function getVideoCaptions(
  account: string,
  library: any,
  videoid: string
) {
  const response = await axios.get(VIDEO_API_URL + "captions/" + videoid, {
    headers: await authHeader(account, library),
  });
  const data = await response.data;
  return data;
}

/////////////////////////////////////////////////////////////////////////
//////////////////     Live Stream Data             /////////////////////
/////////////////////////////////////////////////////////////////////////

export async function getVideoStreamKey(
  account: string,
  creator: string,
  library: any,
) {
  const response = await axios.get(
    MAIN_API_URL + "livestream/streamkey/" + creator.toLowerCase(),
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  return data;
}


export async function getVideoStreamKeyForce(
  account: string,
  creator: string,
  library: any,
) {
  const response = await axios.get(
    MAIN_API_URL + "livestream/streamkey_force/" + creator.toLowerCase(),
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  return data;
}

export async function getIsVideoStreamAvailable(
  account: string,
  creator: string,
  library: any,
) {
  const response = await axios.get(
    MAIN_API_URL + "livestream/" + creator.toLowerCase(),
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  return data;
}


/////////////////////////////////////////////////////////////////////////
//////////////////     Discord Plans            /////////////////////////
/////////////////////////////////////////////////////////////////////////

export async function getDiscordPlanDetails(
  account: string,
  library: any,
  linkid: string
) {
  const response = await axios.get(
    MAIN_API_URL + "discord/linkdata/" + linkid.toLowerCase(),
    {
      headers: await authHeader(account, library),
    }
  );
  const data = await response.data;
  return data;
}

export async function buyDiscordPlan(
  account: string,
  library: any,
  videoid: string,
  creator: string,
  title: string,
  description: string
) {
  const data = {
    videoid: videoid,
    creator: creator,
    title: title,
    description: description,
  };
  const response = await axios.put(VIDEO_API_URL + videoid, data, {
    headers: await authHeader(account, library),
  });
  if (creator != "") {
    if (response.data[0]["creator"] == creator.toLowerCase()) {
      return true;
    }
  } else if (title != "") {
    if (response.data[0]["title"] == title) {
      return true;
    }
  } else if (description != "") {
    if (response.data[0]["description"] == description) {
      return true;
    }
  }
  return false;
}

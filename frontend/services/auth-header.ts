import { useWeb3React } from "@web3-react/core";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import Web3Token from "../lib";
import AuthService from './auth-services';

export default async function authHeader(account: string, library: any) {

  const user = AuthService.getCurrentUser(account);

  if (user) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    
    const { address, body, expired } = Web3Token.verify(user, {
      // verify that received token is signed only for our domain
      domain: 'app.kigzag.com'
    });
    
    // console.log("address: "+ address+ " domain: "+ body.domain+ " statement: "+ body.statement+ " expires_in: "+ body.expires_in);
    if(address && body && !expired)
    {
      console.log(address + "\n" + body);
      return {
        "Authorization": user,
        "Content-Type": "application/json",
      }; // for Node.js Express back-end
    }

    else{
      // generating a token with 1 day of expiration time by default
      const token = await Web3Token.sign(async msg => await library.getSigner().signMessage(msg), {
        domain: 'app.kigzag.com',
        statement: 'Token Epired, Re-Sign. I accept the Privacy Policy & Terms of Service: https://app.kigzag.com/terms&privacy',
        nonce: 11111111,
        expires_in: '1 day'
      })
      .then(token=>{
        if (token) {
          localStorage.setItem("user_"+account, JSON.stringify(token));
        }
        return token;
      });

      const { address, body, expired } = Web3Token.verify(token, {
        // verify that received token is signed only for our domain
        domain: 'app.kigzag.com'
      });
      // console.log("address: "+ address+ " domain: "+ body.domain+ " statement: "+ body.statement+ " expires_in: "+ body.expires_in);
      if(address && body && !expired)
      {
        console.log(address + "\n" + body);
        return {
          "Authorization": token,
          "Content-Type": "application/json",
        }; // for Node.js Express back-end
      }
    }
    
  } else {
    return {};
  }
}

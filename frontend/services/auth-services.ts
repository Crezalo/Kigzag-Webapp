import { useWeb3React } from "@web3-react/core";
import Web3Token from '../lib';

class AuthService {
  async login() {
    const {
      account,
      library,
    } = useWeb3React();

    const user = this.getCurrentUser(account);
    let statement = "I accept the Privacy Policy & Terms of Service: https://app.kigzag.com/terms&privacy";

    if(user){
      const { address, body, expired } = await Web3Token.verify(user, {
        // verify that received token is signed only for our domain
        domain: 'app.kigzag.com'
      });

      console.log("expired: " + expired);
      // console.log("address: "+ address+ " domain: "+ body.domain+ " statement: "+ body.statement+ " expires_in: "+ body.expires_in);
      if(address && body && !expired)
      {
        return user;
      }
      if(expired){
        statement = "Token Epired, Re-Sign. I accept the Privacy Policy & Terms of Service: https://app.kigzag.com/terms&privacy";
      }
    }

    
    
    // generating a token with 1 day of expiration time by default
    const token = await Web3Token.sign(async msg => await library.getSigner().signMessage(msg), {
      domain: 'app.kigzag.com',
      statement: statement,
      nonce: 11111111,
      expires_in: '1 day'
    })
    .then(token=>{
      if (token) {
        localStorage.setItem("user_"+account, JSON.stringify(token));
      }
      return token;
    });

    return token;
  }

  logout() {
    const {
      account
    } = useWeb3React();
    localStorage.removeItem("user_"+account);
  }

  getCurrentUser(account) {
    // console.log("LOCAL STORAGE IS DEFINED!!!!!!!!!!!!!");
    // console.log(localStorage);
    return JSON.parse(localStorage.getItem("user_"+account));
  }
}

export default new AuthService();
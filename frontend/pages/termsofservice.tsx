import { CSSProperties } from "react";
import Jdenticon from "react-jdenticon";
import AuthService from "../services/auth-services";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserData } from "../services/api-services/user_api";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileSliderTabs from "../components/ProfileSliderTabs";
import SocialHandles from "../components/SocialHandles";
import BasicModal from "../components/BasicModal";
import UpdateFeatureStatus from "../components/UpdateFeatureStatus";
import StreetviewIcon from "@mui/icons-material/Streetview";
import ShareIcon from "@mui/icons-material/Share";
import ShareSocialModal from "../components/ShareSocialModal";
import { Button, Tooltip } from "@mui/material";
import SeeFeedbacks from "../components/SeeFeedbacks";

const style = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  copyContainer: {
    border: "1px solid blue",
    background: "rgb(0,0,0,0.7)",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontStyle: "italic",
  },
};
const buttonStyle: CSSProperties = {
  fontSize: "15px",
  fontWeight: "bold",
  textAlign: "center",
  width: "auto",
  marginTop: "20px",
};

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "black",
    backgroundColor: "blue",
    padding: theme.spacing(2, 4, 3),
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "80vh",
    margin: "20px",
  },
}));

export default function TermsOfService() {
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const updateUsername = () => {
    useEffect(() => {
      setUsername(AuthService.getUsername());
    }, [isConnected]);
  };

  updateUsername();

  return (
    <div>
      <Head>
        <title>Crezalo: Privacy Policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center mt-4">
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Terms of Service for all services offered by Crezalo
          </p>
          <p className="mt-2 ml-16 text-base text-gray-300">10 January 2023</p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Welcome to Crezalo, a creator monetization platform that empowers
            creators to monetize their content and build a sustainable career.
            These Terms of Service govern your use of Crezalo, so please read
            them carefully before using our services.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            1. Acceptance of Terms
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            By using Crezalo, you agree to these Terms of Service and our
            Privacy Policy. If you do not agree with any part of these terms, do
            not use our services.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            2. Crezalo Services
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Crezalo provides a platform for creators to sell access to premium
            videos, courses, merchandise, and receive tips from their fans. We
            collect payment on behalf of the creators and pay out the entire
            amount once in 30 days from your start of subscription.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            3. Crezalo Pricing
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We offer a subscription-based pricing model that includes a free,
            basic, and premium tier. Creators can choose the pricing tier that
            suits their needs. The pricing details can be checked from our
            pricing section. Creators are allowed to change their pricing plan
            from 1st to 5th of every month. The changes made by the creators
            will be reflected from the 5th of the same month onwards.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            4. Creator Verification
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            To become a creator on Crezalo platform, you must undergo a KYC
            verification process. This process involves providing us with your
            personal details and a copy of your government-issued ID. In India,
            we require your PAN details for KYC verification. We take the
            privacy and security of your personal information seriously and
            ensure that all the information you provide is kept confidential and
            secure. Once your KYC verification is complete, you can start
            creating content, selling access to your content, and receiving tips
            from your fans. Please note that we reserve the right to reject any
            application for KYC verification or terminate any creator account
            that violates our terms of service.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            5. Creator Payment
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We collect payment on behalf of the creators and pay out the entire
            amount once in 30 days. Creators can view their earnings and
            transaction history in their Crezalo dashboard.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            6. Creator Content
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Creators are responsible for the content they upload to Crezalo.
            Creators must ensure that their content does not violate any laws or
            infringe on any third-party rights. Creators must also ensure that
            their content is appropriate and does not contain any obscene or
            offensive material.
          </p>
        </div>
        <div className="relative" id="returnpolicy">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            7. Return, Refund &amp; Cancellation Policy
          </p>
          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            7.1 Return Policy:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Creators have the option to select a 7-day return policy for each
            merchandise item they sell on our platform. If the creator has
            selected this policy, you may return the item within 7 days of
            receiving it for a full refund, as long as the item is in its
            original condition and packaging.
          </p>
          <br />
          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            7.2 Refund Policy:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Creators also have the option to select a 7-day refund policy for
            each merchandise item they sell on our platform. If the creator has
            selected this policy, you may request a refund within 7 days of
            receiving the item, as long as the item is in its original condition
            and packaging. The creator will review your request and determine if
            you are eligible for a refund. If approved, the creator will issue a
            refund to the original payment method used for the purchase.
          </p>
          <br />
          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            7.3 Cancellation Policy:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            If you wish to cancel your order, you may do so at any time before
            the item is shipped. Once the item has been shipped, the return and
            refund policies described above will apply.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Currently, we don't support return, refund or cancellation for
            Premium Video Memberships, Courses or Tips.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            8. Shipping Policy
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            At Crezalo, we strive to provide our users with the best possible
            experience when purchasing products from our creators. Our shipping
            policy is designed to ensure that you receive your merchandise in a
            timely and efficient manner.
          </p>
          <br />
          <p className="mt-2 ml-16 text-base text-gray-400">
            For each merchandise, creator can choose to ship via our third-party
            shipping providers or handle shipping by themselves.
          </p>
          <br />

          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            8.1 Third-Party Shipment Solutions:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We have partnered with reliable third-party shipment providers to
            ensure that your merchandise is shipped and delivered to you as
            quickly and efficiently as possible. Our creators can select their
            preferred shipment provider and shipping options, and can also
            decide what shipping cost to charge from their fans.
          </p>
          <br />
          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            8.2 Domestic Shipping:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Currently, we only offer domestic shipping within India. We do not
            offer international shipping at this time.
          </p>
          <br />
          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            8.3 Shipping Cost:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Creators will be charged the amount of shipping cost billed to us by
            the third-party shipment provider from their revenue. Creators can
            decide what shipping cost to charge from their fans.
          </p>
          <br />
          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            8.4 Shipping Time:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Shipping time may vary depending on the location of the buyer, the
            shipping option chosen by the creator, and the availability of the
            product. Usually it is expected to be from 3 days to 14 days, but we
            don't offer any guarantees. We strive to ensure that all products
            are shipped within a reasonable time frame, and we will provide you
            with a tracking number once the item has been dispatched. Please
            note that shipping times are estimated and are not guaranteed.
            Crezalo is not responsible for any delays or damages caused by the
            shipment provider.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            If you have any questions or concerns about our shipping policy or
            any other policies, please contact our customer support team for
            assistance.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            9. Payments and Logistics Partners information
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            At Crezalo, we have partnered with leading payment and logistics
            partners to ensure that our creators and buyers have a seamless and
            hassle-free experience. Here's some information about our payment
            and logistics partners:
          </p>
          <br />

          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            9.1 Payment Partners:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We are looking for payment gateway partners. These payment gateways
            should offer a secure and reliable way for our creators to receive
            payments from their fans. They should offer 0% fee for UPI and Rupay
            Debit Card transactions, and charge around 2% on debit/credit card
            transactions.
          </p>
          <br />
          <p className="ml-16 text-lg leading-6 font-medium text-gray-300">
            9.2 Logistics Partner:
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We use Shiprocket as our logistics partner for domestic shipping.
            Shiprocket is a leading logistics provider in India, and they offer
            a range of services to ensure that your merchandise is delivered
            safely and on time. With Shiprocket, you can track your shipment in
            real-time and receive updates on its status.
          </p>
          <br />
          <p className="mt-2 ml-16 text-base text-gray-400">
            We are committed to providing our creators and buyers with the best
            possible experience, and we believe that our payment and logistics
            partners play a crucial role in achieving this goal. If you have any
            questions or concerns about our payment and logistics partners,
            please feel free to contact our customer support team.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            10. Prohibited Items
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Creators can sell merchandise through Crezalo platform, but we do
            not allow the sale of any fake or counterfeit products.
            Additionally, the sale of any illegal items such as drugs, guns,
            explosives, or other illegal items is strictly prohibited. Creators
            are responsible for ensuring that their merchandise is legally
            compliant and that it does not infringe on any third - party rights.
            We reserve the right to remove any merchandise that we determine to
            be illegal or infringing on any third - party rights.Creators who
            violate these terms may have their account suspended or terminated.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            11. User Conduct
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Users of Crezalo must not engage in any activities that violate
            these Terms of Service or our Privacy Policy. Users must not upload
            or share any content that violates any laws or infringes on any
            third-party rights.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            12. Intellectual Property
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Crezalo respects the intellectual property rights of others and
            expects our users to do the same. If you believe that your
            intellectual property rights have been infringed on Crezalo, please
            contact us at customer@crezalo.com.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            13. Disclaimer
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Crezalo is a platform that provides services to its users, including
            the ability for creators to sell their products and services to
            their fans. While we strive to provide a high-quality platform and
            services, we cannot guarantee that the platform will be error-free,
            uninterrupted, or secure at all times.Additionally, we do not
            endorse or guarantee the quality or accuracy of the products,
            services, or information provided by our creators. Crezalo is not
            responsible for any damages or losses incurred by users as a result
            of using our platform or services, including but not limited to
            damages resulting from product defects, errors, or
            omissions.Furthermore, Crezalo complies with all applicable laws and
            regulations in India. However, Crezalo is not responsible for any
            violations of laws or regulations by its users or creators. Creators
            are responsible for ensuring that their products and services comply
            with all applicable laws and regulations.In using Crezalo, users
            agree to indemnify and hold harmless Crezalo, its affiliates, and
            its employees from any and all claims, damages, or losses arising
            from the use of the platform or services.If you have any questions
            or concerns about our disclaimer or any other policies, please
            contact us.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            14. Process flow to purchase the product &amp; service
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            1. Browse: Buyers can browse through the products and services
            offered by creators on the Crezalo platform.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            2. Select: Once the buyer has found a product or service they wish
            to purchase, they can select it and add it to their cart.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            3. Payment: The buyer can then proceed to the payment page, where
            they will be prompted to enter their payment details. Crezalo uses
            secure payment gateways to ensure that transactions are safe and
            secure.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            4. Shipping: If the product being purchased requires shipping, the
            buyer can select the shipping method and input the shipping address.
            The shipping cost will be displayed at this stage.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            5. Confirmation: Once the payment and shipping details have been
            entered, the buyer can review their order and confirm it.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            6. Creator notified: The creator will be notified of the purchase
            and will prepare the product for shipment (if applicable) or arrange
            for access to the service.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            7. Product delivery: The product will be shipped to the buyer's
            address (if applicable) or the buyer will receive access to the
            purchased service.
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            8. Feedback: After receiving the product or service, the buyer can
            leave feedback on the Crezalo platform, which will help other buyers
            make informed decisions in the future
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We strive to make the process of purchasing products and services on
            Crezalo as smooth and efficient as possible. If you have any
            questions or concerns about the purchasing process, please don't
            hesitate to contact our customer support team.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            15. Termination
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We reserve the right to terminate your access to Crezalo at any
            time, for any reason, without notice.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            16. Changes to Terms of Service
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We may modify these Terms of Service at any time, without notice.
            Your continued use of Crezalo after any changes to the Terms of
            Service constitutes your acceptance of the modified Terms of
            Service.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            17. Contact Us
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            If you have any questions about these Terms of Service, please
            contact us at customer@crezalo.com or +91-9879013901. 1B Abhilasha,
            Adajan, Surat, Gujarat-395009.
          </p>
        </div>
      </div>
    </div>
  );
}

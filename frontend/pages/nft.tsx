import { useRouter } from "next/router";
import NFTTable from "../components/NFTTable";
import Image from "next/image";
import NFTDetails from "../components/NFTDetails";

export default function NFT() {
  const router = useRouter();
  const { data } = router.query;

  return (
    <>
      <div className="nftPageImage">
        <Image
          src="/../public/xeldorado.png"
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
      <NFTDetails />
      <NFTTable />
      <p>{data}</p>
    </>
  );
}

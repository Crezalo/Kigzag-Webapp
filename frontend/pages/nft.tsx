import { useRouter } from "next/router";
import NFTTable from "../components/NFTTable";

export default function NFT() {
  const router = useRouter();
  const { data } = router.query;

  return (
    <>
      <NFTTable />
      <p>{data}</p>
    </>
  );
}

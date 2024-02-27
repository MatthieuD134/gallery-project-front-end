import { StaticImageData } from "next/image";

export interface NftInfo {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
}

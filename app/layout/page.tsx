import { Metadata } from "next";
import Demo from "./demo";

export const metadata: Metadata = {
  title: "Hololive Member List",
  description: "Choose your favorite Hololive member!",
};

const page = () => {
  return <Demo />;
};
export default page;

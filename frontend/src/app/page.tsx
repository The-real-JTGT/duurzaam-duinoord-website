import { Render } from "@measured/puck/rsc";
import { EditButton } from "../components/EditButton";
import { getDefaultPageData } from "../lib/default-page-data";
import { getPuckContent } from "../lib/get-puck-content";
import { config } from "../puck.config";

export default async function HomePage() {
  const puckData = await getPuckContent("/");
  const data = puckData || getDefaultPageData("/");

  return (
    <>
      <Render config={config} data={data} />
      <EditButton slug="home" />
    </>
  );
}

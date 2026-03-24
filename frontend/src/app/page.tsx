import { Render } from "@measured/puck/rsc";
import { EditButton } from "../components/EditButton";
import { getDefaultPageData } from "../lib/default-page-data";
import { isUserAuthorized } from "../lib/auth";
import { getPuckContent } from "../lib/get-puck-content";
import { config } from "../puck.config";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const puckData = (await getPuckContent("/home")) || (await getPuckContent("/"));
  const data = puckData || getDefaultPageData("/");
  const canEdit = await isUserAuthorized();

  return (
    <>
      <Render config={config} data={data} />
      {canEdit ? <EditButton slug="home" /> : null}
    </>
  );
}

import { AppContext } from "site/apps/site.ts";
import { Airtable } from "site/types/airtable.ts";

export interface Props {
  name?: string;
  email?: string;
  vehicle?: string;
  airtable?: Airtable;
}

export const action = async (props: Props, _req: Request, ctx: AppContext) => {
  const fields = {
    Nome: props.name,
    Email: props.email,
    Veiculo: props.vehicle,
  };

  const apiUrl = `https://api.airtable.com/v0/${props.airtable?.baseId}/${props.airtable?.tableId}`;

  const authToken = props.airtable?.authToken;

  if (!authToken) {
    throw new Error("Auth token not found");
  }

  const postContent = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    signal: new AbortController().signal,
    body: JSON.stringify({
      fields: fields,
    }),
  });

  const content = await postContent.json();

  return content;
};

export default action;

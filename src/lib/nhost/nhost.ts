import { region, subdomain } from "../../frontend/utils/env";
import { NhostClient } from "@nhost/react";

const nhost = new NhostClient({
  subdomain: subdomain,
  region: region,
});

const nhostConfig = { subdomain, region };

export { nhost, nhostConfig };

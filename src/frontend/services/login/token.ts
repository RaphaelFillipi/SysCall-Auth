import { nhost } from "../../../lib/nhost/nhost";

export const token = () => {
  return nhost.auth.getAccessToken();
};

import { useNhostClient } from "@nhost/react";

export const token = () => {
    const nhost = useNhostClient();

    return nhost.auth.getAccessToken();;
}


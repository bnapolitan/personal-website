import { personalClient } from "../client";

const playlistURL = "/playlists/";

export function getPlaylist(playlistID: string)
{
    return personalClient.get(playlistURL + playlistID);
}

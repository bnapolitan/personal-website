import { lambdaBaseURL, personalClient } from '../client';

const userURL = "/users/";

export function loginToSpotify()
{
    window.location.href = `${lambdaBaseURL}/spotify/login`;
}

export function getCurrentUserPlaylists()
{
    return personalClient.get("/me/playlists");
}

export function getCurrentUserSavedTracks()
{
    return personalClient.get("/me/tracks");
}

export function createPlaylist()
{
    return personalClient.post(userURL + "testid/playlists");
}

export function registerUser()
{
    return
}

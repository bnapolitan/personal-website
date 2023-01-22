import { lambdaBaseURL } from '../../client';

export function loginToSpotify()
{
    window.location.href = `${lambdaBaseURL}/spotify/login`;
}

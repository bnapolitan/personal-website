import { handleIfEmpty } from '../../../../utils/dataUtils';
import { handleError } from '../../../../utils/handleError';
import { lambdaClient } from '../../client';

const globalFastBaseUrl = "/globalFast";

export function registerNewGlobalFastUser(locations: string[], email?: string, phoneNumber?: string)
{
    if(!email && !phoneNumber)
    {
        handleError("At least one email or phone number must be provided!");
    }
    if(locations.length === 0)
    {
        handleError("At least one location needs to be specified to register!");
    }

    return lambdaClient.post(`${globalFastBaseUrl}/register`,
        null,
        {
            params: {
                locations: JSON.stringify(locations),
                email: handleIfEmpty(email),
                phoneNumber: handleIfEmpty(phoneNumber)
            }
        }
    );
}

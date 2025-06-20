import type { LogtoNextConfig } from '@logto/next';

export const logtoConfig: LogtoNextConfig = {
    endpoint: 'https://9brh5h.logto.app/',
    appId: 'hq35egiohst35djpzfvq8',
    appSecret: 'SmRutkypcUp80o4DE4TnDZuAxQR5xdpx',
    baseUrl: 'http://localhost:3000', 
    cookieSecret: 'BpV3kCOJykcr65uQ0bZTYF5PdhkGOTCy', 
    cookieSecure: process.env.NODE_ENV === 'production',
};

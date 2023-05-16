import { Pretty } from '@/utils/types';

export type CommonProperties = {
  enable: boolean;
};

export type SSH = Pretty<CommonProperties>;
export type User = Pretty<
  CommonProperties & {
    username: string;
    password: string;
  }
>;
export type WiFi = Pretty<
  CommonProperties & {
    ssid: string;
    psk: string;
    country_code: string;
  }
>;

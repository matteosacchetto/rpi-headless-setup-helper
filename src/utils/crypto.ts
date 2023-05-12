import { pbkdf2 } from 'node:crypto';

export const passphrase = async ({
  ssid,
  psk,
}: {
  ssid: string;
  psk: string;
}) => {
  return new Promise<string>((res, rej) => {
    pbkdf2(psk, ssid, 4096, 32, 'sha1', (err, derivedKey) => {
      if (err) {
        rej(err);
      } else {
        res(derivedKey.toString('hex'));
      }
    });
  });
};

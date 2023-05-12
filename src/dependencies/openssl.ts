import { exists as programExists } from '@/utils/program';

const name = 'openssl';

const exists = async () => {
  return programExists(name);
};

export const openssl = {
  name,
  exists,
};

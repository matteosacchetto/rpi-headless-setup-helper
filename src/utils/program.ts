import { exec as callbackExec } from 'node:child_process';
// Node modules
import { promisify } from 'node:util';
import which from 'which';

// Convert exec from a callback mechanism to a promise based one
export const exec = promisify(callbackExec);

export const exists = async (cmd: string) => {
  try {
    await which(cmd); // Throws if it does not exist
    return true;
  } catch (err) {
    throw new Error(`Program '${cmd}' does not exist`);
  }
};

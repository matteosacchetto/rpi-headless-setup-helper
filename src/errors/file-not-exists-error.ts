import { CustomError } from './custom-error';

export class FileNotExistsError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

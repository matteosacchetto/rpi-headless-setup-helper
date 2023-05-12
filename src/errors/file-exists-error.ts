import { CustomError } from './custom-error';

export class FileExistsError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

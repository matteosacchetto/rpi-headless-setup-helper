import { ValidationError } from '@/errors/validation-error';
import { kbd_layouts } from '@/utils/keyboard-layouts';

export const validate_kbd_layout = (kbd_layout: string) => {
  if (kbd_layouts.has(kbd_layout)) {
    return true;
  }

  throw new ValidationError(
    `The keyboard layuot ${kbd_layout} may not be supported`
  );
};

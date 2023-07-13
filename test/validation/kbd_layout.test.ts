import { validate_kbd_layout } from '@/validation/kbd_layout';
import t from 'tap';

t.test('valid keyboard layout', async (t) => {
  t.ok(validate_kbd_layout('us'));
});

t.test('invalid keyboard layout', async (t) => {
  t.throws(() => validate_kbd_layout('en'));
});

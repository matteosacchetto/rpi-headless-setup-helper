import type { ISO_3166_Codes } from './country-codes';

// Obtained with `localectl list-x11-keymap-layouts`
export const _kbd_layouts = [
  'af',
  'al',
  'am',
  'usa',
  'at',
  'au',
  'az',
  'ba',
  'bd',
  'be',
  'bg',
  'br',
  'brai',
  'bt',
  'bw',
  'by',
  'ca',
  'cd',
  'ch',
  'cm',
  'cn',
  'custom',
  'cz',
  'de',
  'dk',
  'dz',
  'ee',
  'epo',
  'es',
  'et',
  'fi',
  'fo',
  'fr',
  'gb',
  'ge',
  'gh',
  'gn',
  'gr',
  'hr',
  'hu',
  'id',
  'ie',
  'il',
  'in',
  'iq',
  'ir',
  'is',
  'it',
  'jp',
  'jv',
  'ke',
  'kg',
  'kh',
  'kr',
  'kz',
  'la',
  'latam',
  'lk',
  'lt',
  'lv',
  'ma',
  'mao',
  'md',
  'me',
  'mk',
  'ml',
  'mm',
  'mn',
  'mt',
  'mv',
  'my',
  'nec_vndr/jp',
  'ng',
  'nl',
  'no',
  'np',
  'ph',
  'pk',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'se',
  'si',
  'sk',
  'sn',
  'sy',
  'tg',
  'th',
  'tj',
  'tm',
  'tr',
  'tw',
  'tz',
  'ua',
  'us',
  'uz',
  'vn',
  'za',
] as const;
export type Kbd_Layouts = (typeof _kbd_layouts)[number];
export const kbd_layouts = new Set<string>(_kbd_layouts);

export const kbd_layout_by_locale: ReadonlyMap<ISO_3166_Codes, Kbd_Layouts> =
  new Map<ISO_3166_Codes, Kbd_Layouts>([
    ['AF', 'us'],
    ['AL', 'us'],
    ['DZ', 'fr'],
    ['AS', 'us'],
    ['AD', 'es'],
    ['AO', 'us'],
    ['AI', 'us'],
    ['AQ', 'us'],
    ['AG', 'us'],
    ['AR', 'es'],
    ['AX', 'us'],
    ['AM', 'us'],
    ['AW', 'us'],
    ['AU', 'us'],
    ['AT', 'de'],
    ['AZ', 'us'],
    ['BS', 'us'],
    ['BH', 'us'],
    ['BD', 'us'],
    ['BB', 'us'],
    ['BY', 'us'],
    ['BE', 'be'],
    ['BZ', 'us'],
    ['BJ', 'fr'],
    ['BM', 'us'],
    ['BT', 'us'],
    ['BO', 'es'],
    ['BQ', 'us'],
    ['BA', 'us'],
    ['BW', 'us'],
    ['BV', 'us'],
    ['BR', 'pt'],
    ['IO', 'us'],
    ['BN', 'us'],
    ['BG', 'us'],
    ['BF', 'fr'],
    ['BI', 'fr'],
    ['CV', 'pt'],
    ['KH', 'us'],
    ['CM', 'fr'],
    ['CA', 'us'],
    ['KY', 'us'],
    ['CF', 'fr'],
    ['TD', 'fr'],
    ['CL', 'es'],
    ['CN', 'us'],
    ['CX', 'us'],
    ['CC', 'us'],
    ['CO', 'es'],
    ['KM', 'fr'],
    ['CG', 'fr'],
    ['CD', 'fr'],
    ['CK', 'us'],
    ['CR', 'es'],
    ['CI', 'fr'],
    ['HR', 'us'],
    ['CU', 'es'],
    ['CW', 'us'],
    ['CY', 'us'],
    ['CZ', 'cz'],
    ['DK', 'dk'],
    ['DJ', 'fr'],
    ['DM', 'us'],
    ['DO', 'es'],
    ['EC', 'es'],
    ['EG', 'us'],
    ['SV', 'es'],
    ['GQ', 'es'],
    ['ER', 'us'],
    ['EE', 'us'],
    ['SZ', 'us'],
    ['ET', 'us'],
    ['FK', 'us'],
    ['FO', 'dk'],
    ['FJ', 'us'],
    ['FI', 'fi'],
    ['FR', 'fr'],
    ['GF', 'fr'],
    ['PF', 'fr'],
    ['TF', 'fr'],
    ['GA', 'fr'],
    ['GM', 'us'],
    ['GE', 'us'],
    ['DE', 'de'],
    ['GH', 'us'],
    ['GI', 'gb'],
    ['GR', 'us'],
    ['GL', 'us'],
    ['GD', 'us'],
    ['GP', 'fr'],
    ['GU', 'us'],
    ['GT', 'es'],
    ['GG', 'gb'],
    ['GN', 'fr'],
    ['GW', 'us'],
    ['GY', 'us'],
    ['HT', 'us'],
    ['HM', 'us'],
    ['VA', 'it'],
    ['HN', 'es'],
    ['HK', 'us'],
    ['HU', 'hu'],
    ['IS', 'is'],
    ['IN', 'us'],
    ['ID', 'id'],
    ['IR', 'us'],
    ['IQ', 'us'],
    ['IE', 'ie'],
    ['IM', 'gb'],
    ['IL', 'us'],
    ['IT', 'it'],
    ['JM', 'us'],
    ['JP', 'jp'],
    ['JE', 'gb'],
    ['JO', 'us'],
    ['KZ', 'us'],
    ['KE', 'us'],
    ['KI', 'us'],
    ['KP', 'us'],
    ['KR', 'us'],
    ['KW', 'us'],
    ['KG', 'us'],
    ['LA', 'us'],
    ['LV', 'lv'],
    ['LB', 'us'],
    ['LS', 'us'],
    ['LR', 'us'],
    ['LY', 'us'],
    ['LI', 'de'],
    ['LT', 'lt'],
    ['LU', 'de'],
    ['MO', 'us'],
    ['MG', 'fr'],
    ['MW', 'us'],
    ['MY', 'us'],
    ['MV', 'us'],
    ['ML', 'fr'],
    ['MT', 'us'],
    ['MH', 'us'],
    ['MQ', 'fr'],
    ['MR', 'us'],
    ['MU', 'us'],
    ['YT', 'fr'],
    ['MX', 'es'],
    ['FM', 'us'],
    ['MD', 'us'],
    ['MC', 'fr'],
    ['MN', 'mn'],
    ['ME', 'us'],
    ['MS', 'us'],
    ['MA', 'us'],
    ['MZ', 'pt'],
    ['MM', 'us'],
    ['NA', 'us'],
    ['NR', 'us'],
    ['NP', 'us'],
    ['NL', 'nl'],
    ['NC', 'fr'],
    ['NZ', 'us'],
    ['NI', 'es'],
    ['NE', 'fr'],
    ['NG', 'us'],
    ['NU', 'us'],
    ['NF', 'us'],
    ['MK', 'mk'],
    ['MP', 'us'],
    ['NO', 'no'],
    ['OM', 'us'],
    ['PK', 'us'],
    ['PW', 'us'],
    ['PS', 'us'],
    ['PA', 'es'],
    ['PG', 'us'],
    ['PY', 'es'],
    ['PE', 'es'],
    ['PH', 'us'],
    ['PN', 'us'],
    ['PL', 'pl'],
    ['PT', 'pt'],
    ['PR', 'us'],
    ['QA', 'us'],
    ['RE', 'fr'],
    ['RO', 'ro'],
    ['RU', 'ru'],
    ['RW', 'us'],
    ['BL', 'fr'],
    ['SH', 'gb'],
    ['KN', 'us'],
    ['LC', 'us'],
    ['MF', 'fr'],
    ['PM', 'fr'],
    ['VC', 'us'],
    ['WS', 'us'],
    ['SM', 'it'],
    ['ST', 'us'],
    ['SA', 'us'],
    ['SN', 'fr'],
    ['RS', 'us'],
    ['SC', 'fr'],
    ['SL', 'us'],
    ['SG', 'us'],
    ['SX', 'us'],
    ['SK', 'sk'],
    ['SI', 'si'],
    ['SB', 'us'],
    ['SO', 'us'],
    ['ZA', 'us'],
    ['GS', 'us'],
    ['SS', 'us'],
    ['ES', 'es'],
    ['LK', 'us'],
    ['SD', 'us'],
    ['SR', 'us'],
    ['SJ', 'no'],
    ['SE', 'se'],
    ['CH', 'de'],
    ['SY', 'us'],
    ['TW', 'us'],
    ['TJ', 'us'],
    ['TZ', 'us'],
    ['TH', 'th'],
    ['TL', 'pt'],
    ['TG', 'fr'],
    ['TK', 'us'],
    ['TO', 'us'],
    ['TT', 'us'],
    ['TN', 'us'],
    ['TR', 'tr'],
    ['TM', 'us'],
    ['TC', 'us'],
    ['TV', 'us'],
    ['UG', 'us'],
    ['UA', 'gb'],
    ['AE', 'us'],
    ['GB', 'gb'],
    ['US', 'us'],
    ['UM', 'us'],
    ['UY', 'es'],
    ['UZ', 'us'],
    ['VU', 'us'],
    ['VE', 'es'],
    ['VN', 'vn'],
    ['VG', 'us'],
    ['VI', 'us'],
    ['WF', 'fr'],
    ['EH', 'us'],
    ['YE', 'us'],
    ['ZM', 'us'],
    ['ZW', 'us'],
    ['XK', 'us'],
  ]);

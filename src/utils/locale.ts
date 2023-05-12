export const get_locale_country = () => {
  return Intl.DateTimeFormat().resolvedOptions().locale;
};

export const get_country_from_locale = (locale: string) => {
  return locale.includes('-') ? locale.split('-').at(-1)! : '';
};

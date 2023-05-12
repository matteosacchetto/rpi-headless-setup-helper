import confirm from '@inquirer/confirm';

export const confirm_overwrite_prompt = async () => {
  const confirm_overwrite = (await confirm({
    message: 'Do you want to overwrite it?',
    default: false,
  })) as boolean;

  return confirm_overwrite;
};

import confirm from '@inquirer/confirm';

export const ssh_prompt = async () => {
  const enable = await confirm({
    message: 'Enable SSH',
    default: true,
  });

  return {
    enable,
  };
};

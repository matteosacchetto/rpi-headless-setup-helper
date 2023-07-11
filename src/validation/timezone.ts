import { ValidationError } from "@/errors/validation-error";
import { timezone_list } from "@/utils/timezone"

export const validate_timezone = (timezone: string) => {
  if(timezone_list.has(timezone)) {
    return true;
  }

  throw new ValidationError(`Timezone ${timezone} is not supported`);
}
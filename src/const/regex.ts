export const user_regex = /^[a-z_][a-z0-9_-]*[$]?$/;

export const ssid_regex =
  /^[^!#;+\]/"\t][^+\]/"\t]{0,30}[^ !#;+\]/"\t]$|^[^ !#;+\]/"\t]$/;

export const hostname_regex =
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/;

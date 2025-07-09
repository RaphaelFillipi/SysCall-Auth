export const NAME_REGEX: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
export const SURNAME_REGEX: RegExp =
  /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
export const EMAIL_ALLOWED_REGEX: RegExp = /^[a-zA-Z0-9@.]+$/;
export const CONTAINS_SPECIAL_CHAR_REGEX: RegExp = /[^a-zA-Z0-9]/;
export const UPPERCASE_REGEX: RegExp = /[A-Z]/;
export const LOWERCASE_REGEX: RegExp = /[a-z]/;
export const NUMBER_REGEX: RegExp = /[0-9]/;

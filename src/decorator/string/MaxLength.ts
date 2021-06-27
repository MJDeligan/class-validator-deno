import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";
import validator from "../../validator.ts";

export const MAX_LENGTH = "maxLength";

/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function maxLength(value: unknown, max: number) {
  return (
    typeof value === "string" && validator.maxLength(value, max);
  );
}

/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MaxLength(
  max: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: MAX_LENGTH,
      constraints: [max],
      validator: {
        validate: (value: unknown, args) => maxLength(value, args?.constraints[0]),
        defaultMessage: buildMessage(
          (eachPrefix: string) =>
            eachPrefix +
            "$property must be shorter than or equal to $constraint1 characters",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}

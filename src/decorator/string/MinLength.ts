import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";
import validator from "../../validator.ts";

export const MIN_LENGTH = "minLength";

/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function minLength(value: unknown, min: number) {
  return typeof value === "string" && validator.minLength(value, min);
}

/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MinLength(
  min: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: MIN_LENGTH,
      constraints: [min],
      validator: {
        validate: (value, args) => minLength(value, args?.constraints[0]),
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "$property must be longer than or equal to $constraint1 characters",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}

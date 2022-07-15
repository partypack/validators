export interface Validator {
  (value: unknown): ValidationResult;
}

export type ValidationResult = string | undefined;

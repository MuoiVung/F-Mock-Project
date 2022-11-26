import type {TextInputProps} from 'react-native';

import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

export type CustomInputProps<TFormValues extends FieldValues> = {
  label: string;
  textInputProps?: TextInputProps;
  hasIcon?: boolean;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  onPress?: () => void;
  field: Path<TFormValues>;
  control: Control<TFormValues>;
  error?: Partial<FieldErrorsImpl<TFormValues>>;
  rules?: RegisterOptions;
};

export type LoginFormFields = {
  email: string;
  password: string;
};
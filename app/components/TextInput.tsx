import { Input } from "@nextui-org/react";
import React, { ForwardedRef, ReactNode } from "react";

type TextInputProps = {
  className?: string
  label: string
  error: boolean
  description?: string
  disabled?: boolean
  value?: string | undefined
  clearable?: boolean
  onChange?: () => void
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ className, label, error, description, disabled, value, clearable, onChange }: TextInputProps, ref: ForwardedRef<HTMLInputElement>): ReactNode => {
  return (
    <div className={`${className} w-52 h-20 my-6`}>
      <Input
        isClearable={clearable ?? true}
        type="text"
        label={label}
        variant="underlined"
        description={description}
        value={value}
        className="max-w-xs"
        isInvalid = {value ? false : error}
        isDisabled = {disabled}
        onChange={onChange}
        ref={ref}
    />
    </div>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;

export type Option = {
  value: string;
  label: string;
};

export type DropdownProps = {
  value?: string;
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: Option;
  isDisabled?: boolean;
};

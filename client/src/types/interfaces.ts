export interface ListType {
  id: number;
  name: string;
  closed: boolean;
};

export interface CheckboxType {
  isChecked: boolean;
};

export interface DeleteIconType {
  onClick: () => void;
};

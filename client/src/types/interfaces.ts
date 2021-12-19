export interface ListType {
  id: string;
  name: string;
  closed: boolean;
  idList?: string;
};

export interface CheckboxType {
  isChecked: boolean;
};

export interface DeleteIconType {
  onClick: () => void;
};

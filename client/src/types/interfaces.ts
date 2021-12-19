export interface ListType {
  /* userId: number;
  id: number;
  title: string;
  completed: boolean; */
  userId: number;
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

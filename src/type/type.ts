export interface Attributes {
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface ResponseData {
  data: Data[];
  meta: Meta;
}

export interface ItemInter {
  id: number;
  imageUrl: string;
  price: string;
  typeGender: string;
  typeMer: string;
  typeResh: string;
}

export interface GenderStore {
  genderChildren: boolean;
  genderMan: boolean;
  genderWoman: boolean;
}

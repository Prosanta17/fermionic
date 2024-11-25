interface IFile {
  _id: string;
  name: string;
  url: string;
  type: string;
}

export type Product = {
  _id: string;
  name: string;
  shortDescription: string;
  details: string;
  files: IFile[];
  isFeatured: boolean;
  createdAt?: Date;
};

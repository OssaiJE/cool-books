export interface BookInterface {
  userid: string;
  title: string;
  author: string;
  shortdesc: string;
  imagepath: string;
  typrtag: string;
  lookingfor: string;
  createdDate?: Date; // ? makes the field optional
}

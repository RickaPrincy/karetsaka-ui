import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { firebaseApp } from "@/config/firebase";

export type FileType = {
  path: string;
  rawFile: File;
};

export class storageProvider {
  private static readonly storage = getStorage(firebaseApp);
  static async uploadFiles(file: FileType) {
    const response = await uploadBytes(this.getRef(file.path), file.rawFile);
    return {
      url: await getDownloadURL(response.ref),
    };
  }
  static async deleteFile(path: string) {
    return await deleteObject(this.getRef(path));
  }
  static getRef(url: string) {
    return ref(this.storage, url);
  }
}

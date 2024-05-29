export type ResourceIdentifier = { id: string };
export type MUTATION_TYPE = "CREATE" | "UPDATE";

export type KaretsakaDataProvider<T extends ResourceIdentifier> = {
  getOne: (id: string, meta: any) => Promise<T>;
  saveOrUpdate: (
    payload: T,
    meta: { mutationType: MUTATION_TYPE; [T: string]: any }
  ) => Promise<T>;
  getList: (
    page: number,
    pageSize: number,
    filter: any,
    sort: any,
    meta: any
  ) => Promise<T[]>;
  delete: (id: string, meta: any) => Promise<T>;
};

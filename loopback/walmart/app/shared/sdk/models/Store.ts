/* tslint:disable */

declare var Object: any;
export interface StoreInterface {
  opendate: any;
  latitude: string;
  longitude: string;
  type_store: string;
  id?: any;
}

export class Store implements StoreInterface {
  opendate: any;
  latitude: string;
  longitude: string;
  type_store: string;
  id: any;
  constructor(instance?: StoreInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Store`.
   */
  public static getModelName() {
    return "Store";
  }
}

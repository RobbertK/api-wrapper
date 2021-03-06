import OwnedResourceProxy from '../proxy/OwnedResourceProxy';
import CrudBase from './base/CrudBase';
import Permission from './Permission';
import User from './User';

export default class Role extends CrudBase {
  /**
   * Get the list permissions linked to the role
   * @returns {SimpleResourceProxy} - A proxy for accessing the resource
   */
  get permissions() {
    return new OwnedResourceProxy(this.api, this, Permission);
  }

  /**
   * Get the list users linked to the role
   * @returns {SimpleResourceProxy} - A proxy for accessing the resource
   */
  get users() {
    return new OwnedResourceProxy(this.api, this, User);
  }

  static get resourceName() {
    return 'roles';
  }
}

import BaseApi from "./base.api"
import Http from "@services/http";

export default class ReadingsApi extends BaseApi {
    static get entity() {
        return 'readings'
    }
}

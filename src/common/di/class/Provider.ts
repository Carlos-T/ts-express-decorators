import {getClass, nameOf, NotEnumerable, Type} from "@tsed/core";
import {IProvider} from "../interfaces/IProvider";
import {ProviderType} from "../interfaces/ProviderType";

export class Provider<T> implements IProvider<T> {

    @NotEnumerable()
    protected _useClass: Type<T>;

    @NotEnumerable()
    protected _instance: T;

    @NotEnumerable()
    protected _type: ProviderType | any = ProviderType.PROVIDER;

    constructor(protected _provide: any) {
        this._provide = getClass(this._provide);
        this._useClass = getClass(this._provide);
    }

    /**
     *
     * @returns {any}
     */
    get provide(): any {
        return this._provide;
    }

    /**
     *
     * @param value
     */
    set provide(value: any) {
        this._provide = value;
    }

    /**
     *
     * @returns {Type<T>}
     */
    get useClass(): Type<T> {
        return this._useClass || this._provide;
    }

    /**
     *
     * @param value
     */
    set useClass(value: Type<T>) {
        this._useClass = value;
    }

    /**
     *
     * @returns {T}
     */
    get instance(): T {
        return this._instance;
    }

    /**
     *
     * @param value
     */
    set instance(value: T) {
        this._instance = value;
    }

    /**
     *
     * @returns {any}
     */
    get type(): any {
        return this._type;
    }

    /**
     *
     * @param value
     */
    set type(value: any) {
        this._type = value;
    }

    get className() {
        return nameOf(this.provide);
    }
}
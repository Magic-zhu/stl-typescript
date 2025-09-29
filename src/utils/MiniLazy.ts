export class MiniLazy<T> {
  _value?: T;
  readonly _factory: () => T;

  constructor(factory: () => T) {
    this._factory = factory;
  }

  get value(): T {
    if (this._value === undefined) {
      this._value = this._factory();
    }
    return this._value;
  }
}

class Thread {
    private _pc: Uint16Array;

    constructor() {

    }

    get pc(): Uint16Array {
        return this._pc;
    }

}

class VM {
    public static newThread(): Thread {

        return new Thread();
    }

    public static run(): void {

    }

    public static step(): void {

    }

    public static cpu(): void {

    }

}


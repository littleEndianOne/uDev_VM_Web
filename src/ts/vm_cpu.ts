class Thread {
    private _pc: number;

    constructor() {

    }

    get pc(): number {
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


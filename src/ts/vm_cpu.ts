export class Thread {
    private _globalsCount: number; // Globally scoped string variables
    private _code: Uint8Array; // Array of byte codes to be executed
    // vm_element* globalsArray; //Globally scoped number variables
    // vm_element* opStack; //Virtual stack
    private _stackSize: number;
    private _pc: number; // Program counter
    private _sp: number; // Stack pointer -ve 1 indicates empty stack (needs to be signed)
    // vm_scope* localScope; //Pointer to current function scope struct (for local scope)
    // vm_scope* initScope; //Pointer to initial (default) local scope. Used for checking on RET.
    // vm_opcode opcode; //Current executing opcode
    // vm_state runState; //Current run state of VM
    // vm_error errorState; //System error that caused FAULT state
    // jmp_buf sysErrorEnv; //Reset point buffer for system errors.
    private _codeSize: number;

    constructor(codeSize: number) {
        this._codeSize = codeSize;
    }

    get pc(): number {
        return this._pc;
    }

    get CodeSize(): number {
        return this._codeSize;
    }
}


// Run state of the VM.
export enum VMRunState {
    READY = 0, // initialized and ready to run
    EVENT_LOOP = 1, // Running event loop
    RUNNING = 2, // executing opcodes
    FAULT = 3, // terminated due to system fault
    HALTED = 4, // terminated without error by HAULT opcode
}

// Operators
export enum Opcode {
    CONSTF = 1, // Push 32b float
    CONSTF8 = 2, // Push 32b float from 8b singed -128 to 127
    CONSTF16 = 3, // Push 32b float from 16b integer
    CONSTFN0 = 4, // Push float with value 0
    CONSTFN1 = 5, // Push float with value 1
    CONSTFN2 = 6, // Push float with value 2
    CONSTFN3 = 7, // Push float with value 3
    CONSTFN4 = 8, // Push float with value 4
    CONSTFN5 = 9, // Push float with value 5
    CONSTFN6 = 10, // Push float with value 6
    CONSTFN7 = 11, // Push float with value 7
    CONSTFN8 = 12, // Push float with value 8
    CONSTFN9 = 13, // Push float with value 9
    CONSTFN10 = 14, // Push float with value 10
    CONSTI = 15, // Push 32b signed int
    CONSTI8 = 16, // 8b singed int -128 to 127
    CONSTI16 = 17, // Push 16b int
    CONSTIN0 = 18, // Push int with value 0
    STRLIT = 19, // Load code address for string literal onto operand stack.
    ADDF = 20, // Add two number types
    SUBF = 21, // Subtract a number from another
    DIVF = 22, // Divide a number by another
    MULF = 23, // Multiply a number by another
    EQF = 24, // Number equal a == b : 1 = True 0 = False
    LTF = 25, // Number less than a < b : 1 = True 0 = False
    GTF = 26, // Number greater than a > b : 1 = True 0 = False
    NEQF = 27, // Number not equal a!=b : 1 = True 0 = False
    ADDI = 28, // Add two number types
    SUBI = 29, // Subtract a number from another
    DIVI = 30, // Divide a number by another
    MULI = 31, // Multiply a number by another
    EQI = 32, // Number equal a == b : 1 = True 0 = False
    LTI = 33, // Number less than a < b : 1 = True 0 = False
    GTI = 34, // Number greater than a > b : 1 = True 0 = False
    NEQI = 35, // Number not equal a!=b : 1 = True 0 = False
    JMP = 36, // Unconditional jump to prog mem address
    JMPT = 37, // Jump to prog mem address if top stack value is 1
    JMPF = 38, // Jump to prog mem address if top stack value is 0
    CALL = 39, // Call function at address
    RET = 40, // Return from function
    LDARG = 41, // Load function arguments at address
    DSTR = 42, // Create a string of 'size' at local 'address'
    STORE = 43, // Store top stack element in local variable at address
    LOAD = 44, // Load stack element from local variable at address
    APPND = 45, // Append number, strRef, strLit type to string at local 'address'
    TOSTR = 46, // Convert a number (float/integer) type to a string with 'precision'. Pops: Number.
    GDSTR = 47, // Create a string of 'size' at global 'address'
    GSTORE = 48, // Store top stack element in global variable at address
    GLOAD = 49, // Load stack element from global variable at address
    GAPPND = 50, // Append number, strRef, strLit type to string at global address
    GCONV = 51, // Convert a number type to a string with 'precision' and store it in global variable at 'address'
    POP = 52, // Throw away element on top of the stack
    DARRAY = 53, // Create a locally stored array at address.
    STOREAE = 54, // Store an array element locally at index.
    LOADAE = 55, // Load a locally stored array element onto the stack.
    GDARRAY = 56, // Create a globally stored array at address.
    GSTOREAE = 57, // Store an array element globally at index.
    GLOADAE = 58, // Load a global store array element onto the stack.
    PROMOTE = 59, // Promote an integer into a float (Round to nearest integer).
    DEMOTE = 60, // Demote a float into an integer.

    HALT = 255, // Stop vm execution
}

// The type of elements that can be on the operand stack and in variables.
export enum Types {
    NONE = 0, // No type set - used as initial value
    INTEGER = 1,
    FLOAT = 2, // A floating point number (float32)
    STRING_LIT = 3, // Reference to string stored in prog mem
    STRING_REF = 4, // Reference to string stored in local or global variable
    ARRAY_REF = 5, // Reference to a NUMBER array in a local or global variable
}

// String stored in a local or global variable
export interface IStringRef {
    allocLength: number;
    charPtr: string;
}

// String in prog mem
export interface IStringLit {
    length: number;
    address: number;
}

// Stores type and data for stack elements and variables.
// tslint:disable-next-line: max-classes-per-file
export class Element {
    public type: Types;
    public value: number | IStringRef | IStringLit | Element;
}

// Struct for managing an array in a variable.
export interface IArray {
    size: number;
    data: Element[];
}


export class VM {
    public static NewThread(): Thread {

        return new Thread(0);
    }

    public static run(): void {

    }

    public static step(): void {

    }

    public static cpu(): void {

    }

}


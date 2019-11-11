"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VM;
(function (VM_1) {
    class Thread {
        constructor() {
        }
        get pc() {
            return this._pc;
        }
    }
    VM_1.Thread = Thread;
    let VMRunState;
    (function (VMRunState) {
        VMRunState[VMRunState["READY"] = 0] = "READY";
        VMRunState[VMRunState["EVENT_LOOP"] = 1] = "EVENT_LOOP";
        VMRunState[VMRunState["RUNNING"] = 2] = "RUNNING";
        VMRunState[VMRunState["FAULT"] = 3] = "FAULT";
        VMRunState[VMRunState["HALTED"] = 4] = "HALTED";
    })(VMRunState || (VMRunState = {}));
    let Opcode;
    (function (Opcode) {
        Opcode[Opcode["CONSTF"] = 1] = "CONSTF";
        Opcode[Opcode["CONSTF8"] = 2] = "CONSTF8";
        Opcode[Opcode["CONSTF16"] = 3] = "CONSTF16";
        Opcode[Opcode["CONSTFN0"] = 4] = "CONSTFN0";
        Opcode[Opcode["CONSTFN1"] = 5] = "CONSTFN1";
        Opcode[Opcode["CONSTFN2"] = 6] = "CONSTFN2";
        Opcode[Opcode["CONSTFN3"] = 7] = "CONSTFN3";
        Opcode[Opcode["CONSTFN4"] = 8] = "CONSTFN4";
        Opcode[Opcode["CONSTFN5"] = 9] = "CONSTFN5";
        Opcode[Opcode["CONSTFN6"] = 10] = "CONSTFN6";
        Opcode[Opcode["CONSTFN7"] = 11] = "CONSTFN7";
        Opcode[Opcode["CONSTFN8"] = 12] = "CONSTFN8";
        Opcode[Opcode["CONSTFN9"] = 13] = "CONSTFN9";
        Opcode[Opcode["CONSTFN10"] = 14] = "CONSTFN10";
        Opcode[Opcode["CONSTI"] = 15] = "CONSTI";
        Opcode[Opcode["CONSTI8"] = 16] = "CONSTI8";
        Opcode[Opcode["CONSTI16"] = 17] = "CONSTI16";
        Opcode[Opcode["CONSTIN0"] = 18] = "CONSTIN0";
        Opcode[Opcode["STRLIT"] = 19] = "STRLIT";
        Opcode[Opcode["ADDF"] = 20] = "ADDF";
        Opcode[Opcode["SUBF"] = 21] = "SUBF";
        Opcode[Opcode["DIVF"] = 22] = "DIVF";
        Opcode[Opcode["MULF"] = 23] = "MULF";
        Opcode[Opcode["EQF"] = 24] = "EQF";
        Opcode[Opcode["LTF"] = 25] = "LTF";
        Opcode[Opcode["GTF"] = 26] = "GTF";
        Opcode[Opcode["NEQF"] = 27] = "NEQF";
        Opcode[Opcode["ADDI"] = 28] = "ADDI";
        Opcode[Opcode["SUBI"] = 29] = "SUBI";
        Opcode[Opcode["DIVI"] = 30] = "DIVI";
        Opcode[Opcode["MULI"] = 31] = "MULI";
        Opcode[Opcode["EQI"] = 32] = "EQI";
        Opcode[Opcode["LTI"] = 33] = "LTI";
        Opcode[Opcode["GTI"] = 34] = "GTI";
        Opcode[Opcode["NEQI"] = 35] = "NEQI";
        Opcode[Opcode["JMP"] = 36] = "JMP";
        Opcode[Opcode["JMPT"] = 37] = "JMPT";
        Opcode[Opcode["JMPF"] = 38] = "JMPF";
        Opcode[Opcode["CALL"] = 39] = "CALL";
        Opcode[Opcode["RET"] = 40] = "RET";
        Opcode[Opcode["LDARG"] = 41] = "LDARG";
        Opcode[Opcode["DSTR"] = 42] = "DSTR";
        Opcode[Opcode["STORE"] = 43] = "STORE";
        Opcode[Opcode["LOAD"] = 44] = "LOAD";
        Opcode[Opcode["APPND"] = 45] = "APPND";
        Opcode[Opcode["TOSTR"] = 46] = "TOSTR";
        Opcode[Opcode["GDSTR"] = 47] = "GDSTR";
        Opcode[Opcode["GSTORE"] = 48] = "GSTORE";
        Opcode[Opcode["GLOAD"] = 49] = "GLOAD";
        Opcode[Opcode["GAPPND"] = 50] = "GAPPND";
        Opcode[Opcode["GCONV"] = 51] = "GCONV";
        Opcode[Opcode["POP"] = 52] = "POP";
        Opcode[Opcode["DARRAY"] = 53] = "DARRAY";
        Opcode[Opcode["STOREAE"] = 54] = "STOREAE";
        Opcode[Opcode["LOADAE"] = 55] = "LOADAE";
        Opcode[Opcode["GDARRAY"] = 56] = "GDARRAY";
        Opcode[Opcode["GSTOREAE"] = 57] = "GSTOREAE";
        Opcode[Opcode["GLOADAE"] = 58] = "GLOADAE";
        Opcode[Opcode["PROMOTE"] = 59] = "PROMOTE";
        Opcode[Opcode["DEMOTE"] = 60] = "DEMOTE";
        Opcode[Opcode["HALT"] = 255] = "HALT";
    })(Opcode || (Opcode = {}));
    let Types;
    (function (Types) {
        Types[Types["NONE"] = 0] = "NONE";
        Types[Types["INTEGER"] = 1] = "INTEGER";
        Types[Types["FLOAT"] = 2] = "FLOAT";
        Types[Types["STRING_LIT"] = 3] = "STRING_LIT";
        Types[Types["STRING_REF"] = 4] = "STRING_REF";
        Types[Types["ARRAY_REF"] = 5] = "ARRAY_REF";
    })(Types || (Types = {}));
    class Element {
    }
    VM_1.Element = Element;
    class VM {
        static NewThread() {
            return new Thread();
        }
        static run() {
        }
        static step() {
        }
        static cpu() {
        }
    }
    VM_1.VM = VM;
})(VM || (VM = {}));
//# sourceMappingURL=vm_cpu.js.map
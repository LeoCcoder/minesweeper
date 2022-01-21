let a: number;
let b: boolean;
let c: string;

interface BasicUser {
    name: string;
    surname: string;
    age: number;
    isAdmin: boolean;
};

interface UserWithPermissions extends BasicUser {
    permissions?: string[];
};

let user: UserWithPermissions = {
    name: "Leo",
    surname: "Aduev",
    age: 24,
    isAdmin: true 
}

let user2: UserWithPermissions = {
    name: "Nick",
    surname: "Ovchinnikov",
    age: 30,
    isAdmin: true,
    permissions: ['manager', 'operator']
}

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;
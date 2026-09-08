export type User = {
    id: number,
    name: string,
}

export function greetUser(user: User) {
    console.log(`id: ${user.id} | name: ${user.name}`);
}
import { Users } from "@/types/users";
import sql from "./db";
import * as argon2 from "argon2";

export async function loginUser(username: string, password: string){
    const row = await sql<{ p: string }[]>`select salthash from Local_Login where user_id in (select user_id from Users where username = ${ username });`
    const salthash = row[0]?.p;
    if (await argon2.verify(salthash, password)) {
        const user = (await sql<Users[]>`select * from Users where username = ${ username };`)?.[0]
        return user;
    } else {
        return null;
    }
}

export async function addUser(username: string, password: string){
    const hashsalt = await argon2.hash(password);
    const user_id = await sql.begin(async sql => {
        const row = await sql`
        insert into Users (username)
            values (${ username })
            returning user_id;
        `

        const user_id = row[0].user_id;

        const _ = await sql`
        insert into Authentication_Manager (user_id)
            values (${ user_id });

        insert into Local_Login(user_id, salthash)
            values (${ user_id }, ${ hashsalt })
        `
        return user_id
    });

    let user: Users = {
        username: username,
        user_id: user_id
    }

    return user;

}
import db from '../db';
import User from "../model/user.model";

class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const result = await db.query<User[]>(query);
        const rows = result.rows;
        
        return rows || [];
    }
}

export default new UserRepository();
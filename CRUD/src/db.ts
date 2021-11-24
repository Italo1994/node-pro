import { Pool } from 'pg';

const connectionString = 'postgres://uufvxwov:***@kesavan.db.elephantsql.com/uufvxwov';
const db = new Pool({ connectionString });

export default db;
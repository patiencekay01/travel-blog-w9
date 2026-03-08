import pg from "pg"

export default function connection() {
    return new pg.Pool({connectionString: process.env.DB_CONN})
}


import { Client } from 'pg';

const pgClient = new Client("postgresql://neondb_owner:RfqWowA2pjL0@ep-curly-fog-a1drbl0l.ap-southeast-1.aws.neon.tech/neondb?sslmode=require")

pgClient.connect()
const main = async () => {
    const result = await pgClient.query('select * from sule_table')
    console.log(result.rows)
}

main()

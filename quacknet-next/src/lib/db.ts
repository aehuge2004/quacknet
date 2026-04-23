import Database from 'better-sqlite3'
import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'local.db')
const dbExists = fs.existsSync(dbPath)
const db = new Database(dbPath)

if (!dbExists) {
  try {
    console.log("Running schema and seed...")
    const schema = fs.readFileSync(path.join(process.cwd(), 'db/TableDDL.sql'), 'utf8')
    db.exec(schema)
    const seedPath = path.join(process.cwd(), 'db/DummyData.sql')
    if (fs.existsSync(seedPath)) {
      db.exec(fs.readFileSync(seedPath, 'utf8'))
    }
  } catch (err) {
    console.error('DB setup error:', err)
  }
}
export default db
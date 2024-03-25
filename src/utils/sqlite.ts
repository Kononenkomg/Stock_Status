import { USERS } from '@/constants/users'
import { User } from '@/types'
import { PAINTS } from '@/constants/paint'
import { Database } from '@sqlitecloud/drivers'

export function openDB() {
  return new Database(
    `sqlitecloud://${process.env.NEXT_PUBLIC_SQLITE_USER}:${process.env.NEXT_PUBLIC_SQLITE_PASSWORD}@cjjeucu1sz.sqlite.cloud:8860/paintstock`
  )
}

export function initialSetUp(db: Database): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      db.sql(
        'CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT, role TEXT, permissions TEXT, disabled INTEGER)'
      )
      db.sql(
        'CREATE TABLE paints (id INTEGER PRIMARY KEY, name TEXT, color TEXT, stock INTEGER, price REAL)'
      )
      USERS.forEach((user) => {
        db.sql(
          `INSERT INTO users (id, name, email, password, role, permissions, disabled) VALUES (${
            user.id
          }, "${user.name}", "${user.email}", "${user.password}", "${
            user.role
          }", '${JSON.stringify(user.permissions)}', ${user.disabled ? 1 : 0})`
        )
      })
      PAINTS.forEach((paint) => {
        db.sql(
          `INSERT INTO paints (id, name, color, stock, price) VALUES (${paint.id}, "${paint.name}", "${paint.color}", ${paint.stock}, ${paint.price})`
        )
      })
      resolve()
    } catch (err) {
      reject(err)
    }
  })
}

export function isTableExists(db: Database, tableName: string) {
  return new Promise<boolean>((resolve, reject) => {
    db.get(
      `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`,
      (err, row) => {
        if (err) {
          reject(err)
        } else {
          resolve(!!row)
        }
      }
    )
  })
}

export function getUserByEmail(db: Database, email: string) {
  return new Promise<any>((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row) => {
      if (err) {
        reject(err)
      } else {
        resolve(row)
      }
    })
  })
}

export function getAllUsers(db: Database) {
  return new Promise<any[]>((resolve, reject) => {
    db.all(`SELECT * FROM users`, (err, rows) => {
      if (err || !rows) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

export function updateUser(db: Database, user: User) {
  return new Promise<void>((resolve, reject) => {
    db.run(
      `UPDATE users SET name="${user.name}", email="${user.email}", role="${
        user.role
      }", permissions='${user.permissions}', disabled=${
        user.disabled ? 1 : 0
      } WHERE id=${user.id}`,
      (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      }
    )
  })
}

export function getAllPaints(db: Database) {
  return new Promise<any[]>((resolve, reject) => {
    db.all(`SELECT * FROM paints`, (err, rows) => {
      if (err || !rows) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

export function updatePaintStock(
  db: Database,
  paintId: number,
  newStock: string
) {
  return new Promise<void>((resolve, reject) => {
    db.run(
      `UPDATE paints SET stock = ? WHERE id = ?`,
      [newStock, paintId],
      (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      }
    )
  })
}

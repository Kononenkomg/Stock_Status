import { USERS } from '@/constants/users'
import { User } from '@/types'
import path from 'path'
import sqlite3 from 'sqlite3'
import { Database } from 'sqlite3'
import { PAINTS } from '@/constants/paint'

export function openDB() {
  const dbPath =
    process.env.NEXT_PUBLIC_STAGE === 'development'
      ? path.resolve(process.cwd(), 'public', 'myDatabase.db')
      : `https://stock-status-ruddy.vercel.app/myDatabase.db`
  return new Database(dbPath)
}

export function initialSetUp(db: Database): Promise<void> {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        'CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT, role TEXT, permissions TEXT, disabled INTEGER)',
        (err) => {
          if (err) return reject(err)

          USERS.forEach((user) => {
            db.run(
              `INSERT INTO users (id, name, email, password, role, permissions, disabled) VALUES (${
                user.id
              }, "${user.name}", "${user.email}", "${user.password}", "${
                user.role
              }", '${JSON.stringify(user.permissions)}', ${
                user.disabled ? 1 : 0
              })`,
              (err) => {
                if (err) return reject(err)
              }
            )
          })

          db.run(
            'CREATE TABLE paints (id INTEGER PRIMARY KEY, name TEXT, color TEXT, stock INTEGER, price REAL)',
            (err) => {
              if (err) return reject(err)

              PAINTS.forEach((paint) => {
                db.run(
                  `INSERT INTO paints (id, name, color, stock, price) VALUES (${paint.id}, "${paint.name}", "${paint.color}", ${paint.stock}, ${paint.price})`,
                  (err) => {
                    if (err) return reject(err)
                  }
                )
              })

              resolve()
            }
          )
        }
      )
    })
  })
}

export function isTableExists(db: sqlite3.Database, tableName: string) {
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

export function getUserByEmail(db: sqlite3.Database, email: string) {
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

export function getAllUsers(db: sqlite3.Database) {
  return new Promise<any[]>((resolve, reject) => {
    db.all(`SELECT * FROM users`, (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

export function updateUser(db: sqlite3.Database, user: User) {
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

export function getAllPaints(db: sqlite3.Database) {
  return new Promise<any[]>((resolve, reject) => {
    db.all(`SELECT * FROM paints`, (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

export function updatePaintStock(
  db: sqlite3.Database,
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

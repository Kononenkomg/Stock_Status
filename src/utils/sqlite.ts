import { USERS } from '@/constants/users';
import path from 'path';
import sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';


export function openDB() {
  const dbPath = path.resolve(__dirname, 'myDatabase.db');
  return new Database(dbPath);
}


export function initialSetUp(db: sqlite3.Database) {
    db.serialize(() => {
      db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT, role TEXT)');
      
      USERS.forEach(user => {
        db.run(`INSERT INTO users (id, name, email, password, role) VALUES (${user.id}, "${user.name}", "${user.email}", "${user.password}", "${user.role}")`);
      });
    });
  }

export function isTableExists(db: sqlite3.Database, tableName: string) {
  return new Promise<boolean>((resolve, reject) => {
    db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(!!row);
      }
    });
  });
}

export function getUserByEmail(db: sqlite3.Database, email: string) {
  return new Promise<any>((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}
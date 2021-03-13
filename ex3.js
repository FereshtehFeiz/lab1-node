//Lab1 - Ex3
'use strict';
const db = require('./db');

/**
 * Get all tasks  
 */
 const sql = "SELECT * FROM tasks";
 db.all(sql, [], (err, rows) => {
     if (err) 
         reject(err);
     else if (rows.length === 0)
         resolve(undefined);
     else{
         resolve(rows);
     }
 });

/**
 * TaskList containing only the list of tasks whose deadline is after a given date; 
 */
 const sql = "SELECT * FROM tasks";
 db.all(sql, [], (err, rows) => {
     if (err) 
         reject(err);
     else if (rows.length === 0)
         resolve(undefined);
     else{
         resolve(rows);
     }
 });


 /**
 * TaskList containing only the list of tasks with given word; 
 */
  const sql = "SELECT * FROM tasks";
  db.all(sql, [], (err, rows) => {
      if (err) 
          reject(err);
      else if (rows.length === 0)
          resolve(undefined);
      else{
          resolve(rows);
      }
  });
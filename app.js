// // const mysql = require('mysql');
// // const connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'abdurashid',
// //   password: 'password123',
// //   database: 'demo'
// // });
// // // connection.connect((err) => {
// // //   if (err) throw err;
// // //   console.log('Connected!');
// // // });
// // const con = mysql.createConnection(connection)
// // con.connect((err, result) => {
// //     if (err) {
// //         throw new Error(err)
// //         return
// //     }
// // });

// // var mysql = require('mysql2');
// // var connection = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'abdurashid',
// //     password: 'password123',
// //     database: 'demo'
// // });

// // connection.connect(function (err) {
// //     if (err) {
// //         console.error('error connecting: ' + err.stack);
// //         return;
// //     }

// //     console.log('connected as id ' + connection.threadId);
// // });


// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'abdurashid',
//     password: 'password123',
//     database: 'demo',
//     multipleStatements: true
// });

// connection.connect((err) => {
//     if (!err)
//         console.log('Bazaga ulandi');
//     else
//         console.log('Bazaga ulanishda xatolik ro`y berdi...\n Error: ' + JSON.stringify(err, undefined, 2));
// });

// connection.query('SELECT * FROM autoProp', (err, rows) => {
//     if (err) throw err;

//     console.log('Data received from autoProp:');
//     console.log(rows);
// });

// // const author = { id: '', name: '', cost: '', horsePower: '' };
// // connection.query('INSERT INTO autoProp SET ?', author, (err, res) => {
// //   if(err) throw err;
// //   console.log('Last insert ID:', res.insertId);
// // });


// // connection.query(
// //     `UPDATE autoProp SET name = 'X7' Where id = 4`,
// //     (err, result) => {
// //       if (err) throw err;

// //       console.log(`Data yangilandi: `);
// //     }
// //   );

// connection.query(
//     `DELETE FROM autoProp WHERE id = 6`,
//     (err, result) => {
//         if (err) throw err;

//         console.log(`Deleted ${result.affectedRows} row(s)`);
//     }
// );
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.0.171',
  user: 'admin',
  password: '1030Srs!',
  database: 'Peter_Website',
  port : '3306'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  truncateQuery();
  insertQuery();



  connection.query("select * from webimages",               
    function (err, result) {
    if (err) throw err;
    console.log(result);
    connection.destroy();
  });
});



function insertQuery()
{
  var sql = "insert into webimages (filename, parentfolder) values ?";

  var values = 
  [ 
    ['1.jpg', 'column1'],
    ['2.jpg', 'column1'],
    ['3.jpg', 'column1'],
    ['4.jpg', 'column1'],
    ['5.jpg', 'column1'],
    ['6.jpg', 'column1'],
    ['7.jpeg', 'column1'],
    ['8.jpg', 'column3'],
    ['1.jpg', 'column2'],
    ['2.jpg', 'column2'],
    ['3.jpg', 'column2'],
    ['4.jpg', 'column2'],
    ['5.jpg', 'column2'],
    ['6.jpg', 'column2'],
    ['7.jpg', 'column2'],
    ['1.jpg', 'column3'],
    ['2.jpg', 'column3'],
    ['3.png', 'column3'],
    ['4.jpg', 'column3'],
    ['5.jpg', 'column3'],
    ['6.jpg', 'column3'],
    ['7.jpg', 'column3']
  ];

  connection.query(sql, [values],                 
    function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}

function truncateQuery()
{
  connection.query("truncate webimages",               
    function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}
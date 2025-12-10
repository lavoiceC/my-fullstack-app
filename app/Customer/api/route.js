import mysql from "mysql2/promise";
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const cat = await getCats(); // will write this next
  console.log("cats: " + JSON.stringify(cat));
  return Response.json(cat);
}

async function getCats(){
    const connection = await mysql.createConnection({
    host: "mysql1-p2.ezhostingserver.com",
    database: "citdemo",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  const sql = "SELECT * FROM Cats";
  const [rows] = await connection.execute(sql);
  await connection.end();
  return rows;


}
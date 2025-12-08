import mysql from "mysql2/promise";
export const dynamic = 'force-dynamic';

export async function GET(req) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    
    cats = await getCats();
    console.log("cats " + JSON.stringify(cats));
  return Response.json(cats);
}

const conn = mysql.createConnection({
    host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  //user: process.env.DB_USER,
  //password: process.env.DB_PASSWORD
user:"elms", password:"CIT4ever!"
})


async function getCats(){
const sql = 'SELECT * FROM cats'
 const [rows] = await connection.execute(sql);
  await connection.end();
  return rows;
}


          // can move this into app.get and send
 


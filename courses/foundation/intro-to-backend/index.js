import express from "express";
import knex from "knex";

const app = express();

// Knex setup
const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

/**
 * HOME ROUTE (HTML)
 */
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>User Count</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f2f4f8;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #333;
          }
          .count {
            font-size: 48px;
            color: #0066cc;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Total Users</h1>
        <div class="count" id="count">Loading...</div>

        <script>
          fetch('/user-count')
            .then(res => res.json())
            .then(data => {
              document.getElementById('count').innerText = data.count;
            })
            .catch(() => {
              document.getElementById('count').innerText = 'Error';
            });
        </script>
      </body>
    </html>
  `);
});

/**
 * GET ALL USERS
 */
app.get("/users", async (req, res) => {
  const users = await db("users").select("*");
  res.json(users);
});

/**
 * USER COUNT
 */
app.get("/user-count", async (req, res) => {
  const result = await db("users").count("id as count");
  res.json(result[0]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

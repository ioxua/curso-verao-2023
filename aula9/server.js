const express = require("express");
const fs = require("fs");

const app = express();
const porta = 3000;

const template = fs.readFileSync('pages/template.html').toString()

const readFileAndReturnHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    const content = template.replace('{* conteudo *}', data)

    res.header("Content-Type", "text/html").send(content);
  });
}

app.get("/", (_, res) => {
  readFileAndReturnHTML("pages/index.html", res)
});

app.get("/link1", (_, res) => {
  readFileAndReturnHTML("pages/link1.html", res)
});

app.get("/json", (_, res) => {
  res.send({
    this: 'is an',
    object: {
      with: 'properties'
    }
  })
});

app.listen(porta, () => console.log(`Escutando a porta ${porta}!`));

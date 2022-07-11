const SparkPost = require("sparkpost");

 async function emailHandler(req, res) {
  const client = new SparkPost(process.env.NEXT_PUBLIC_API_SPARKPOST);
  
  client.transmissions
    .send({
      content: {
        from: "florian.houdu@viacesi.fr" ,
        subject: "sujet du mail",
        message: "gfgfdgdg",
        name: "namee",
        html: `<html><body><p>message</p><p> -- "nom" </p></body></html>`,
      },
      recipients: [{ address: "florian.houdu@viacesi.fr" }],
    })
    .then(() => {
      res.statusCode = 200;
      res.setHeader("Content-type", "application-json");
      res.end(JSON.stringify({ error: null }));
    })
    .catch(() => {
      res.statusCode = 500;
      res.setHeader("Content-type", "application-json");
      res.end(JSON.stringify({ error: "error sending email" }));
    });
};

export default emailHandler;




// const SparkPost = require("sparkpost");

// async function emailHandler(req, res) {
//   const client = new SparkPost("07f0ee634621b0929ffab2edc16bf8b227691501");
//   const data = JSON.parse(req.body);
//   const { email, subject, message, name } = data;

//   client.transmissions
//     .send({
//       content: {
//         from: email ,
//         subject: subject,
//         message: "gfgfdgdg",
//         name: "namee",
//         html: `<html><body><p>${message}</p><p> -- ${name} </p></body></html>`,
//       },
//       recipients: [{ address: email }],
//     })
//     .then(() => {
//       res.statusCode = 200;
//       res.setHeader("Content-type", "application-json");
//       res.end(JSON.stringify({ error: null }));
//     })
//     .catch(() => {
//       res.statusCode = 500;
//       res.setHeader("Content-type", "application-json");
//       res.end(JSON.stringify({ error: "error sending email" }));
//     });
// };

// export default emailHandler;

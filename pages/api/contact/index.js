import nc from "next-connect";

const handler = nc();

handler.post((req, res) => {
  console.log(req.body);
  return res.redirect("/contact");
});

export default handler;

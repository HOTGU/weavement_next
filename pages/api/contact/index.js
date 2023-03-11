import { onlyUser, withSessionRoute } from "@/lib/ironSession/withSession";
import { createContact } from "@/lib/mongoose/contact";
import Contact from "@/models/Contact";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

const handler = nc();

handler.get(onlyUser, async (req, res) => {
  try {
    await dbConnect();
    console.log("문의 fetch!!");

    const contacts = await Contact.find({});
    return res.status(200).json(contacts);
  } catch (error) {}
});

handler.post(async (req, res) => {
  try {
    await createContact(req.body);
    return res.redirect("/contact");
  } catch (error) {
    console.log(error);
  }
});

export default withSessionRoute(handler);

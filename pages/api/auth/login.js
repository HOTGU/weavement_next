import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";
import bcrypt from "bcrypt";
import { withSessionRoute } from "@/lib/ironSession/withSession";

const handler = nc();

handler.post(async (req, res) => {
  const {
    body: { email, password },
  } = req;
  try {
    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) return res.redriect("/auth");
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) return res.redriect("/auth");
    const {
      email: userEmail,
      password: userPassword,
      ...otherInfo
    } = user._doc;

    const noPwUser = otherInfo;
    req.session.user = noPwUser;
    await req.session.save();
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.redriect("/auth");
  }
});

export default withSessionRoute(handler);

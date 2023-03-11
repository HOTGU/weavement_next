import Contact from "@/models/Contact";
import dbConnect from "@/utils/dbConnect";

export const createContact = async (data) => {
  try {
    await dbConnect();
    const contact = new Contact({ ...data });
    await contact.save();
    return contact;
  } catch (error) {
    return { error };
  }
};

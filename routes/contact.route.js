import express from "express";
import { addContact, getContacts} from "../controllers/contact.controller.js";
import isAuthenticated from "../auth/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/addContact").post( addContact);
router.route("/getContacts").get( getContacts);

export default router;
import { z } from "zod";
const schema = z.object({
  name: z.string().min(2, "at least 4 cracter"),
  email: z.string().email("email is not correct"),
  subject: z.string("requied a title"),
  message: z.string("requied at least short "),
});

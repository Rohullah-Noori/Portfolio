const schema = z.object({
  name: z.string().min(2, "at leat 4 cracter"),
  email: z.string().email("email is not correct"),
  subject: z.string("requied a title"),
});

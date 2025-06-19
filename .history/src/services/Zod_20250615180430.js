const schema = z.object({
  name: z.string().min(2, "at leat 4 cracter"),
});

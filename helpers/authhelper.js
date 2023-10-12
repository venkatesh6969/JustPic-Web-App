import bcrypt from "bcrypt";
export const hashpassword = async (password) => {
  try {
    const rounds = 10;
    const hashpassword = await bcrypt.hash(password, rounds);
    return hashpassword;
  } catch (error) {
    console.log(error);
  }
};
export const comparepassword = async (password, hashpassword) => {
  return bcrypt.compare(password, hashpassword);
};

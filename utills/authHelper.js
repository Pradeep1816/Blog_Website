import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashPassed = await bcrypt.hash(password, saltRounds);
    return hashPassed;
  } catch (error) {
    console.log(error);
  }
};
export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

import jwt from "jsonwebtoken";
import { getConnection } from "../database.js";
import { JWT_SECRET } from "../middleware/verifyToken.js";

export const loginUser = async (req, res) => {
  const db = getConnection();
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const userFound = db.data.users.find((u) => u.email === email);
  if (!userFound) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  // The password should be hash
  if (userFound.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: userFound._id, email: userFound.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
};

export const getUser = (req, res) => {
  const db = getConnection();

  const userFound = db.data.users.find((u) => u._id === req.user.id);

  if (!userFound) {
    return res.status(404).json({ error: "User not found" });
  }

  const { password, _id, guid, ...userData } = userFound; // Omit password
  res.status(200).json(userData);
};

export const updateUser = async (req, res) => {
  const db = getConnection();
  const token = req.headers["authorization"]?.split(" ")[1]; // Get the token from the Authorization header

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Decode the token to get user information
    const decoded = jwt.verify(token, JWT_SECRET);
    const userFound = db.data.users.find((u) => u._id === decoded.id); // Use decoded ID from the token

    if (!userFound) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user information
    const { age, eyeColor, name, company, email, password, phone, address } =
      req.body;

    if (age !== undefined) userFound.age = age;
    if (eyeColor !== undefined) userFound.eyeColor = eyeColor;
    if (name !== undefined) userFound.name = name;
    if (company !== undefined) userFound.company = company;
    if (email !== undefined) userFound.email = email;
    if (password !== undefined) userFound.password = password; // Consider hashing password before saving
    if (phone !== undefined) userFound.phone = phone;
    if (address !== undefined) userFound.address = address;

    // Save the updated user back to the DB
    db.data.users = db.data.users.map((u) =>
      u._id === userFound._id ? userFound : u
    );
    await db.write();

    res.status(200).json(userFound);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

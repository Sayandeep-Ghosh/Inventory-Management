import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

const login = async (req, res) => {
    try {
        const { email, password, rememberMe } = req.body;
        const user = await User.findOne({ email });
        console.log("User found:", user);

        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
        console.log(password , "testing password");
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ success: true, message: "login successfully", token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export { login };
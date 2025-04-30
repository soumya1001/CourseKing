const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
	try {
		const email = req.body.email;
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.json({
				success: false,
				message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
			});
		}
		const token = crypto.randomBytes(20).toString("hex");

		const updatedDetails = await User.findOneAndUpdate(
			{ email: email },
			{
				token: token,
				resetPasswordExpires: Date.now() + 3600000,
			},
			{ new: true }
		);

		const url = `http://localhost:3000/update-password/${token}`;

		await mailSender(
			email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		);

		res.json({
			success: true,
			message:
				"Email Sent Successfully, Please Check Your Email to Continue Further",
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Sending the Reset Message`,
		});
	}
};

exports.resetPassword = async (req, res) => {
	try {
		const { password, confirmPassword, token } = req.body;

		// Validate input
		if (!password || !confirmPassword || !token) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message: "Password and confirm password do not match",
			});
		}

		const user = await User.findOne({ token });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: "Invalid or expired token",
			});
		}

		if (user.resetPasswordExpires < Date.now()) {
			return res.status(410).json({
				success: false,
				message: "Token has expired. Please request a new one.",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		user.password = hashedPassword;
		user.token = undefined;
		user.resetPasswordExpires = undefined;

		await user.save();

		return res.status(200).json({
			success: true,
			message: "Password reset successful",
		});
	} catch (error) {
		console.error("Error resetting password:", error);
		return res.status(500).json({
			success: false,
			message: "Server error while resetting password",
		});
	}
};
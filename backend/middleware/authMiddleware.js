const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistedToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    try {
      const token =
        req.cookies?.token || req.headers.authorization?.split(" ")[1];
  
      console.log("Token Received:", token);
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
      }
  
      const isBlacklisted = await BlacklistedToken.findOne({ token });
      console.log("Is Token Blacklisted:", isBlacklisted);
  
      if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized: Token blacklisted" });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded Token:", decoded);
  
      const user = await userModel.findById(decoded._id);
      console.log("User Found:", user);
  
      if (!user) {
        return res.status(401).json({ message: "Unauthorized: User not found" });
      }
  
      req.user = user;
      next();
    } catch (err) {
      console.error("JWT Verification Error:", err);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };
  
  module.exports.authCaptain = async (req, res, next) => {
    try {
      const token =
        req.cookies?.token || req.headers.authorization?.split(" ")[1];

        console.log("Token Received:", token);
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
      }
  
      // Check if token is blacklisted
      const isBlacklisted = await BlacklistedToken.findOne({ token });
      if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized: Token blacklisted" });
      }
  
      // Verify token and fetch captain
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const captain = await captainModel.findById(decoded._id);
      
      if (!captain) {
        return res.status(401).json({ message: "Unauthorized: Captain not found" });
      }
  
      req.captain = captain;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
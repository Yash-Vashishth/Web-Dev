const controller = require("../controllers/review.controller");
const productRoutes = require("../routes/product.routes")
const { isAuthenticated } = require("../middlewares/auth");
const reviewRoutes = require("../routes/review.routes");
const router = require("express").Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/products/:productId/reviews", reviewRoutes);
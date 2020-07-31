const express = require("express");
const router = express.Router();

// Bring it controller
const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getAllUniqueCategories
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// params routes
router.param("userId", getUserById);
router.param("productId", getProductById);

// actual routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

//  read
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

// delete
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

// update
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

// listing product
router.get("/product", getAllProducts);

router.get("/product/categories", getAllUniqueCategories)

module.exports = router;

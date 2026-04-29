const express = require('express');
const router = express.Router();
const { getSuppliers, getSupplierById } = require('../controllers/supplierController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

// Usually, both buyers and suppliers can see suppliers in the marketplace
// Depending on exact requirements, we restrict to buyers for now as per instructions.
router.use(authenticate, authorizeRoles('buyer'));

router.get('/', getSuppliers);
router.get('/:id', getSupplierById);

module.exports = router;

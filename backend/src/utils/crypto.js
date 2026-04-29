const crypto = require('crypto');

/**
 * Hashes a password using crypto.pbkdf2Sync
 * @param {string} password 
 * @returns {object} { salt, hash }
 */
const hashPassword = (password) => {
  // Generate a random salt
  const salt = crypto.randomBytes(16).toString('hex');
  
  // Hash the password using pbkdf2Sync
  // Parameters: password, salt, iterations, keylen, digest
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  
  return { salt, hash };
};

/**
 * Verifies a password against a stored salt and hash
 * @param {string} password 
 * @param {string} salt 
 * @param {string} hash 
 * @returns {boolean}
 */
const verifyPassword = (password, salt, hash) => {
  const hashToVerify = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  
  // Use timingSafeEqual to prevent timing attacks
  const bufferHashToVerify = Buffer.from(hashToVerify, 'hex');
  const bufferOriginalHash = Buffer.from(hash, 'hex');
  
  if (bufferHashToVerify.length !== bufferOriginalHash.length) {
    return false;
  }
  
  return crypto.timingSafeEqual(bufferHashToVerify, bufferOriginalHash);
};

module.exports = {
  hashPassword,
  verifyPassword
};

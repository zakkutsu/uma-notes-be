// helpers/url.js
const getPublicUrl = (path) => {
  if (!path) return null;
  // Ganti dengan URL domain Anda saat production
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  return `${baseUrl}/${path}`;
};

module.exports = { getPublicUrl };
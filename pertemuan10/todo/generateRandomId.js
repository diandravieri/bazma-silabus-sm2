const generateRandomId = (length) => {
    let result = '';
    const characters = 'asdsad asdasasjdnashj d lkasjd uaosi';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  module.exports = { generateRandomId }
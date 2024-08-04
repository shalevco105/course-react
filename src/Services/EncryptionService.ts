import CryptoJS from 'crypto-js';
const CRYPTO_SECRET_KEY = 'CRYPTO_SECRET_KEY';

export function decrypt(encryptedText: string): object {
  const [ivHex, encrypted] = encryptedText.split(':');
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const key = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Hex)); // Match server key generation

  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

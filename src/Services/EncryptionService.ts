import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Hex.parse(CryptoJS.SHA256('JWT_SECRET_KEY').toString());

export function decrypt(encryptedText: string): string {
  const [ivHex, encrypted] = encryptedText.split(':');
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const encryptedHex = CryptoJS.enc.Hex.parse(encrypted);
  const encryptedBase64 = CryptoJS.enc.Base64.stringify(encryptedHex);

  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
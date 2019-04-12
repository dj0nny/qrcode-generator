const API_URL = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
import axios from 'axios'

export default {
  async generateQRCode(payload) {
    const res = await axios.get(API_URL + payload);
    return res;
  }
} 
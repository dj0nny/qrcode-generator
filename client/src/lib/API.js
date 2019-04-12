const API_URL = 'http://localhost:4040/generate-qr?data=';
import axios from 'axios';

export default {
  async generateQRCode(payload) {
    const res = await axios.get(API_URL + payload)
    return res.data
  }
} 
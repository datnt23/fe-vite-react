import axios from "axios";
import { API_URL } from "../config-global";
// ----------------------------------------------------------------------
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Thời gian chờ tối đa của 1 request: 10 phút
axiosInstance.defaults.timeout = 1000 * 60 * 10;

// Thêm một bộ đón chặn request
axiosInstance.interceptors.request.use(
  (config) => {
    // Làm gì đó trước khi request dược gửi đi
    return config;
  },
  (error) => {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
axiosInstance.interceptors.response.use(
  (response) => {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response;
  },
  (error) => {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    // Xử lý chung 1 lỗi
    if (error.response?.status !== 410) {
      // Thông báo lỗi bất kể mọi mã lỗi lên màn hình => Ngoại trừ mã 410 - GONE: Phục vụ việc tự động gọi API refresh lại token hết hạn
      console.log(error.response?.data?.message || error?.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

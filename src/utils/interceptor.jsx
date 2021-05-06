export default function interceptor(instance) {
  instance.interceptors.request.use((r) => {
    console.log("request: ", r);
    return r;
  });
  instance.interceptors.response.use((r) => {
    console.log("response: ", r);
    return r;
  });
}

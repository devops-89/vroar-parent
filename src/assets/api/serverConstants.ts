// const baseUrl = "https://api.mytreks.ai";
// const baseUrl = "https://dev.api.vroar.ai";
// const baseUrl = "https://devapi.mytreks.ai";
// const baseUrl = "https://api.dev.mytreks.ai/";
const baseUrl = "https://uatapi.mytreks.ai";
const stripeURL = "https://api.stripe.com/v1";
export const serverApiUrl = {
  admin: `${baseUrl}/admin/api`,
  authentication: `${baseUrl}/api`,
  user: `${baseUrl}/user/api`,
  internship: `${baseUrl}/internship/api`,
  stripeCustomer: `${stripeURL}/api`,
  content: `${baseUrl}/content/api`,
};

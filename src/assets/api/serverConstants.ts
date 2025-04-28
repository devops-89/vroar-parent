// const baseUrl = "https://api.vroar.ai";
const baseUrl = "https://dev.api.vroar.ai";
const stripeURL = "https://api.stripe.com/v1";
export const serverApiUrl = {
  admin: `${baseUrl}/admin/api`,
  authentication: `${baseUrl}/api`,
  user: `${baseUrl}/user/api`,
  internship: `${baseUrl}/internship/api`,
  stripeCustomer: `${stripeURL}/api`,
  content: `${baseUrl}/content/api`,
};

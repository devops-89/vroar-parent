const baseUrl = "https://api.mytreks.ai";

const stripeURL = "https://api.stripe.com/v1";
export const serverApiUrl = {
  authentication: `${baseUrl}/api`,
  user: `${baseUrl}/user/api`,
  internship: `${baseUrl}/internship/api`,
  content: `${baseUrl}/content/api`,
  stripeCustomer: `${stripeURL}/api`,
};

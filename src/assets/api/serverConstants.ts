// const baseUrl = "https://api.mytreks.ai";
// const baseUrl = "https://dev.api.vroar.ai";
// const baseUrl = "https://devapi.mytreks.ai";

const baseUrl = "https://uatapi.mytreks.ai";
const stripeURL = "https://api.stripe.com/v1";
// const authenticationUrl = "http://localhost:8085";
// const contentUrl = "http://localhost:8084";
// const userUrl = "http://localhost:8086";
export const serverApiUrl = {
  authentication: `${baseUrl}/api`,
  user: `${baseUrl}/user/api`,
  internship: `${baseUrl}/internship/api`,
  content: `${baseUrl}/content/api`,
  stripeCustomer: `${stripeURL}/api`,
  // content: `${contentUrl}/content/api`,
  // user: `${userUrl}/api`,
  // authentication: `${authenticationUrl}/api`,
};

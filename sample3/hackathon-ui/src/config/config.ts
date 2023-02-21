/* eslint-disable import/no-anonymous-default-export */
const dev = {
    apiUrl: "example.com",
    env: "development",
};
const prod = {
    apiUrl: "example.com",
    env: "production",
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
    ...config,
};

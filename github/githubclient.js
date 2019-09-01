class GitHubClient {
  constructor({ baseUri, token }, ...features) {
    this.baseUri = baseUri;
    this.credentials =
      token !== null && token.length > 0 ? "token" + " " + token : null;
    this.headers = {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3.full+json",
      Authorization: this.credentials
    };
    return Object.assign(this, ...features);
  }
}

module.exports = {
  GitHubClient: GitHubClient
};

export class HttpException extends Error {
  constructor(response, status) {
    super();
    this.response = response;
    this.status = status;
    this.#initMessage();
    this.#initName();
  }

  #initMessage() {
    const match = this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g);
    this.message = match?.join(' ');
  }

  #initName() {
    this.name = this.constructor.name;
  }

  getResponse() {
    return { message: this.message, status: this.status, ...this.response };
  }

  static createBody(meta) {
    return { meta: meta || {} };
  }
}

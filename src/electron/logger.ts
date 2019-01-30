import * as chalk from 'chalk';

class Logger {
  private readonly types = {
    info: '#0c5460',
    warn: '#856404',
    error: '#721c24',
    log: '#004085',
  };

  private get timestamp() {
    const now = new Date();
    return `[${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] - `;
  }

  info(msg) {
    console.info(chalk.default.hex(this.types.info).bold(this.timestamp, msg));
  }

  warn(msg) {
    console.warn(chalk.default.hex(this.types.warn).bold(this.timestamp, msg));
  }

  error(msg) {
    console.error(chalk.default.hex(this.types.error).bold(this.timestamp, msg));
  }

  log(msg) {
    console.log(chalk.default.hex(this.types.log).bold(this.timestamp, msg));
  }
}

export default new Logger();

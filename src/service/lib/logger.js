/**
 * Simple logging utility for ICARUS Terminal Service
 */
class Logger {
  constructor(level = 'INFO') {
    this.levels = {
      ERROR: 0,
      WARN: 1,
      INFO: 2,
      DEBUG: 3
    }
    this.currentLevel = this.levels[level] || this.levels.INFO
    this.colors = {
      ERROR: '\x1b[31m', // Red
      WARN: '\x1b[33m',  // Yellow
      INFO: '\x1b[36m',  // Cyan
      DEBUG: '\x1b[37m'  // White
    }
    this.reset = '\x1b[0m'
  }

  log(level, message, ...args) {
    if (this.levels[level] <= this.currentLevel) {
      const timestamp = new Date().toISOString()
      const color = this.colors[level] || this.colors.INFO
      const prefix = `${color}[${timestamp}] [${level}]${this.reset}`
      console.log(prefix, message, ...args)
    }
  }

  error(message, ...args) {
    this.log('ERROR', message, ...args)
  }

  warn(message, ...args) {
    this.log('WARN', message, ...args)
  }

  info(message, ...args) {
    this.log('INFO', message, ...args)
  }

  debug(message, ...args) {
    this.log('DEBUG', message, ...args)
  }

  setLevel(level) {
    this.currentLevel = this.levels[level] || this.levels.INFO
  }
}

// Export as singleton
module.exports = new Logger(process.env.LOG_LEVEL || 'INFO')
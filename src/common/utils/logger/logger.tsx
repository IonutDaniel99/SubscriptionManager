import { Platform } from 'react-native'

// Function to format the current time
const getCurrentTime = (): string => {
    const now = new Date()
    return now.toLocaleTimeString('en-GB', { hour12: false })
}

// Logger class
class Logger {
    private static log(level: 'INFO' | 'WARN' | 'ERROR', location: string, message: string) {
        const time = getCurrentTime()
        const formattedMessage = `[${level}] ${time} - ${location} - ${message}`

        console.log(formattedMessage)
    }

    static info(location: string, message: string) {
        this.log('INFO', location, message)
    }

    static warn(location: string, message: string) {
        this.log('WARN', location, message)
    }

    static error(location: string, message: string) {
        this.log('ERROR', location, message)
    }
}

// Exporting the Logger class
export default Logger

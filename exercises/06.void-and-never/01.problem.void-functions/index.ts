// Logging System
// Functions that perform side effects return void

// 🐨 Create `logInfo` that takes a message and logs it with "[INFO]" prefix
function logInfo(message: string): void {
  console.log(`[INFO] ${message}`);
}

// 🐨 Create `logError` that takes a message and logs it with "[ERROR]" prefix
function logError(message: string): void {
  console.log(`[ERROR] ${message}`);
}

// 🐨 Create `logWithTimestamp` that takes a message and logs it with timestamp
function logWithTimestamp(message: string): void {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

// ✅ Test your functions
logInfo("Application started");
logError("Connection failed");
logWithTimestamp("User logged in");

// 🐨 Export your functions so we can verify your work
export { logInfo, logError, logWithTimestamp };
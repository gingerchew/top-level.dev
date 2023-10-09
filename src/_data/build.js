module.exports = {
    env: process.env.ELEVENTY_ENV,
    timestamp: new Date(),
    ts: new Intl.DateTimeFormat('en-US', {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date())
}

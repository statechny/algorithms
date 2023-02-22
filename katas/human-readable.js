const format = (number) => {
    return number.toString().padStart(2, "0")
}

function humanReadable (totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(59), '00:00:59', 'humanReadable(59)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(90), '00:01:30', 'humanReadable(90)');
console.log(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
console.log(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
console.log(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
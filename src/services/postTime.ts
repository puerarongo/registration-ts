const getTime = (value: string) => {
    const timeNow = new Date().getTime();
    const postTime = new Date(value).getTime();

    const t = timeNow - postTime,
        years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12)),
        months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12),
        days = Math.floor(t / (1000 * 60 * 60 * 24) % 30),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        seconds = Math.floor((t / 1000) % 60);
    
    return {seconds, minutes, hours, days, months, years}
};

const getPostTime = (value: string) => {
    const { seconds, minutes, hours, days, months, years } = getTime(value);
    if (years > 0) return `Posted ${years} years ago`
    else if (months > 0) return `Posted ${months} months ago`
    else if (days > 0) return `Posted ${days} days ago`
    else if (hours > 0) return `Posted ${hours} hours ago`
    else if (minutes > 0) return `Posted ${minutes} minutes ago`
    else return `Posted ${seconds} seconds ago`
};

export default getPostTime;


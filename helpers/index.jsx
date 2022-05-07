export const dateFormat = date => {
    
    const formatdate = new Date(date).toLocaleDateString({
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    })

    return formatdate
}
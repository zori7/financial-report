export const formatShort = (v) => {
    if (typeof v !== 'number') {
        return null
    }

    return v.toFixed(0)
}

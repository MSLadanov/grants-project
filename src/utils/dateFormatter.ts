const dateFormatter = (date : string) : string => {
    return date.split('-').reverse().join('.')
}

export default dateFormatter
const processClass = (item) => {
    if (typeof item === 'string') {
        return item.trim();
    }
    if (typeof item === 'object') {
        for (const key in item) {
            if (!!item[key]) {
                return key.trim();
            }
        }
    }
    return String(item);
}

const classnames = (...args) => {
    const result = [];

    args.forEach(item => result.push(processClass(item)));

    return result;
};

export default classnames;
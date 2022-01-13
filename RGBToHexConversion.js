const checkLong = num => Math.min(255, Math.max(num, 0))

const rgb = (...args) => args.slice(0, 3)
        .map(x => checkLong(x)
        .toString(16)
        .toUpperCase()
        .padStart(2, '0'))
        .join('')

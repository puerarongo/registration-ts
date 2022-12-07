const lineDelimiter = (string: string) => {
    const delimiter = string.split('\n')
        .filter(elem =>
            elem !== 'Compensation & Benefits:' && elem !== '  ' && elem !== '' && elem !== '  Responsopilities:');
    return delimiter;
};

export default lineDelimiter;
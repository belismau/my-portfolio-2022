function Stack(props) {
    const { children, vertical, gap, justifyContent } = props;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: vertical ? 'column' : 'row',
                alignItems: 'center',
                gap: gap ? gap : 8,
                justifyContent: justifyContent ? justifyContent : null
            }}
        >
            { children }
        </div>
    )
}

export default Stack;
function Stack(props) {
    const { children, vertical, gap } = props;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: vertical ? 'column' : 'row',
                alignItems: 'center',
                gap: gap ? gap : 8
            }}
        >
            { children }
        </div>
    )
}

export default Stack;
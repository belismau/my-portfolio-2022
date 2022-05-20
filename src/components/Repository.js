import './Repository.css'
import Stack from './Stack';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Repository(props) {
    const { title, content, inProgress, badges, period, link } = props;

    const InProgressBadge = () => {
        return (
            <div className='InProgressBadge'>
                { inProgress ? 'In progress' : 'Completed' }
            </div>
        )
    }

    const Badge = (props) => {
        var color = props.data.color ? props.data.color : '#0f69da';
        var backgroundColor = props.data.backgroundColor ? props.data.backgroundColor : '#ddf3fd';

        return (
            <div
                className='Badge'
                style={{
                    color: color,
                    backgroundColor: backgroundColor
                }}
            >
                { props.data.label }
            </div>
        )
    }

    return (
        <div className="Repository">
            <div>
                <Stack gap={15}>
                    <div
                        className='Repository-title-container'
                        onClick={() => window.open(link)}
                    >
                        <p className="Repository-title"> {title} </p>
                        <FaExternalLinkAlt color='#0f69da' fontSize={18} />
                    </div>
                    <InProgressBadge />
                </Stack>
                
                <p className="Repository-content"> {content} </p>

                {badges?.length ?
                    <Stack>
                        {badges.map(badge => <Badge data={badge} />)}
                    </Stack>
                : null }
                
                <p className='Repository-period'> { period } </p>
            </div>
        </div>
    )
}

export default Repository;
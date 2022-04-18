
import arrow from '../../../assets/Home/bussinesscomm/arrow.svg';
import phone from '../../../assets/Home/bussinesscomm/phone.svg';
import video from '../../../assets/Home/bussinesscomm/video.svg';
import message from '../../../assets/Home/bussinesscomm/message.svg';
import headphones from '../../../assets/Home/bussinesscomm/headphones.svg';
import managecalls from '../../../assets/Home/bussinesscomm/managecalls.svg';
import international from '../../../assets/Home/bussinesscomm/international.svg';
import talk from '../../../assets/Home/bussinesscomm/talk.svg';
import { FormattedMessage } from 'react-intl';
import connection1 from '../../../assets/Home/Connections/connection1.svg';
import connection2 from '../../../assets/Home/Connections/connection2.svg';
import connection3 from '../../../assets/Home/Connections/connection3.svg';
import connection4 from '../../../assets/Home/Connections/connection4.svg';
import connection5 from '../../../assets/Home/Connections/connection5.svg';
import connection6 from '../../../assets/Home/Connections/connection6.svg';
import connection7 from '../../../assets/Home/Connections/connection7.svg';
import connection8 from '../../../assets/Home/Connections/connection8.svg';
import connection9 from '../../../assets/Home/Connections/connection9.svg';
import connection10 from '../../../assets/Home/Connections/connection10.svg';



export const SliderCards = [
    {
        cls: 'cls1',
        icon: phone,
        text: 'Business Phone System',
        link: 'Learn More',
        arrow: arrow
    },
    {
        cls: 'cls2',
        iconcls: 'cls2',
        icon: video,
        text: 'Video Meetings',
        link: 'Learn More',
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls3',
        icon: message,
        text: 'Team Messaging',
        link: 'Learn More',
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls4',
        icon: headphones,
        text: 'Contact Center',
        link: 'Learn More',
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls5',
        icon: talk,
        text: 'Talk',
        link: 'Learn More',
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls6',
        icon: international,
        text: 'International Calls',
        link: 'Learn More',
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls4',
        icon: managecalls,
        text: 'ManageCalls',
        link: 'Learn More',
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls1',
        icon: phone,
        text: 'Business Phone System',
        link: 'Learn More',
        arrow: arrow
    }
]
export default SliderCards;

export const ConnectionsData = {
    "first": [
        {
            cls: 'cls1',
            text: <FormattedMessage id='first' defaultMessage="Text & Email Marketing, Lead Alerts, Call Tracking" />,
            icon1: connection1,
            icon2: connection2,
            icon3: connection3
        }
    ],
    "second": [
        {
            cls: 'cls2',
            text: <FormattedMessage id='first' defaultMessage="Account Security, IVR, Intelligent Chatbots, 
        Contact Center" />,
            icon1: connection4,
            icon2: connection5,
            icon3: connection6,
            icon4: connection7
        }
    ],
    "third": [
        {
            cls: 'cls3',
            text: <FormattedMessage id='first' defaultMessage="Text & Email Marketing, Lead Alerts, Call Tracking" />,
            icon1: connection8,
            icon2: connection9,
            icon3: connection10
        }
    ]
}
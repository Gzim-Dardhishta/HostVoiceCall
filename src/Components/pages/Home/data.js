
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

import arrow2 from '../../../assets/Home/phonesystem/arrow.svg';

import logo1 from '../../../assets/Home/phonesystem/company-logo.png';

import meeting1 from '../../../assets/Home/meetings/microphone.svg';
import meeting2 from '../../../assets/Home/meetings/message.svg';
import meeting3 from '../../../assets/Home/meetings/meet.svg';

import arrow3 from '../../../assets/Home/cloudbased/arrow.svg'
import tool from '../../../assets/Home/cloudbased/tool.svg'



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
    }
]
export default SliderCards;

export const ConnectionsData = [
    {
        text: <FormattedMessage id='first' defaultMessage="Text & Email Marketing, Lead Alerts, Call Tracking" />,
        icons: [
            {
                icon: connection1
            },
            {
                icon: connection2
            },
            {
                icon: connection3
            }
        ]
    },
    {
        text: <FormattedMessage id='first' defaultMessage="Account Security, IVR, Intelligent Chatbots, 
        Contact Center" />,
        icons: [
            {
                icon: connection4
            },
            {
                icon: connection5
            },
            {
                icon: connection6
            },
            {
                icon: connection7
            }
        ]
    },
    {
        text: <FormattedMessage id='first' defaultMessage="Text & Email Marketing, Lead Alerts, Call Tracking" />,
        icons: [
            {
                icon: connection8
            },
            {
                icon: connection9
            },
            {
                icon: connection10
            }
        ]
    }
]

export const PhoneSystemData = [
    {
        title: <FormattedMessage id="title" defaultMessage="Get your cloud-based phone system up and running" />,
        paragraph: <FormattedMessage id='pharagraph' defaultMessage="Easily integrate with the cloud business tools each department relies 
                on to get the job done and pave the way for more satisfying 
                customer journeys."
        />,
        link: <FormattedMessage id="link" defaultMessage="Keep the whole company connected" />,
        arrow: arrow2
    }
]

export const PhoneSystemCarousel = [
    {
        cls: 'cls1',
        icon: logo1,
        text: <FormattedMessage id='text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    },
    {
        cls: 'cls2',
        icon: logo1,
        text: <FormattedMessage id='text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    },
    {
        cls: 'cls3',
        icon: logo1,
        text: <FormattedMessage id='text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    },
    {
        cls: 'cls4',
        icon: logo1,
        text: <FormattedMessage id='text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    }
]

export const MeetingsData = [
    {
        cls: 'cls1',
        icon: meeting1,
        title: <FormattedMessage id='title' defaultMessage="Talk"/>,
        text: <FormattedMessage id='talk' defaultMessage="Say hello to the world’s easiest business phone 
        system. Set up your new number in minutes." />,
    },
    {
        cls: 'cls2',
        icon: meeting2,
        title: <FormattedMessage id='title' defaultMessage="Message"/>,
        text: <FormattedMessage id='message' defaultMessage="Get more done with team messaging and file sharing that’s built right in." />,
    },
    {
        cls: 'cls3',
        icon: meeting3,
        title: <FormattedMessage id='title' defaultMessage="Meet"/>,
        text: <FormattedMessage id='meet' defaultMessage="Bring the entire team together with easy, one-click video meetings." />,
    },
]

export const CloudBasedData = [
    {
        cls: 'cls1',
        number: 1,
        tool: tool,
        title: <FormattedMessage id='setup' defaultMessage="Set up in seconds" />,
        text: <FormattedMessage id='text' defaultMessage="No hardware. No headaches. Just a beautiful cloud call center solution you can use to start a conversation anywhere in the world — today." />,
        link: <FormattedMessage id='link' defaultMessage="Explore all features" />,
        arrow: arrow3
    },
    {
        cls: 'cls2',
        number: 2,
        title: <FormattedMessage id='connect' defaultMessage="Connect to your tools" />,
        text: <FormattedMessage id='text' defaultMessage="Calls go better when all the right info is tied together in the cloud. Integrate HostVoiceCalls with CRM systems, Helpdesk solutions, and other essential apps." />,
        link: <FormattedMessage id='link' defaultMessage="See our integrations " />,
        arrow: arrow3
    },
    {
        cls: 'cls3',
        number: 3,
        title: <FormattedMessage id='visibility' defaultMessage="Gain visibility" />,
        text: <FormattedMessage id='text' defaultMessage="Get rid of the guesswork. Monitor individual and team metrics in real-time to start making measurable improvements." />,
        link: <FormattedMessage id='link' defaultMessage="Monitor key metrics" />,
        arrow: arrow3
    },
    {
        cls: 'cls4',
        number: 4,
        title: <FormattedMessage id='setup' defaultMessage="Enable productivity" />,
        text: <FormattedMessage id='text' defaultMessage="Don’t put progress on hold. Create new numbers, teams, and workflows on the fly whenever new business requirements arise." />,
        link: <FormattedMessage id='link' defaultMessage="See true stories " />,
        arrow: arrow3
    },
]
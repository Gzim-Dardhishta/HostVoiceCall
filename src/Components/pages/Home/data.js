
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

import icon1 from '../../../assets/Home/communication/icon1.svg'
import icon2 from '../../../assets/Home/communication/icon2.svg'
import icon3 from '../../../assets/Home/communication/icon3.svg'
import icon4 from '../../../assets/Home/communication/icon4.svg'


import photo1 from '../../../assets/Home/brands/photo1.png';
import photo2 from '../../../assets/Home/brands/photo2.png';
import photo3 from '../../../assets/Home/brands/photo3.png';
import brand1 from '../../../assets/Home/brands/logo1.png';
import brand2 from '../../../assets/Home/brands/logo2.png';
import brand3 from '../../../assets/Home/brands/logo3.png';
import arrow5 from '../../../assets/Home/brands/arrow1.svg';


import tool1 from '../../../assets/Home/tools/tool1.png'
import tool2 from '../../../assets/Home/tools/tool2.png'
import tool3 from '../../../assets/Home/tools/tool3.png'
import tool4 from '../../../assets/Home/tools/tool4.png'
import tool5 from '../../../assets/Home/tools/tool5.png'
import tool6 from '../../../assets/Home/tools/tool6.png'
import tool7 from '../../../assets/Home/tools/tool7.png'
import tool8 from '../../../assets/Home/tools/tool8.png'
import tool9 from '../../../assets/Home/tools/tool9.png'
import tool10 from '../../../assets/Home/tools/tool10.png'
import tool11 from '../../../assets/Home/tools/tool11.png'
import tool12 from '../../../assets/Home/tools/tool12.png'
import tool13 from '../../../assets/Home/tools/tool13.png'
import tool14 from '../../../assets/Home/tools/tool14.png'
import tool15 from '../../../assets/Home/tools/tool15.png'
import tool16 from '../../../assets/Home/tools/tool16.png'
import arrow6 from '../../../assets/Home/tools/arrow.svg'

import person1 from '../../../assets/Home/reviews/photo1.png';
import person2 from '../../../assets/Home/reviews/photo2.png';



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


export const CommunicationData = [
    {
        cls: 'cls1',
        icon: icon1,
        title: <FormattedMessage id='title' defaultMessage="Phone" />,
        text: <FormattedMessage id='text' defaultMessage="Never miss a call with a 100% uptime SLA."/>
    },
    {
        cls: 'cls2',
        icon: icon2,
        title: <FormattedMessage id='title' defaultMessage="Integrated" />,
        text: <FormattedMessage id='text' defaultMessage="Works with Google Workspace, Salesforce, Zendesk, and more."/>
    },
    {
        cls: 'cls3',
        icon: icon3,
        title: <FormattedMessage id='title' defaultMessage="Smart" />,
        text: <FormattedMessage id='text' defaultMessage="Get complete visibility into usage and adoption analytics."/>
    },
    {
        cls: 'cls4',
        icon: icon4,
        title: <FormattedMessage id='title' defaultMessage="Global" />,
        text: <FormattedMessage id='text' defaultMessage="Set up new teams, numbers, and more in minutes."/>
    }
]


export const BrandsData = [
    {
        cls: 'cls1',
        photo: photo1,
        brand: brand1,
        message: <FormattedMessage id='message' defaultMessage="“HostVoiceCall makes our remote workforce feel like they're sitting at HQ and enables a lean IT approach that’s easy to service.”" />,
        author: <FormattedMessage id='author' defaultMessage="FRANCIL RICHARDS" />,
        position: <FormattedMessage id='position' defaultMessage="SENIOR IT MANAGER" />,
        link: <FormattedMessage id='link' defaultMessage="Get the story" />,
        arrow: arrow5
    },
    {
        cls: 'cls2',
        photo: photo2,
        brand: brand2,
        message: <FormattedMessage id='message' defaultMessage="“HostVoiceCall makes our remote workforce feel like they're sitting at HQ and enables a lean IT approach that’s easy to service.”" />,
        author: <FormattedMessage id='author' defaultMessage="FRANCIL RICHARDS" />,
        position: <FormattedMessage id='position' defaultMessage="SENIOR IT MANAGER" />,
        link: <FormattedMessage id='link' defaultMessage="Get the story" />,
        arrow: arrow5
    },
    {
        cls: 'cls3',
        photo: photo3,
        brand: brand3,
        message: <FormattedMessage id='message' defaultMessage="“HostVoiceCall makes our remote workforce feel like they're sitting at HQ and enables a lean IT approach that’s easy to service.”" />,
        author: <FormattedMessage id='author' defaultMessage="FRANCIL RICHARDS" />,
        position: <FormattedMessage id='position' defaultMessage="SENIOR IT MANAGER" />,
        link: <FormattedMessage id='link' defaultMessage="Get the story" />,
        arrow: arrow5
    },
]


export const ToolsData = [
    {
        cls: 'cls1',
        logo: tool1,
        company: <FormattedMessage id='company' defaultMessage="Monday.com" />
    },
    {
        cls: 'cls2',
        logo: tool2,
        company: <FormattedMessage id='company' defaultMessage="HubSpot" />
    },
    {
        cls: 'cls3',
        logo: tool3,
        company: <FormattedMessage id='company' defaultMessage="Saleforce" />
    },
    {
        cls: 'cls4',
        logo: tool4,
        company: <FormattedMessage id='company' defaultMessage="Zendesk" />
    },
    {
        cls: 'cls5',
        logo: tool5,
        company: <FormattedMessage id='company' defaultMessage="JobAdder" />
    },
    {
        cls: 'cls6',
        logo: tool6,
        company: <FormattedMessage id='company' defaultMessage="Kustomer" />
    },
    {
        cls: 'cls7',
        logo: tool7,
        company: <FormattedMessage id='company' defaultMessage="Shopify" />
    },
    {
        cls: 'cls8',
        logo: tool8,
        company: <FormattedMessage id='company' defaultMessage="ZOHO CRM" />
    },
    {
        cls: 'cls9',
        logo: tool9,
        company: <FormattedMessage id='company' defaultMessage="Intercom" />
    },
    {
        cls: 'cls10',
        logo: tool10,
        company: <FormattedMessage id='company' defaultMessage="Pidedrive" />
    },
    {
        cls: 'cls11',
        logo: tool11,
        company: <FormattedMessage id='company' defaultMessage="Slack" />
    },
    {
        cls: 'cls12',
        logo: tool12,
        company: <FormattedMessage id='company' defaultMessage="Gorgias" />
    },
    {
        cls: 'cls13',
        logo: tool13,
        company: <FormattedMessage id='company' defaultMessage="Microdost Dynamics" />
    },
    {
        cls: 'cls14',
        logo: tool14,
        company: <FormattedMessage id='company' defaultMessage="Re:amaze" />
    },
    {
        cls: 'cls15',
        logo: tool15,
        company: <FormattedMessage id='company' defaultMessage="Zapier" />
    },
    {
        cls: 'cls16',
        logo: tool16,
        company: <FormattedMessage id='company' defaultMessage="Front" />
    },
]

export const ReviewsSliderData = [
    {
        cls: 'cls1',
        photo: person1,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
    {
        cls: 'cls2',
        photo: person2,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
    {
        cls: 'cls3',
        photo: person1,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
    {
        cls: 'cls4',
        photo: person2,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
]

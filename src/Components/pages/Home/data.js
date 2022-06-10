
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

import headphoness from '../../../assets/Home/values/headphones.svg';
import sell from '../../../assets/Home/values/shop.svg';
import Ai from '../../../assets/Home/values/light.svg'



export const SliderCards = [
    {
        cls: 'cls1',
        icon: phone,
        text: <FormattedMessage id='card-text1' defaultMessage="Business Phone System" />,
        link: <FormattedMessage id='learn-more' defaultMessage="Learn more" />,
        arrow: arrow
    },
    {
        cls: 'cls2',
        iconcls: 'cls2',
        icon: video,
        text: <FormattedMessage id='card-text2' defaultMessage="Video Meeting" />,
        link: <FormattedMessage id='learn-more' defaultMessage="Learn more" />,
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls3',
        icon: message,
        text: <FormattedMessage id='card-text3' defaultMessage="Team Messaging" />,
        link: <FormattedMessage id='learn-more' defaultMessage="Learn more" />,
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls4',
        icon: headphones,
        text: <FormattedMessage id='card-text4' defaultMessage="Contact Center" />,
        link: <FormattedMessage id='learn-more' defaultMessage="Learn more" />,
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls5',
        icon: talk,
        text: <FormattedMessage id='card-text5' defaultMessage="Talk" />,
        link: <FormattedMessage id='learn-more' defaultMessage="Learn more" />,
        linkcls: 'linkcls',
        arrow: arrow
    },
    {
        cls: 'cls6',
        icon: international,
        text: <FormattedMessage id='card-text6' defaultMessage="International Calls" />,
        link: <FormattedMessage id='learn-more' defaultMessage="Learn more" />,
        linkcls: 'linkcls',
        arrow: arrow
    }
]
export default SliderCards;

export const ConnectionsData = [
    {
        text: <FormattedMessage id='connection-text1' defaultMessage="Text & Email Marketing, Lead Alerts, Call Tracking" />,
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
        text: <FormattedMessage id='connection-text2' defaultMessage="Account Security, IVR, Intelligent Chatbots, 
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
        text: <FormattedMessage id='connection-text3' defaultMessage="Dispatch Notifications, Account Notifications, 
        Appointment Reminders" />,
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
        text: <FormattedMessage id='phone-slider-text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='phone-slider-author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    },
    {
        cls: 'cls2',
        icon: logo1,
        text: <FormattedMessage id='phone-slider-text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='phone-slider-author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    },
    {
        cls: 'cls3',
        icon: logo1,
        text: <FormattedMessage id='phone-slider-text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='phone-slider-author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    },
    {
        cls: 'cls4',
        icon: logo1,
        text: <FormattedMessage id='phone-slider-text' defaultMessage="We examined a bunch of providers and Aircall was the only one that 
        allowed us the flexibility to customize our customer service needs based on 
        our business practices." />,
        author: <FormattedMessage id='phone-slider-author' defaultMessage="Anton Zillberberg, CEO and Founder at UNTUCKit" />
    }
]

export const MeetingsData = [
    {
        cls: 'cls1',
        icon: meeting1,
        title: <FormattedMessage id='meeting-card-title1' defaultMessage="Talk"/>,
        text: <FormattedMessage id='meeting-card-text1' defaultMessage="Say hello to the world’s easiest business phone 
        system. Set up your new number in minutes." />,
    },
    {
        cls: 'cls2',
        icon: meeting2,
        title: <FormattedMessage id='meeting-card-title2' defaultMessage="Message"/>,
        text: <FormattedMessage id='meeting-card-text2' defaultMessage="Get more done with team messaging and file sharing that’s built right in." />,
    },
    {
        cls: 'cls3',
        icon: meeting3,
        title: <FormattedMessage id='meeting-card-title3' defaultMessage="Meet"/>,
        text: <FormattedMessage id='meeting-card-text3' defaultMessage="Bring the entire team together with easy, one-click video meetings." />,
    },
]

export const CloudBasedData = [
    {
        cls: 'cls1',
        number: 1,
        tool: tool,
        title: <FormattedMessage id='card-setup' defaultMessage="Set up in seconds" />,
        text: <FormattedMessage id='setup-text1' defaultMessage="No hardware. No headaches. Just a beautiful cloud call center solution you can use to start a conversation anywhere in the world — today." />,
        link: <FormattedMessage id='setup-link1' defaultMessage="Explore all features" />,
        arrow: arrow3
    },
    {
        cls: 'cls2',
        number: 2,
        title: <FormattedMessage id='card-connect' defaultMessage="Connect to your tools" />,
        text: <FormattedMessage id='connect-text2' defaultMessage="Calls go better when all the right info is tied together in the cloud. Integrate HostVoiceCalls with CRM systems, Helpdesk solutions, and other essential apps." />,
        link: <FormattedMessage id='connect-link2' defaultMessage="See our integrations " />,
        arrow: arrow3
    },
    {
        cls: 'cls3',
        number: 3,
        title: <FormattedMessage id='card-visibility' defaultMessage="Gain visibility" />,
        text: <FormattedMessage id='visibility-text3' defaultMessage="Get rid of the guesswork. Monitor individual and team metrics in real-time to start making measurable improvements." />,
        link: <FormattedMessage id='visibility-link3' defaultMessage="Monitor key metrics" />,
        arrow: arrow3
    },
    {
        cls: 'cls4',
        number: 4,
        title: <FormattedMessage id='card-poductivity' defaultMessage="Enable productivity" />,
        text: <FormattedMessage id='productivity-text4' defaultMessage="Don’t put progress on hold. Create new numbers, teams, and workflows on the fly whenever new business requirements arise." />,
        link: <FormattedMessage id='visibility-link4' defaultMessage="See true stories " />,
        arrow: arrow3
    },
]


export const CommunicationData = [
    {
        cls: 'cls1',
        icon: icon1,
        title: <FormattedMessage id='card1-title' defaultMessage="Phone" />,
        text: <FormattedMessage id='card1-text' defaultMessage="Never miss a call with a 100% uptime SLA."/>
    },
    {
        cls: 'cls2',
        icon: icon2,
        title: <FormattedMessage id='card2-title' defaultMessage="Integrated" />,
        text: <FormattedMessage id='card2-text' defaultMessage="Works with Google Workspace, Salesforce, Zendesk, and more."/>
    },
    {
        cls: 'cls3',
        icon: icon3,
        title: <FormattedMessage id='card3-title' defaultMessage="Smart" />,
        text: <FormattedMessage id='card3-text' defaultMessage="Get complete visibility into usage and adoption analytics."/>
    },
    {
        cls: 'cls4',
        icon: icon4,
        title: <FormattedMessage id='card4-title' defaultMessage="Global" />,
        text: <FormattedMessage id='card4-text' defaultMessage="Set up new teams, numbers, and more in minutes."/>
    }
]


export const BrandsData = [
    {
        cls: 'cls1',
        photo: photo1,
        brand: brand1,
        message: <FormattedMessage id='brand-message' defaultMessage="“HostVoiceCall makes our remote workforce feel like they're sitting at HQ and enables a lean IT approach that’s easy to service.”" />,
        author: <FormattedMessage id='brand-author' defaultMessage="FRANCIL RICHARDS" />,
        position: <FormattedMessage id='brand-position' defaultMessage="SENIOR IT MANAGER" />,
        link: <FormattedMessage id='brand-link' defaultMessage="Get the story" />,
        arrow: arrow5
    },
    {
        cls: 'cls2',
        photo: photo2,
        brand: brand2,
        message: <FormattedMessage id='brand-message' defaultMessage="“HostVoiceCall makes our remote workforce feel like they're sitting at HQ and enables a lean IT approach that’s easy to service.”" />,
        author: <FormattedMessage id='brand-author' defaultMessage="FRANCIL RICHARDS" />,
        position: <FormattedMessage id='brand-position' defaultMessage="SENIOR IT MANAGER" />,
        link: <FormattedMessage id='brand-link' defaultMessage="Get the story" />,
        arrow: arrow5
    },
    {
        cls: 'cls3',
        photo: photo3,
        brand: brand3,
        message: <FormattedMessage id='brand-message' defaultMessage="“HostVoiceCall makes our remote workforce feel like they're sitting at HQ and enables a lean IT approach that’s easy to service.”" />,
        author: <FormattedMessage id='brand-author' defaultMessage="FRANCIL RICHARDS" />,
        position: <FormattedMessage id='brand-position' defaultMessage="SENIOR IT MANAGER" />,
        link: <FormattedMessage id='brand-link' defaultMessage="Get the story" />,
        arrow: arrow5
    },
]


export const ToolsData = [
    {
        cls: 'cls1',
        logo: tool1,
        company: <FormattedMessage id='tool-company' defaultMessage="Monday.com" />
    },
    {
        cls: 'cls2',
        logo: tool2,
        company: <FormattedMessage id='tool-company' defaultMessage="HubSpot" />
    },
    {
        cls: 'cls3',
        logo: tool3,
        company: <FormattedMessage id='tool-company' defaultMessage="Saleforce" />
    },
    {
        cls: 'cls4',
        logo: tool4,
        company: <FormattedMessage id='tool-company' defaultMessage="Zendesk" />
    },
    {
        cls: 'cls5',
        logo: tool5,
        company: <FormattedMessage id='tool-company' defaultMessage="JobAdder" />
    },
    {
        cls: 'cls6',
        logo: tool6,
        company: <FormattedMessage id='tool-company' defaultMessage="Kustomer" />
    },
    {
        cls: 'cls7',
        logo: tool7,
        company: <FormattedMessage id='tool-company' defaultMessage="Shopify" />
    },
    {
        cls: 'cls8',
        logo: tool8,
        company: <FormattedMessage id='tool-company' defaultMessage="ZOHO CRM" />
    },
    {
        cls: 'cls9',
        logo: tool9,
        company: <FormattedMessage id='tool-company' defaultMessage="Intercom" />
    },
    {
        cls: 'cls10',
        logo: tool10,
        company: <FormattedMessage id='tool-company' defaultMessage="Pidedrive" />
    },
    {
        cls: 'cls11',
        logo: tool11,
        company: <FormattedMessage id='tool-company' defaultMessage="Slack" />
    },
    {
        cls: 'cls12',
        logo: tool12,
        company: <FormattedMessage id='tool-company' defaultMessage="Gorgias" />
    },
    {
        cls: 'cls13',
        logo: tool13,
        company: <FormattedMessage id='tool-company' defaultMessage="Microdost Dynamics" />
    },
    {
        cls: 'cls14',
        logo: tool14,
        company: <FormattedMessage id='tool-company' defaultMessage="Re:amaze" />
    },
    {
        cls: 'cls15',
        logo: tool15,
        company: <FormattedMessage id='tool-company' defaultMessage="Zapier" />
    },
    {
        cls: 'cls16',
        logo: tool16,
        company: <FormattedMessage id='tool-company' defaultMessage="Front" />
    },
]

export const ReviewsSliderData = [
    {
        cls: 'cls1',
        photo: person1,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='review-text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
    {
        cls: 'cls2',
        photo: person2,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='review-text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
    {
        cls: 'cls3',
        photo: person1,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='review-text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
    {
        cls: 'cls4',
        photo: person2,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='review-text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    },
    {
        cls: 'cls5',
        photo: person1,
        name: 'Kristina W.Smith',
        text: <FormattedMessage id='review-text' defaultMessage="The setup and configuration of HostVoiceCall is a dream. It’s so easy to create new numbers, set up IVRs, and change people around to different teams if needed." />
    }
]


export const ValuesData = [
    {
        cls: 'cls1',
        icon: headphoness,
        text: <FormattedMessage id='text1' defaultMessage="Contact Center" />
    },
    {
        cls: 'cls2',
        icon: sell,
        text: <FormattedMessage id='text2' defaultMessage="Sell" />
    },
    {
        cls: 'cls3',
        icon: Ai,
        text: <FormattedMessage id='text3' defaultMessage="AI-Powered" />
    },
]

import aboutMePhoto from '../images/aboutMe.jpg';
import linkedIn from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import github2 from "../images/skills/github2.svg";
import react from "../images/skills/react2.svg";
import redux from "../images/skills/redux2.svg";
import js from "../images/skills/js6.svg";
import html5 from "../images/skills/html52.svg";
import json from "../images/skills/json2.svg";
import sass from '../images/skills/sass2.svg';
import typescript from '../images/skills/typescript.svg';

let stateReducer = {
        ru: {
            header: [
                {id: 1, link: 'ГЛАВНАЯ', anchor: '#aboutMe'},
                {id: 2, link: 'СКИЛЛЫ', anchor: '#skills'},
                {id: 3, link: 'ПРОЕКТЫ', anchor: '#projects'},
                {id: 4, link: 'КОНТАКТЫ', anchor: '#contacts'}
            ],
            main: {
                name: 'Олег',
                lastName: 'Юшкевич',
                specialize: {
                    firstElement: 'Я',
                    secondElement: ['Верстальщик', 'Java Script разработчик', 'Front-End разработчик']
                }
            },
            aboutMe: {
                title: 'ОБО МНЕ',
                underTitle: 'Основная информация обо мне',
                photo: aboutMePhoto,
                descriptionTitle: {
                    firstElement: 'Я Олег Юшкевич и я ',
                    secondElement: ['Верстальщик', 'Java Script разработчик', 'Front-End разработчик']
                },
                descriptionText: {
                    firstPart: 'Привет! Меня зовут ',
                    secondPart: 'Олег Юшкевич.',
                    thirdPart: ' Я Front-End разработчик и я очень увлечен и предан своей работе. ' +
                        'Имея небольшой опыт работы в качестве верстальщика, Java Script и Front-End разработчика, ' +
                        'я приобрел навыки и знания, необходимые для успеха вашего проекта. Мне нравится ' +
                        'каждый шаг процесса проектирования, от обсуждения и совместной работы до ' +
                        'концепции и исполнения, но больше всего мне нравится видеть готовый продукт в действии.'
                },
                information: {
                    informationTitle1:
                        [
                            {
                                id: 1,
                                title: 'День рождения:'
                            },
                            {
                                id: 2,
                                title: 'Город:'
                            },
                            {
                                id: 3,
                                title: 'Образование:'
                            }
                        ],
                    informationTitle2: [
                        {
                            id: 1,
                            title: 'Возраст:'
                        },
                        {
                            id: 2,
                            title: 'Интересы:'
                        },
                        {
                            id: 3,
                            title: 'ВУЗ:'
                        }
                    ],
                    informationText1:
                        [
                            {
                                id: 1,
                                text: '18.05.1996'
                            },
                            {
                                id: 2,
                                text: 'Минск, Беларусь'
                            },
                            {
                                id: 3,
                                text: 'Высшее'
                            }
                        ],
                    informationText2: [
                        {
                            id: 1,
                            text: '25 лет'
                        },
                        {
                            id: 2,
                            text: 'Кино, кулинария, девушки)'
                        },
                        {
                            id: 3,
                            text: 'Академия управления при печально известном товарище Республики Беларуась'
                        }
                    ]
                },
                buttons: {
                    second:
                        'Отправить сообщение'
                }
            },
            skills: {
                title: 'СКИЛЛЫ',
                skill: [
                    {id: 1, title: 'React', alt: 'react', image: react},
                    {id: 2, title: 'Redux', alt: 'redux', image: redux},
                    {id: 3, title: 'Java Script', alt: 'js', image: js},
                    {id: 4, title: 'HTML 5', alt: 'html5', image: html5},
                    {id: 5, title: 'SASS', alt: 'sass', image: sass},
                    {id: 6, title: 'JSON', alt: 'json', image: json},
                    {id: 7, title: 'GitHub', alt: 'github', image: github2},
                    {id: 8, title: 'TypeScript', alt: 'typescript', image: typescript}
                ]
            },
            projects: {
                title: 'Проекты',
                underTitle:
                    'Мой крайний проект',
                button:
                    'Посмотреть',
                project: [
                    {
                        id: 1,
                        title: 'WeatherApp',
                        text: 'A SPA that\'s great for helping stick to plans, achieve goals and remember nothing.',
                        link: '/weatherapp'
                    },
                ]
            },
            slogan: {
                title: 'Рассматриваю варианты удаленной работы',
                button:
                    'Найми меня'
            },
            contacts: {
                title: 'КОНТАКТЫ',
                underTitle:
                    'Связаться со мной',
                content:
                    [
                        {id: 1, title: 'Адрес:', text: 'г. Минск, ул. Янки Брыля, д. 9, кв. 176'},
                        {id: 2, title: 'E-mail:', text: 'olegyshkevich@mail.ru'}
                    ],
                tel:
                    {
                        title: 'Телефон:', number:
                            '+375-33-367-18-39'
                    },
                button: 'Отправить'
            },
            footer: {
                author: 'Олег Юшкевич',
                copywrite: '© Copyright 2021. All Rights are Reserved.',
                links: [
                    {id: 1, link: 'https://www.linkedin.com', image: linkedIn, alt: 'LinkedIn'},
                    {id: 2, link: 'https://twitter.com', image: twitter, alt: 'Twitter'},
                    {id: 3, link: 'https://www.facebook.com', image: facebook, alt: 'Facebook'},
                    {id: 4, link: 'https://github.com', image: github, alt: 'Github'}
                ]
            }
        },
        en: {
            header: [
                {id: 1, link: 'MAIN', anchor: '#aboutMe'},
                {id: 2, link: 'SKILLS', anchor: '#skills'},
                {id: 3, link: 'PROJECTS', anchor: '#projects'},
                {id: 4, link: 'CONTACTS', anchor: '#contacts'}
            ],
            main: {
                name: 'Oleg',
                lastName: 'Yshkevich',
                specialize: {
                    firstElement: `I'm a`,
                    secondElement: ['HTML/CSS specialist', 'Java Script developer', 'Front-End developer']
                }
            },
            aboutMe: {
                title: 'ABOUT ME',
                underTitle: 'Main information about me',
                photo: aboutMePhoto,
                descriptionTitle: {
                    firstElement: `I'm Oleg Yshkevich and I'm a `,
                    secondElement: ['HTML/CSS specialist', 'Java Script developer', 'Front-End developer']
                },
                descriptionText: {
                    firstPart: 'Hi! My name is ',
                    secondPart: 'Oleg Yshkevich.',
                    thirdPart: ' I am a Front-End Developer, and I\'m very passionate and ' +
                        'dedicated to my work. With little experience as a make up man, java script and front-end ' +
                        'developer, I have acquired the skills and knowledge necessary to make your project a success. ' +
                        'I enjoy every step of the design process, from discussion and collaboration to concept and ' +
                        'execution, but I find the most satisfaction in seeing the finished product in action.'
                },
                information: {
                    informationTitle1:
                        [
                            {
                                id: 1,
                                title: 'Birthday:'
                            },
                            {
                                id: 2,
                                title: 'City:'
                            },
                            {
                                id: 3,
                                title: 'Degree:'
                            }
                        ],
                    informationTitle2: [
                        {
                            id: 1,
                            title: 'Age:'
                        },
                        {
                            id: 2,
                            title: 'Interests:'
                        },
                        {
                            id: 3,
                            title: 'Study:'
                        }
                    ],
                    informationText1:
                        [
                            {
                                id: 1,
                                text: '18.05.1996'
                            },
                            {
                                id: 2,
                                text: 'Minsk, Belarus'
                            },
                            {
                                id: 3,
                                text: 'Higher'
                            }
                        ],
                    informationText2: [
                        {
                            id: 1,
                            text: '25 years'
                        },
                        {
                            id: 2,
                            text: 'Movies, cooking'
                        },
                        {
                            id: 3,
                            text: 'Academy of Public Administration'
                        }
                    ]
                },
                buttons: {
                    first: 'Download CV',
                    second:
                        'Send Message'
                }
            },
            skills: {
                title: 'SKILLS',
                skill: [
                    {id: 1, title: 'React', alt: 'react', image: react},
                    {id: 2, title: 'Redux', alt: 'redux', image: redux},
                    {id: 3, title: 'Java Script', alt: 'js', image: js},
                    {id: 4, title: 'HTML 5', alt: 'html5', image: html5},
                    {id: 5, title: 'SASS', alt: 'sass', image: sass},
                    {id: 6, title: 'JSON', alt: 'json', image: json},
                    {id: 7, title: 'GitHub', alt: 'github', image: github2},
                    {id: 8, title: 'TypeScript', alt: 'typescript', image: typescript}
                ]
            },
            projects: {
                title: 'PROJECTS',
                underTitle:
                    'My latest works',
                button:
                    'See',
                project: [
                    {
                        id: 1,
                        title: 'WeatherApp',
                        text: 'A SPA that\'s great for helping stick to plans, achieve goals and remember nothing.',
                        link: '/weatherapp'
                    },
                ]
            },
            slogan: {
                title: 'I\'m available for freelance' ,
                button:
                    'To hire me'
            },
            contacts: {
                title: 'CONTACTS',
                underTitle:
                    'Get in touch with me',
                content:
                    [
                        {id: 1, title: 'Address:', text: '9/176 Yankee Brylya, Minsk, Belarus'},
                        {id: 2, title: 'E-mail:', text: 'olegyshkevich@mail.ru'}
                    ],
                tel:
                    {
                        title: 'Phone:', number:
                            '+375-33-367-18-39'
                    },
                button: 'Send'
            },
            footer: {
                author: 'Oleg Yshkevich',
                copywrite: '© Copyright 2021. All Rights are Reserved.',
                links: [
                    {id: 1, link: 'https://www.linkedin.com', image: linkedIn, alt: 'LinkedIn'},
                    {id: 2, link: 'https://twitter.com', image: twitter, alt: 'Twitter'},
                    {id: 3, link: 'https://www.facebook.com', image: facebook, alt: 'Facebook'},
                    {id: 4, link: 'https://github.com', image: github, alt: 'Github'}
                ]
            }
        }
    }
;

export default stateReducer;

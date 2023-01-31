import React from 'react'
import styles from './Experience.module.css'

const monthDiff = (dateFrom, dateTo) => {
    let months = 1 + dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    months = months < 0 ? 12 + months : months
    let duration;
    if (months === 1) {
        duration = `${months} month.`
    } else if (months < 12) {
        duration = `${months} months.`
    } else if (months === 12) {
        duration = `1 year.`
    } else if (months % 12 === 0) {
        duration = `${months / 12} years.`
    } else if (Math.floor(months / 12) === 1) {
        duration = `1 year ${months % 12 === 1 ? `1 month` : `${months % 12} months.`}`
    } else {
        duration = `${Math.floor(months / 12)} years ${months % 12 === 1 ? `1 month` : `${months % 12} months.`}`
    }
    return duration;
}

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Experience = () => {
    const experience = [
        {
            company: 'Armath Engineering Laboratories',
            url: 'https://armath.am/',
            role: 'Student - Scratch, Arduino, C++ Developer',
            skills: ['scratch', 'arduino', 'c++'],
            duration: `${monthDiff(new Date(2020, 10), new Date(2021, 7))}`,
            period: `2020 ${monthNames[10 - 1]} - 2021 ${monthNames[7 - 1]}`
        },
        {
            company: 'Serious Web',
            url: 'https://seriousweb.org/',
            role: 'Student - Full Stack Web Developer',
            skills: ['html', 'css', 'bootstrap', 'js', 'jquery', 'ajax', 'php', 'oop', 'mysql'],
            duration: `${monthDiff(new Date(2021, 2), new Date(2021, 9))}`,
            period: `2021 ${monthNames[2 - 1]} - 2021 ${monthNames[9 - 1]}`
        },
        {
            company: 'Shellogix',
            url: 'https://shelllogix.com/',
            role: 'Intern - Front End Web Developer',
            skills: ['html', 'css', 'js', 'oop', 'react', 'figma'],
            duration: `${monthDiff(new Date(2021, 10), new Date(2021, 10))}`,
            period: `2021 ${monthNames[10 - 1]}`
        },
        {
            company: 'Global IT Company',
            url: 'https://globalitc.am/',
            role: 'Intern - Front End Web Developer (Startup)',
            skills: ['html', 'css', 'js', 'oop', 'react'],
            duration: `${monthDiff(new Date(2021, 10), new Date(2021, 1))}`,
            period: `2021 ${monthNames[10 - 1]} - 2022 ${monthNames[1 - 1]}`
        },
        {
            company: 'Serious Web',
            url: 'https://seriousweb.org/',
            role: 'Student - React JS Web Developer',
            skills: ['html', 'css', 'js', 'oop', 'react', 'ajax'],
            duration: `${monthDiff(new Date(2021, 11), new Date(2022, 1))}`,
            period: `2021 ${monthNames[11 - 1]} - 2022 ${monthNames[1 - 1]}`
        },
        {
            company: 'Mach Technologies',
            url: 'https://machtech.am/',
            role: 'Intern - Front End Web Developer',
            skills: ['html', 'css', 'scss', 'js', 'oop', 'react', 'figma'],
            duration: `${monthDiff(new Date(2022, 8), new Date(2022, 9))}`,
            period: `2022 ${monthNames[8 - 1]} - 2022 ${monthNames[9 - 1]}`
        },
        {
            company: 'Basic IT Center',
            url: 'https://www.basic.am/',
            role: 'Student - Python/Django Web Developer',
            skills: ['python', 'oop', 'django', 'sqlite'],
            duration: `${monthDiff(new Date(2022, 8), new Date(2022, 11))}`,
            period: `2022 ${monthNames[8 - 1]} - 2022 ${monthNames[11 - 1]}`
        },
        {
            company: 'SmartCode',
            url: 'https://www.smartcode.am/',
            role: 'Student - Node JS Web Developer',
            skills: ['js', 'oop', 'node', 'express'],
            duration: `${monthDiff(new Date(2023, 1), new Date(2023, 3))}`,
            period: `2023 ${monthNames[1 - 1]} - 2023 ${monthNames[3 - 1]}`
        },
    ]

    return (
        <section className={styles.experience}>
            <div className={styles.title}>
                MY WORK EXPERIENCE
            </div>
            <div className={styles.jobs}>
                {
                    experience.map((experience, index) => (
                        <a rel="noreferrer" href={experience.url} key={index} className={styles.job} target='_blank'>
                            <div className={styles.role}>
                                {experience.role}
                            </div>
                            <div className={styles.company}>
                                {experience.company}
                            </div>
                            <div className={styles.time}>
                                <div className={styles.period}>
                                    {experience.period}
                                </div>
                                <div className={styles.duration}>
                                    {experience.duration}
                                </div>
                            </div>
                            <ul className={styles.skills}>
                                {experience.skills.map((skill, index) => (
                                    <li className={styles.skill} key={index}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default Experience

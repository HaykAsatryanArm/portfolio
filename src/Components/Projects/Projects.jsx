import React from 'react'
import styles from "./Projects.module.css"

import globalitc from './../../Assets/Img/Projects/globalitc.png'
import universe from './../../Assets/Img/Projects/universe.png'
import todo from './../../Assets/Img/Projects/todo.png'
import kos from './../../Assets/Img/Projects/kos.png'
import shop from './../../Assets/Img/Projects/shop.png'
import calculator from './../../Assets/Img/Projects/calculator.png'
import clock from './../../Assets/Img/Projects/clock.png'
import gradient from './../../Assets/Img/Projects/gradient.png'
import image from './../../Assets/Img/Projects/image.png'
import ticTacToe from './../../Assets/Img/Projects/tic-tac-toe.png'
import fruitNinja from './../../Assets/Img/Projects/fruit-ninja.png'
import monkey from './../../Assets/Img/Projects/monkey.png'

const Projects = () => {

    const projects = [
        {
            demo: 'https://www.globalitc.am/',
            image: globalitc,
            with: 'Global IT Center Team',
            url: 'https://www.globalitc.am/',
            languages: ['html', 'css', 'js', 'react'],
            role: 'Intern (Startuper)',
            for: 'Project'
        },
        {
            repo: 'https://github.com/HaykAsatryanArm/universe',
            image: universe,
            with: 'Basic IT Center Team',
            url: 'https://www.basic.am/hy/home',
            languages: ['python', 'django', 'sqlite'],
            role: 'Student',
            for: 'Final Project'
        },
        {
            demo: 'https://haykasatryanarm.github.io/todo/',
            repo: 'https://github.com/HaykAsatryanArm/todo',
            image: todo,
            with: 'Mamble Labs',
            url: 'https://mamble.com/',
            languages: ['html', 'css', 'scss', 'js', 'react'],
            role: 'Applicant',
            for: 'Joining Intership'
        },
        {
            demo: 'https://haykasatryanarm.github.io/kos/',
            repo: 'https://github.com/HaykAsatryanArm/kos',
            image: kos,
            with: 'Mach Technologies Team',
            url: 'https://machtech.am/',
            languages: ['html', 'css', 'scss', 'js', 'react'],
            role: 'Intern',
            for: 'Joining Intership'
        },
        {
            demo: 'https://haykasatryanarm.github.io/shop/',
            repo: 'https://github.com/HaykAsatryanArm/shop',
            image: shop,
            with: 'Myself',
            url: '/',
            languages: ['html', 'css', 'scss', 'js', 'react'],
            role: 'Developer',
            for: 'Portfolio'
        },
        {
            demo: 'https://hayk-asatryan-calculator.netlify.app',
            repo: 'https://github.com/HaykAsatryanArm/calculator',
            image: calculator,
            with: 'Myself',
            url: '/',
            languages: ['html', 'css', 'js'],
            role: 'Developer',
            for: 'Portfolio'
        },
        {
            demo: 'https://hayk-asatryan-clock.netlify.app/',
            repo: 'https://github.com/HaykAsatryanArm/clock',
            image: clock,
            with: 'Myself',
            url: '/',
            languages: ['html', 'css', 'js'],
            role: 'Developer',
            for: 'Portfolio'
        },
        {
            demo: 'https://hayk-asatryan-color-generator.netlify.app',
            repo: 'https://github.com/HaykAsatryanArm/color-generator',
            image: gradient,
            with: 'Myself',
            url: '/',
            languages: ['html', 'css', 'js'],
            role: 'Developer',
            for: 'Portfolio'
        },
        {
            demo: 'https://hayk-asatryan-image-by-url.netlify.app',
            repo: 'https://github.com/HaykAsatryanArm/image-by-url',
            image: image,
            with: 'Myself',
            url: '/',
            languages: ['html', 'css', 'js'],
            role: 'Developer',
            for: 'Portfolio'
        },
        {
            demo: 'https://hayk-asatryan-tic-tac-toe.netlify.app',
            repo: 'https://github.com/HaykAsatryanArm/tic-tac-toe',
            image: ticTacToe,
            with: 'Serious Web Team',
            url: 'https://seriousweb.org/',
            languages: ['html', 'css', 'js'],
            role: 'Student',
            for: 'Project'
        },
        {
            demo: 'https://hayk-asatryan-fruit-ninja.netlify.app',
            repo: 'https://github.com/HaykAsatryanArm/fruit-ninja',
            image: fruitNinja,
            with: 'Serious Web Team',
            url: 'https://seriousweb.org/',
            languages: ['html', 'css', 'js', 'jquery'],
            role: 'Student',
            for: 'Project'
        },
        {
            demo: 'https://hayk-asatryan-monkey.netlify.app',
            repo: 'https://github.com/HaykAsatryanArm/monkey',
            image: monkey,
            with: 'Serious Web Team',
            url: 'https://seriousweb.org/',
            languages: ['html', 'css', 'js'],
            role: 'Student',
            for: 'Project'
        }
    ]

    return (
        <section className={styles.projects}>
            <div className={styles.title}>
                MY PROJECT
            </div>
            <div className={styles.container}>
                {
                    projects.map((project, index) => (
                        <div className={styles.project} key={index}>
                            <div className={styles.image}>
                                <img src={project.image} alt="" />
                            </div>
                            <div className={styles.view}>
                                {
                                    project.demo ? <a rel="noreferrer" className={styles.demo} href={project.demo} target="_blank">Demo</a> : <></>
                                }
                                {
                                    project.repo ? <a rel="noreferrer" className={styles.repo} href={project.repo} target="_blank">Repo</a> : <></>
                                }
                            </div>
                            <div className={styles.info}>
                                <div className={styles.company}>
                                    <a href={project.url}>{project.with}</a>
                                </div>
                                <div className={styles.role}>
                                    {project.role}
                                </div>
                            </div>
                            <div className={styles.for}>
                                For {project.for}
                            </div>
                            <ul className={styles.skills}>
                                {
                                    project.languages.map((lanuage, index) => (
                                        <li className={styles.skill} key={index}>{lanuage}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects

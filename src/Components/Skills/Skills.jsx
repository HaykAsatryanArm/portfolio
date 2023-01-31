import React from 'react'
import styles from './Skills.module.css'

import html from './../../Assets/Img/Skills/html.png'
import css from './../../Assets/Img/Skills/css.png'
import scss from './../../Assets/Img/Skills/scss.png'
import bootstrap from './../../Assets/Img/Skills/bootstrap.png'
import js from './../../Assets/Img/Skills/js.png'
import react from './../../Assets/Img/Skills/react.png'
import python from './../../Assets/Img/Skills/python.png'
import django from './../../Assets/Img/Skills/django.png'
import node from './../../Assets/Img/Skills/node.png'
import mysql from './../../Assets/Img/Skills/mysql.png'
import cpp from './../../Assets/Img/Skills/cpp.png'
import figma from './../../Assets/Img/Skills/figma.png'
import xd from './../../Assets/Img/Skills/xd.png'

const Skills = () => {
    const skills = [
        {
            name: 'html',
            icon: html,
            color: '#e65100'
        },
        {
            name: 'css',
            icon: css,
            color: '#0277bd'
        },
        {
            name: 'scss',
            icon: scss,
            color: '#ef6292'
        },
        {
            name: 'bootstrap',
            icon: bootstrap,
            color: '#673ab7'
        },
        {
            name: 'js',
            icon: js,
            color: '#ffd600'
        },
        {
            name: 'react',
            icon: react,
            color: '#80deea'
        },
        {
            name: 'python',
            icon: python,
            color: '#80deea'
        },
        {
            name: 'django',
            icon: django,
            color: '#004c40'
        },
        {
            name: 'node',
            icon: node,
            color: '#4caf50'
        },
        {
            name: 'mysql',
            icon: mysql,
            color: '#5734aa'
        },
        {
            name: 'cpp',
            icon: cpp,
            color: '#00549d'
        },
        {
            name: 'figma',
            icon: figma,
            color: '#6CA199'
        },
        {
            name: 'xd',
            icon: xd,
            color: '#fb40c5'
        }
    ]

    return (
        <section className={styles.skills}>
            <div className={styles.title}>
                MY SKILLS
            </div>
            <div className={styles.container}>
                {
                    skills.map((skill, index) => (
                        <div className={styles.skill} key={index}>
                            <div className={styles.logo}>
                                <img src={skill.icon} alt="" />
                            </div>
                            <div className={styles.name}>
                                {skill.name}
                            </div>
                            <div className={styles.circle} style={{background: skill.color}}></div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills

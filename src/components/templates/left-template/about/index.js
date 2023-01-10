import React from 'react';
import Tab from '../../../ui/tabs';
import SectionHeader from '../../../ui/section-header';

import arrow from '../../../../assets/svg/arrow.svg';
import inbox from '../../../../assets/svg/inbox.svg';
import './style.css'

import { sectionHeaderLabel, aboutMe } from '../../../../languagepack'


export default function About() {
    const {about} = sectionHeaderLabel
  return (
    <section id="about">
        <div className="container">
            <div className="roww">
                <SectionHeader
                    subTitle={about.subTitle}
                    title={about.title}
                />
                <div className="resumo_fn_about_info">
                    <div className="about_left">
                        <table>
                            {Object.keys(aboutMe).map((value) => (
                                <tr>
                                    <th>{value}</th>
                                    <th>{value === "email" ? <a href="mailto:frenifyteam@gmail.com">{aboutMe[value]}</a>: `${aboutMe[value]}`}</th>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div className="about_right">
                        <div className="resumo_fn_cv_btn">
                            <a href="img/cv.jpg" download>
                                <span className="icon">
                                    <img src={inbox} alt="" className="fn__svg" />
                                    <img src={arrow} alt="" className="fn__svg arrow" />
                                </span>
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Tab/>
            </div>
        </div>
    </section>
  )
}

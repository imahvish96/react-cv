import React, { useState } from 'react';
import HorizonCard from '../card/horizon-card';
import { tabData } from '../../../config';
import { experience, education} from '../../../languagepack';
import { COMING_SOON } from '../../../constants';
import SkillCard from './../skill-card/index';

import "./style.css"

import { 
    FaJsSquare,
    FaHtml5,
    FaSass,
    FaCss3Alt,
    FaReact,
    FaPython,
    FaNodeJs,
    FaBootstrap,
    FaAngular,
    FaGitAlt,
    FaVuejs,
    FaNpm
} from 'react-icons/fa';
import {
    SiRedux,
    SiTypescript,
    SiExpress,
    SiFlask,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiJest,
    SiWebpack,
    SiMaterialui
} from 'react-icons/si';

const icons = {
    html: FaHtml5,
    css: FaCss3Alt,
    sass: FaSass,
    javascript: FaJsSquare,
    typescript: SiTypescript,
    bootstrap: FaBootstrap,
    materialUi: SiMaterialui,
    tailwindcss: SiTailwindcss,
    react: FaReact,
    angular: FaAngular,
    vue: FaVuejs,
    redux: SiRedux,
    node: FaNodeJs,
    express: SiExpress,
    python: FaPython,
    flask: SiFlask,
    mongodb: SiMongodb,
    mysql: SiMysql,
    jest: SiJest,
    webpack: SiWebpack,
    npm: FaNpm,
    git: FaGitAlt
}


export default function Tab() {
    const [currentTab, setCurrentTab] = useState(tabData);

    const activeTab = (e, tab) => {
        e.preventDefault();
        const copyTab = [...currentTab]
        copyTab.forEach(item => {
            console.log(tab);
            if (item._id === tab) {
                item.activeTab = true;
                item.currentTab = true
            } else {
                console.log('else ', tab);
                item.activeTab = false
                item.currentTab = false
            }
        })
        setCurrentTab([...copyTab]);
    }

    const dynemicVar = (key) => {
        if (key === 'Experience') return experience
        return education
    }

    return (
        <React.Fragment>
            <div class="resumo_fn_tabs">
                <div class="tab_header">
                    <ul>
                        {currentTab.map((tab, i) => {
                            return (
                                <li className={tab.activeTab && 'active'} onClick={(e) => activeTab(e, tab._id)}>
                                    <a href="#tab1">{tab.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div class="tab_content">
                    {currentTab.map((_, i) => {
                        return (
                        <div id={`tab${i}`} className={currentTab[i].currentTab ? 'tab_item  active' : 'tab_item '}>
                            <div class="resumo_fn_boxed_list">
                                {_.title === 'Skills' ? (
                                    <React.Fragment>
                                        <div class="icon-container">
                                            {Object.keys(icons).map(icon => {
                                                return <SkillCard icon={icons[icon]} value={icon} size="5rem"/>
                                            })}
                                            
                                        </div>
                                    </React.Fragment>
                                ) : (
                                        <ul>
                                            {dynemicVar(_.title).map((exp) => (
                                                <HorizonCard 
                                                    subTitle={exp.subTitle}
                                                    start={exp.start}
                                                    end={exp.end}
                                                    title={exp.title}
                                                    berief={exp.berief}
                                                />
                                            ))}
                                        </ul>
                                    )}
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

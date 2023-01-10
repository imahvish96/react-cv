import React from 'react';
import styles from './style.module.css';

export default function WorkCard({ project}) {
    return (
        <>
            <div className={styles.card}>
                <img src={project.image} alt="" />
                <div className={styles.content}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.cta}>
                        {project.source_code && (
                            <a
                                href={project.source_code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Source Code
                            </a>
                        )}
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline}
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

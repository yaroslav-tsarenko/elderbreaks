import React, { ReactNode } from 'react';
import styles from "./Description.module.scss";

interface SubDescription {
    title: string;
    content?: string;
    list?: any;
}

interface DescriptionProps {
    title: string;
    description: string;
    subDescriptions?: SubDescription[];
    children?: ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ title, description, subDescriptions, children }) => {
    const renderList = (list: any) => {
        if (Array.isArray(list)) {
            return (
                <ul>
                    {list.map((item, index) => (
                        <li className={styles.listItem} key={index}>{item}</li>
                    ))}
                </ul>
            );
        }
        if (typeof list === 'object' && list.ordered) {
            return (
                <ol>
                    {list.items.map((item: string, index: string) => (
                        <li className={styles.listItem} key={index}>{item}</li>
                    ))}
                </ol>
            );
        }
        return null;
    };

    return (
        <div className={styles.descriptionWrapper}>
            <h1>{title}</h1>
            <p>{description}</p>
            {subDescriptions && subDescriptions.map((sub, index) => (
                <div key={index} className={styles.subDescription}>
                    <h2>{sub.title}</h2>
                    {sub.content && <p>{sub.content}</p>}
                    {sub.list && renderList(sub.list)}
                </div>
            ))}
            {children && <div className={styles.childrenWrapper}>{children}</div>}
        </div>
    );
};

export default Description;
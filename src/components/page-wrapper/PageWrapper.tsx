import React, {FC} from 'react';
import styles from "./PageWrapper.module.scss"
import {PageWrapperProps} from "@/types/pageWrapper";

const PageWrapper: FC<PageWrapperProps> = ({children}) => {
    return (
        <div className={styles.pageWrapper}>
            {children}
        </div>
    );
};

export default PageWrapper;
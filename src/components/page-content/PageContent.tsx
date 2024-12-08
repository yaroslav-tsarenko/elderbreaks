import React, {FC} from 'react';
import styles from "./PageContent.module.scss"
import { PageContentProps } from "@/types/pageContent";

const PageContent:FC<PageContentProps> = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};

export default PageContent;
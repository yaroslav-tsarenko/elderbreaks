import React, {FC} from 'react';
import styles from './Grid.module.scss';
import { GridProps } from '@/types/grid';

const Grid:FC<GridProps> = ({ children, columns = '0, 0' }) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${columns})`
    };

    return (
        <div className={styles.gridTwoColumns} style={gridStyle}>
            {children}
        </div>
    );
};

export default Grid;
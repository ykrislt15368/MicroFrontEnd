import React, { ReactNode } from "react";
import styles from '@/styles/Home.module.css'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Card = ({ children }: Props) => (
    <>
        <div className={`${styles.common} ${styles.flex_child}`}>
            {`Child1 Card Component ${children}`}
        </div>
    </>
);

export default Card;
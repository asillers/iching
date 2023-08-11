import styles from "../styles/utils.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
//function HomePage(){
//    const [contentSet] = React.useState()
//}

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <Link href="homescreen/">
                        <div className="namePlate md:text-5xl">J. Arthur</div>
                    </Link>
                </div>
            </div>

            <div>
                <ul className={styles.navLinks}>
                    <Link href="homescreen">Back</Link>
                </ul>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
//function HomePage(){
//    const [contentSet] = React.useState()
//}

export default function Coverletter() {
    return (
        <div>
            <div className="flex text-center justify-center mt-[100px]">
                <div className="w-3/5">
                    <div className="coverLetter">
                        My name is J. Arthur Sillers. I am a uniquely talented
                        and swiftly emerging media worker, creative, writer,
                        musician, multimedia artist, thinker, tinkerer,
                        explorer, and doer. My skills are extensive, and I am a
                        wonderful fit to any corporate culture, project, team,
                        crew, shoot, firm, agency, or any otherwise unmentioned
                        source of employment.
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";
import React, { useState, useEffect } from "react";

export default function Timer({dataTheme}: {dataTheme: string}) {

    function nowToTeacherDay() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const teacherDayThisYear = new Date(currentYear, 8, 28); // September 28th
        if (now > teacherDayThisYear) {
            return new Date(currentYear + 1, 8, 28);
        }
        return teacherDayThisYear;
    }

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        function updateCountdown() {
            const now = new Date();
            const target = nowToTeacherDay();
            const diff = target.getTime() - now.getTime();

            if (diff <= 0) {
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                return;
            }

            const totalSeconds = Math.floor(diff / 1000);
            const d = Math.floor(totalSeconds / (3600 * 24));
            const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        }

        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

  return (
    <div datat-theme={dataTheme} className="grid grid-flow-col gap-5 text-center auto-cols-max text-primary-content">
        <div className="flex flex-col">
            <span className="countdown font-mono text-2xl sm:text-5xl">
                <span style={{ "--value": days } as React.CSSProperties} aria-live="polite">{days}</span>
            </span>
            days
        </div>
        <div className="flex flex-col">
            <span className="countdown font-mono text-2xl sm:text-5xl">
                <span style={{ "--value": hours } as React.CSSProperties} aria-live="polite">{hours}</span>
            </span>
            hours
        </div>
        <div className="flex flex-col">
            <span className="countdown font-mono text-2xl sm:text-5xl">
                <span style={{ "--value": minutes } as React.CSSProperties} aria-live="polite">{minutes}</span>
            </span>
            min
        </div>
        <div className="flex flex-col">
            <span className="countdown font-mono text-2xl sm:text-5xl">
                <span style={{ "--value": seconds } as React.CSSProperties} aria-live="polite">{seconds}</span>
            </span>
            sec
        </div>
    </div>
  );
}
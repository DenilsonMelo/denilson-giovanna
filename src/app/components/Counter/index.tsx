"use client";

import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Counter() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate: Date = new Date("2024-01-17T22:00:00");

    const targetGMT = 0;

    const startDateInGMT = new Date(
      startDate.getTime() + targetGMT * 60 * 60 * 1000
    );

    const calculateTimeElapsed = () => {
      const now = new Date();

      let currentDate = new Date(startDateInGMT);
      let years = 0, months = 0, days = 0;

      // Calcular anos
      while (currentDate <= now) {
        const nextYear = new Date(currentDate);
        nextYear.setFullYear(currentDate.getFullYear() + 1);
        if (nextYear <= now) {
          years++;
          currentDate = nextYear;
        } else {
          break;
        }
      }

      // Calcular meses
      while (currentDate <= now) {
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(currentDate.getMonth() + 1);
        if (nextMonth <= now) {
          months++;
          currentDate = nextMonth;
        } else {
          break;
        }
      }

      // Calcular dias
      while (currentDate <= now) {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        if (nextDay <= now) {
          days++;
          currentDate = nextDay;
        } else {
          break;
        }
      }

      // Calcular horas, minutos e segundos restantes
      const difference = now.getTime() - currentDate.getTime();
      const hours = Math.floor(difference / (60 * 60 * 1000));
      const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((difference % (60 * 1000)) / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container>
        <div style={{ fontSize: "1rem" }}>
          <span>Juntos a</span>
          <p>
            {timeElapsed.years} anos, {timeElapsed.months} meses,{" "}
            {timeElapsed.days} dias
          </p>
          <p>
            {timeElapsed.hours} horas, {timeElapsed.minutes} minutos,{" "}
            {timeElapsed.seconds} segundos
          </p>
        </div>
      </Container>
    </div>
  );
}

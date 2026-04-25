import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  MONTHS, DAYS,
  getDaysInMonth, getFirstDayOfMonth,
  sameDay, stripTime,
} from "./DateRangeTypes";

export interface MiniCalendarProps {
  label: string;
  selected?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;
  minDate?: Date;
  maxDate?: Date;
  onSelect: (d: Date) => void;
}

export default function MiniCalendar({
  label, selected, rangeStart, rangeEnd, minDate, maxDate, onSelect,
}: MiniCalendarProps) {
  const today = stripTime(new Date());
  const [cursor, setCursor] = useState(() => {
    const base = selected ?? today;
    return { year: base.getFullYear(), month: base.getMonth() };
  });

  const daysInMonth = getDaysInMonth(cursor.year, cursor.month);
  const firstDay = getFirstDayOfMonth(cursor.year, cursor.month);

  const prevMonth = () =>
    setCursor((c) => {
      const d = new Date(c.year, c.month - 1, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });

  const nextMonth = () =>
    setCursor((c) => {
      const d = new Date(c.year, c.month + 1, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <Box sx={{ width: 220 }}>
      <Typography sx={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#99D6DE", mb: 0.5, fontFamily: "'DM Mono', monospace" }}>
        {label}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.75 }}>
        <IconButton size="small" onClick={prevMonth} sx={{ color: "#99D6DE", p: 0.25 }}>
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ color: "white", fontSize: "0.78rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>
          {MONTHS[cursor.month]} {cursor.year}
        </Typography>
        <IconButton size="small" onClick={nextMonth} sx={{ color: "#99D6DE", p: 0.25 }}>
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", mb: 0.25 }}>
        {DAYS.map((d) => (
          <Typography key={d} sx={{ textAlign: "center", fontSize: "0.6rem", color: "rgba(153,214,222,0.6)", fontFamily: "'DM Mono', monospace", pb: 0.25 }}>
            {d}
          </Typography>
        ))}
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
        {cells.map((day, idx) => {
          if (!day) return <Box key={idx} />;
          const date = stripTime(new Date(cursor.year, cursor.month, day));
          const isSelected = selected && sameDay(date, selected);
          const isToday = sameDay(date, today);
          const inRange = rangeStart && rangeEnd && date >= rangeStart && date <= rangeEnd;
          const isRangeEdge = (rangeStart && sameDay(date, rangeStart)) || (rangeEnd && sameDay(date, rangeEnd));
          const disabled = (minDate && date < minDate) || (maxDate && date > maxDate);

          return (
            <Box
              key={idx}
              onClick={() => !disabled && onSelect(date)}
              sx={{
                textAlign: "center", borderRadius: "4px", py: "3px",
                fontSize: "0.72rem", fontFamily: "'DM Mono', monospace",
                cursor: disabled ? "not-allowed" : "pointer",
                color: disabled ? "rgba(255,255,255,0.2)" : isSelected || isRangeEdge ? "#0a1a1c" : inRange ? "white" : "rgba(255,255,255,0.8)",
                background: isSelected || isRangeEdge ? "#99D6DE" : inRange ? "rgba(153,214,222,0.2)" : "transparent",
                fontWeight: isToday ? 700 : 400,
                outline: isToday && !isSelected ? "1px solid rgba(153,214,222,0.4)" : "none",
                transition: "background 0.15s, color 0.15s",
                "&:hover": disabled ? {} : {
                  background: isSelected || isRangeEdge ? "#b8e8ef" : "rgba(153,214,222,0.25)",
                  color: isSelected || isRangeEdge ? "#0a1a1c" : "white",
                },
              }}
            >
              {day}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
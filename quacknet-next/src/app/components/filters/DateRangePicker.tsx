import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MiniCalendar from "./MiniCalendar";
import { DateRange, formatDate } from "./DateRangeTypes";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface DateRangePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

export default function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  const { begin, end } = value;
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlayPos, setOverlayPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  // ── Close on outside click ───────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  // ── Position overlay ABOVE the trigger using fixed coords ───────────────
  useEffect(() => {
    if (open && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // We don't know the overlay height yet, so anchor to rect.top and
      // translate upward via CSS transform instead of calculating height.
      setOverlayPos({
        top: rect.top,   // viewport-relative; transform handles the upward shift
        left: rect.left,
      });
    }
  }, [open]);

  const handleBeginSelect = (d: Date) => {
    onChange({ begin: d, end: end && d > end ? undefined : end });
  };

  const handleEndSelect = (d: Date) => {
    if (begin && d < begin) {
      onChange({ begin: d, end: begin });
    } else {
      onChange({ begin, end: d });
    }
  };

  const hasRange = begin || end;

  return (
    <>
      {/* ── Trigger button ── */}
      <Box
        ref={containerRef}
        onClick={() => setOpen((o) => !o)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 0.5,
          ml: 1,
          px: 1.5,
          py: 0.75,
          borderRadius: "6px",
          border: open ? "1px solid #99D6DE" : "1px solid rgba(153,214,222,0.35)",
          background: open ? "rgba(153,214,222,0.15)" : "rgba(153,214,222,0.07)",
          cursor: "pointer",
          transition: "all 0.15s ease",
          userSelect: "none",
          "&:hover": {
            background: "rgba(153,214,222,0.15)",
            border: "1px solid #99D6DE",
          },
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: "0.95rem", color: "#99D6DE" }} />
        <Typography
          sx={{
            fontSize: "0.72rem",
            color: hasRange ? "#99D6DE" : "rgba(153,214,222,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          {hasRange ? `${formatDate(begin)} → ${formatDate(end)}` : "Select date range"}
        </Typography>
      </Box>

      {/* ── Floating overlay — fixed so it never affects page layout ── */}
      {open && (
        <Box
          ref={overlayRef}
          sx={{
            position: "fixed",           // ← key change: viewport-relative, zero layout impact
            top: overlayPos.top,
            left: overlayPos.left,
            transform: "translateY(-100%) translateY(-8px)", // ← shifts box fully above trigger
            zIndex: 1400,
            p: 2,
            borderRadius: "10px",
            border: "1px solid rgba(153,214,222,0.45)",
            background: "rgba(10, 26, 30, 0.97)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            animation: "fadeSlideIn 0.18s ease",
            "@keyframes fadeSlideIn": {
              from: { opacity: 0, transform: "translateY(-100%) translateY(-2px)" },
              to: { opacity: 1, transform: "translateY(-100%) translateY(-8px)" },
            },
          }}
        >
          {/* Range summary */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1,
              py: 0.5,
              borderRadius: "6px",
              background: "rgba(153,214,222,0.1)",
              border: "1px solid rgba(153,214,222,0.2)",
            }}
          >
            <Typography sx={{ fontSize: "0.7rem", color: begin ? "#99D6DE" : "rgba(153,214,222,0.35)", flex: 1, textAlign: "center" }}>
              {formatDate(begin)}
            </Typography>
            <Typography sx={{ color: "rgba(153,214,222,0.4)", fontSize: "0.65rem" }}>→</Typography>
            <Typography sx={{ fontSize: "0.7rem", color: end ? "#99D6DE" : "rgba(153,214,222,0.35)", flex: 1, textAlign: "center" }}>
              {formatDate(end)}
            </Typography>
          </Box>

          {/* Calendars */}
          <MiniCalendar label="From" selected={begin} rangeStart={begin} rangeEnd={end} maxDate={end} onSelect={handleBeginSelect} />
          <Box sx={{ borderTop: "1px solid rgba(153,214,222,0.2)" }} />
          <MiniCalendar label="To" selected={end} rangeStart={begin} rangeEnd={end} minDate={begin} onSelect={handleEndSelect} />

          {/* Done button */}
          <Box
            onClick={() => setOpen(false)}
            sx={{
              textAlign: "center",
              py: 0.6,
              borderRadius: "6px",
              background: "rgba(153,214,222,0.12)",
              border: "1px solid rgba(153,214,222,0.3)",
              cursor: "pointer",
              transition: "all 0.15s",
              "&:hover": { background: "rgba(153,214,222,0.22)", border: "1px solid #99D6DE" },
            }}
          >
            <Typography sx={{ fontSize: "0.7rem", color: "#99D6DE", letterSpacing: "0.08em" }}>
              Done
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useCallback } from "react";
import {Genre} from '@/types/genres'
import { Filter } from '@/types/game_filter_interface';

const localTheme = createTheme( {
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#99D6DE',
          '&.Mui-checked': { color: '#99D6DE' },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#99D6DE',
          '&.Mui-checked': { color: '#99D6DE' },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#FFF',
          fontWeight: 'bold',
        },
      },
    },
  },
});


interface FilterOptionsProps {
  /** Called whenever any filter control changes. Receives the assembled Filter. */
  onFilterChange: (filter: Filter) => void;
  /** Optional controlled date range (used when "Released Between" is selected). */
  dateRange?: { begin?: Date; end?: Date };
}


export default function FilterOptions({ onFilterChange, dateRange }: FilterOptionsProps) {
  const [alignment, setAlignment] = useState<string | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<Set<Genre>>(new Set());
  const [selectedDateOptions, setSelectedDateOptions] = useState<Set<DateOption>>(new Set());

  // ── Fetch available genres once ────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      const fetched: Genre[] = await (await fetch("/api/genres")).json();
      setGenres(fetched);
    })();
  }, []);


    //handles unclicking of radio buttons
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clicked = (e.target as HTMLInputElement).value;
    if (clicked === alignment) {
        setAlignment(null);  // deselects if clicking the already-selected option
    }
    };

      // ── Build + emit Filter whenever any piece of state changes ───────────────
  const buildAndEmitFilter = useCallback(
    (
      currentAlignment: string | null,
      currentGenres: Set<Genre>,
      currentDateOptions: Set<DateOption>,
    ) => {
      const filter: Filter = {};

      // ── Player type ──────────────────────────────────────────────────────
      if (currentAlignment === "single") filter.single_player = true;
      if (currentAlignment === "multi") filter.multiplayer = true;
      if (currentAlignment === "online") filter.online_multiplayer = true;

      // ── Genres ───────────────────────────────────────────────────────────
      if (currentGenres.size > 0) {
        filter.genres = Array.from(currentGenres);
      }

      // ── Date options ─────────────────────────────────────────────────────
      const now = new Date();

      if (currentDateOptions.has("past_month")) {
        filter.date_begin = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        filter.date_end = now;
      } else if (currentDateOptions.has("past_year")) {
        filter.date_begin = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        filter.date_end = now;
      } else if (currentDateOptions.has("between") && dateRange) {
        // Caller supplies explicit date range when "Released Between" is checked
        if (dateRange.begin) filter.date_begin = dateRange.begin;
        if (dateRange.end) filter.date_end = dateRange.end;
      }

      onFilterChange(filter);
    },
    [onFilterChange, dateRange],
  );

  // ── Player alignment ───────────────────────────────────────────────────────
  const handleAlignmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setAlignment(next);
    buildAndEmitFilter(next, selectedGenres, selectedDateOptions);
  };

  const handleAlignmentClick = (e: React.MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLInputElement).value;
    if (clicked && clicked === alignment) {
      // Deselect on second click
      setAlignment(null);
      buildAndEmitFilter(null, selectedGenres, selectedDateOptions);
    }
  };

  // ── Genre checkboxes ───────────────────────────────────────────────────────
  const handleGenreChange = (genre: Genre, checked: boolean) => {
    setSelectedGenres((prev) => {
      const next = new Set(prev);
      checked ? next.add(genre) : next.delete(genre);
      buildAndEmitFilter(alignment, next, selectedDateOptions);
      return next;
    });
  };

  // ── Date option checkboxes ─────────────────────────────────────────────────
  const handleDateOptionChange = (option: DateOption, checked: boolean) => {
    setSelectedDateOptions((prev) => {
      const next = new Set(prev);
      if (checked) {
        // "Past Month" and "Past Year" are mutually exclusive presets;
        // "Released Between" can coexist with neither preset at the same time.
        if (option === "past_month" || option === "past_year") {
          next.delete("past_month");
          next.delete("past_year");
          next.delete("between");
        } else if (option === "between") {
          next.delete("past_month");
          next.delete("past_year");
        }
        next.add(option);
      } else {
        next.delete(option);
      }
      buildAndEmitFilter(alignment, selectedGenres, next);
      return next;
    });
  };

  
  return (
    <ThemeProvider theme={localTheme}>
      <Box
        sx={{
          background: "rgba(153, 214, 222, 0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 2,
          border: "1px solid #99D6DE",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "white" }}>
          Filter
        </Typography>

        {/* ── Players ── */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "white" }}>
          Players
        </Typography>
        <RadioGroup
          value={alignment ?? ""}
          onChange={handleAlignmentChange}
          onClick={handleAlignmentClick}
          sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
        >
          <FormControlLabel value="single" control={<Radio />} label="Single Player" />
          <FormControlLabel value="multi" control={<Radio />} label="Multi Player" />
          <FormControlLabel value="online" control={<Radio />} label="Online" />
        </RadioGroup>

        {/* ── Genres ── */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "white" }}>
          Genres
        </Typography>
        <FormGroup>
          {genres.map((genre) => (
            <FormControlLabel
              key={genre.genre_name}
              control={
                <Checkbox
                  checked={selectedGenres.has(genre)}
                  onChange={(e) => handleGenreChange(genre, e.target.checked)}
                />
              }
              label={genre.genre_name}
            />
          ))}
        </FormGroup>

        {/* ── Release Date ── */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "white" }}>
          Release Date
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedDateOptions.has("between")}
                onChange={(e) => handleDateOptionChange("between", e.target.checked)}
              />
            }
            label="Released Between"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedDateOptions.has("past_month")}
                onChange={(e) => handleDateOptionChange("past_month", e.target.checked)}
              />
            }
            label="Past Month"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedDateOptions.has("past_year")}
                onChange={(e) => handleDateOptionChange("past_year", e.target.checked)}
              />
            }
            label="Past Year"
          />
        </FormGroup>
      </Box>
    </ThemeProvider>

  );
}
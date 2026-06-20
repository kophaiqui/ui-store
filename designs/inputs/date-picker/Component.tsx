"use client";
import { useState, useEffect } from "react";
import { Popover } from "@base-ui/react/popover";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { DatePickerStyleConfig } from "./styles/default";

export type { DatePickerStyleConfig };

type Props = {
  styleConfig?: DatePickerStyleConfig;
  value?: Date | Date[] | null;
  defaultValue?: Date | Date[] | null;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  placeholder?: string;
  format?: (date: Date, locale: string) => string;
  locale?: string;
  range?: boolean;
  multiple?: boolean;
  label?: string;
  description?: string;
  error?: string;
  onChange?: (value: Date | Date[] | null) => void;
  className?: string;
};

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isToday(d: Date) {
  return isSameDay(d, new Date());
}

function CalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="1.5" y="2.5" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 1v3M11 1v3M1.5 6.5h13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M7.5 2.5L4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function defaultFormat(d: Date, locale: string) {
  return d.toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" });
}

export function UIDatePicker({
  styleConfig = defaultStyle,
  value,
  defaultValue,
  minDate,
  maxDate,
  disabled = false,
  placeholder = "Pick a date",
  format = defaultFormat,
  locale = "en-US",
  range = false,
  multiple = false,
  label,
  description,
  error,
  onChange,
  className,
}: Props) {
  const today = new Date();
  const initValue = value !== undefined ? value : (defaultValue ?? null);

  const [selected, setSelected] = useState<Date | Date[] | null>(initValue);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [navYear, setNavYear] = useState(today.getFullYear());
  const [navMonth, setNavMonth] = useState(today.getMonth());

  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  const formatDisplay = () => {
    if (!selected) return null;
    if (Array.isArray(selected)) {
      if (selected.length === 0) return null;
      if (range && selected.length === 2) return `${format(selected[0], locale)} – ${format(selected[1], locale)}`;
      return selected.map((d) => format(d, locale)).join(", ");
    }
    return format(selected, locale);
  };

  const isSelected = (d: Date) => {
    if (!selected) return false;
    if (Array.isArray(selected)) return selected.some((s) => isSameDay(s, d));
    return isSameDay(selected, d);
  };

  const isRangeMiddle = (d: Date) => {
    if (!range || !Array.isArray(selected) || selected.length !== 2) return false;
    const [start, end] = selected;
    return d > start && d < end;
  };

  const isRangeStart = (d: Date) => {
    if (!range || !Array.isArray(selected) || selected.length < 1) return false;
    return isSameDay(selected[0], d);
  };

  const isRangeEnd = (d: Date) => {
    if (!range || !Array.isArray(selected) || selected.length !== 2) return false;
    return isSameDay(selected[1], d);
  };

  const isDisabled = (d: Date) => {
    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  };

  const handleDayClick = (d: Date) => {
    if (isDisabled(d)) return;

    let next: Date | Date[] | null;

    if (range) {
      if (!rangeStart) {
        setRangeStart(d);
        next = [d];
      } else {
        const sorted = d < rangeStart ? [d, rangeStart] : [rangeStart, d];
        next = sorted;
        setRangeStart(null);
      }
    } else if (multiple) {
      const arr = Array.isArray(selected) ? selected : selected ? [selected] : [];
      const exists = arr.findIndex((s) => isSameDay(s, d));
      next = exists >= 0 ? arr.filter((_, i) => i !== exists) : [...arr, d];
    } else {
      next = d;
    }

    setSelected(next);
    onChange?.(next);
  };

  const prevMonth = () => {
    if (navMonth === 0) { setNavMonth(11); setNavYear(y => y - 1); }
    else setNavMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (navMonth === 11) { setNavMonth(0); setNavYear(y => y + 1); }
    else setNavMonth(m => m + 1);
  };

  const daysInMonth = getDaysInMonth(navYear, navMonth);
  const firstDay = getFirstDayOfMonth(navYear, navMonth);
  const prevMonthDays = getDaysInMonth(navYear, navMonth === 0 ? 11 : navMonth - 1);

  const cells: { date: Date; outside: boolean }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = prevMonthDays - i;
    const m = navMonth === 0 ? 11 : navMonth - 1;
    const y = navMonth === 0 ? navYear - 1 : navYear;
    cells.push({ date: new Date(y, m, day), outside: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(navYear, navMonth, d), outside: false });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    const m = navMonth === 11 ? 0 : navMonth + 1;
    const y = navMonth === 11 ? navYear + 1 : navYear;
    cells.push({ date: new Date(y, m, d), outside: true });
  }

  const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const displayText = formatDisplay();

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && <span className={styleConfig.label}>{label}</span>}
          {description && <span className={styleConfig.description}>{description}</span>}
        </div>
      )}
      <Popover.Root>
        <Popover.Trigger
          disabled={disabled}
          className={cn(styleConfig.trigger, error && "border-red-500 focus:ring-red-500/40")}
          aria-label={placeholder}
        >
          <CalIcon />
          <span className={displayText ? "text-foreground" : "text-muted-foreground"}>
            {displayText ?? placeholder}
          </span>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner sideOffset={6}>
            <Popover.Popup className={styleConfig.popup}>
              <div className={styleConfig.header}>
                <button type="button" onClick={prevMonth} className={styleConfig.navBtn} aria-label="Previous month">
                  <ChevronLeft />
                </button>
                <span className={styleConfig.monthYear}>{MONTH_NAMES[navMonth]} {navYear}</span>
                <button type="button" onClick={nextMonth} className={styleConfig.navBtn} aria-label="Next month">
                  <ChevronRight />
                </button>
              </div>
              <div className={styleConfig.weekdays}>
                {WEEKDAYS.map((w) => (
                  <span key={w} className={styleConfig.weekday}>{w}</span>
                ))}
              </div>
              <div className={styleConfig.grid}>
                {cells.map(({ date, outside }, i) => {
                  const sel = isSelected(date);
                  const start = isRangeStart(date);
                  const end = isRangeEnd(date);
                  const mid = isRangeMiddle(date);
                  const dis = isDisabled(date);
                  const tod = isToday(date);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleDayClick(date)}
                      disabled={dis}
                      aria-label={format(date, locale)}
                      aria-pressed={sel}
                      className={cn(
                        styleConfig.day,
                        outside && styleConfig.dayOutsideMonth,
                        tod && !sel && styleConfig.dayToday,
                        dis && styleConfig.dayDisabled,
                        sel && !range && styleConfig.daySelected,
                        start && styleConfig.rangeStart,
                        end && styleConfig.rangeEnd,
                        mid && styleConfig.rangeMiddle,
                      )}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
      {error && <p className={styleConfig.error} role="alert">{error}</p>}
    </div>
  );
}

export { UIDatePicker as default };

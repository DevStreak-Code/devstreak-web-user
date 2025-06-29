import { CalendarIcon } from "lucide-react";
import {
  Button,
  DatePicker,
  Dialog,
  Group,
  Popover,
} from "react-aria-components";
import { Calendar } from "@/components/ui/calendar-rac";
import { DateInput } from "@/components/ui/datefield-rac";
import { CalendarDate } from "@internationalized/date";

interface ICustomDatePickerProps {
  label: string;
  value?: Date | null; // ✅ accept native Date
  onChange?: (value: Date | null) => void;
  onBlur?: () => void;
  error?: string;
  name?: string;
}

function dateToCalendarDate(date: Date | null): CalendarDate | null {
  if (!date) return null;
  return new CalendarDate(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate()
  );
}

function calendarDateToUTCDate(cal: CalendarDate | null): Date | null {
  if (!cal) return null;
  return new Date(Date.UTC(cal.year, cal.month - 1, cal.day));
}

const CustomDatePicker: React.FC<ICustomDatePickerProps> = ({
  label,
  value,
  onChange,
  onBlur,
  error,
  name,
}) => {
  const calendarValue = dateToCalendarDate(value ?? null);

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="text-foreground text-sm font-medium">
          {label}
        </label>
      )}
      <DatePicker
        className="*:not-first:mt-2"
        value={calendarValue ?? undefined}
        onChange={(val) => {
          onChange?.(calendarDateToUTCDate(val as CalendarDate));
          onBlur?.(); // mark touched
        }}
        name={name}
        id={name}
      >
        <div className="flex">
          <Group className="w-full">
            <DateInput className="pe-9" />
          </Group>
          <Button className="text-muted-foreground/80 hover:text-foreground z-10 -ms-9 -me-px flex w-9 items-center justify-center rounded-e-md">
            <CalendarIcon size={16} />
          </Button>
        </div>
        <Popover
          className="z-50 rounded-lg border shadow-lg  bg-white"
          offset={4}
        >
          <Dialog className="max-h-[inherit] overflow-auto p-2">
            <Calendar />
          </Dialog>
        </Popover>
      </DatePicker>
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomDatePicker;

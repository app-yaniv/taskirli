'use client'

import { useState } from 'react'
import { Calendar as CalendarIcon, Users } from 'lucide-react'
import { DateRange } from 'react-day-picker'
import { addDays, format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface BookingCardProps {
  pricePerNight: number
  rating: number
  totalReviews: number
  cleaningFee: number
  serviceFee: number
}

export default function BookingCard({
  pricePerNight,
  rating,
  totalReviews,
  cleaningFee,
  serviceFee,
}: BookingCardProps) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  })

  const numberOfNights = date?.to && date?.from
    ? Math.ceil(
        (date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24)
      )
    : 0

  const subtotal = pricePerNight * numberOfNights
  const total = subtotal + cleaningFee + serviceFee

  return (
    <div className="border rounded-xl p-6 shadow-lg sticky top-24">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xl font-semibold">${pricePerNight}</span>
          <span className="text-gray-500"> night</span>
        </div>
        <div className="text-sm">
          <span>★ {rating}</span>
          <span className="text-gray-500"> · {totalReviews} reviews</span>
        </div>
      </div>

      <div className="border rounded-lg mb-4">
        <div className="grid grid-cols-2 border-b">
          <Popover>
            <PopoverTrigger asChild>
              <button className="p-3 text-left border-r hover:bg-gray-50">
                <div className="text-xs font-semibold">CHECK-IN</div>
                <div>
                  {date?.from ? format(date.from, 'MMM d, yyyy') : 'Add date'}
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <button className="p-3 text-left hover:bg-gray-50">
                <div className="text-xs font-semibold">CHECKOUT</div>
                <div>
                  {date?.to ? format(date.to, 'MMM d, yyyy') : 'Add date'}
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="p-3">
          <div className="text-xs font-semibold">GUESTS</div>
          <Select
            value={String(guests.adults + guests.children)}
            onValueChange={(value: string) =>
              setGuests({ ...guests, adults: parseInt(value) })
            }
          >
            <SelectTrigger className="w-full border-0 p-0 h-auto">
              <SelectValue placeholder="Add guests" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num} guest{num > 1 ? 's' : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <button className="w-full bg-[#FF385C] text-white py-3 rounded-lg font-semibold mb-4">
        Reserve
      </button>

      <div className="text-center text-gray-500 mb-6">
        You won't be charged yet
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="underline">
            ${pricePerNight} × {numberOfNights} nights
          </div>
          <div>${subtotal}</div>
        </div>
        <div className="flex justify-between">
          <div className="underline">Cleaning fee</div>
          <div>${cleaningFee}</div>
        </div>
        <div className="flex justify-between">
          <div className="underline">Service fee</div>
          <div>${serviceFee}</div>
        </div>
        <div className="flex justify-between pt-4 border-t font-semibold">
          <div>Total</div>
          <div>${total}</div>
        </div>
      </div>
    </div>
  )
} 
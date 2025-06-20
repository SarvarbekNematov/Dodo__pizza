"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { handleSignOut } from "@/actions/auth";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  useEffect(() => {
    // localStorage yoki boshqa joydan user ma'lumotlarini olish
    const userInfo = JSON.parse(localStorage.getItem("user_info") || "{}");
    if (userInfo) {
      setName(userInfo.name || "");
      setNumber(userInfo.number || "");
      setBirthday(userInfo.birthday || "");
    }
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_info");
      await handleSignOut();
      router.push("/");
    } catch (error) {
      alert("Chiqishda xatolik: " + error);
    }
  };

  const [form, setForm] = useState({
    username: '',
    birthday: '',
    phoneNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const userData = {
      name: name,
      phoneNumber: number,
      birthday: date?.toISOString().split('T')[0] || ''
    };

    try {
      const res = await fetch('https://logto.com/api/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(userData)
      });

      if (res.ok) {
        alert('Ma\'lumotlar muvaffaqiyatli saqlandi!');
        // Local storage ni yangilash
        localStorage.setItem('user_info', JSON.stringify(userData));
      } else {
        throw new Error('Ma\'lumotlarni saqlashda xatolik yuz berdi');
      }
    } catch (error) {
      alert('Xatolik: ' + error);
    }
  };

  return (
    <div className="mt-10 p-6 bg-white rounded">
      <h2 className="text-2xl font-bold mb-6">Personal data</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
        <div>
          <label htmlFor="name">Name</label>
          <Input 
            id="name" 
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="md:w-[400px]" 
          />
        </div>
        <div>
          <label htmlFor="phone">Cell phone</label>
          <Input 
            id="phone" 
            name="phoneNumber"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="md:w-[400px]" 
          />
        </div>
        <div>
          <label className="block" htmlFor="date">Birthday</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar 
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date)
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Button
            type="submit">Save</Button>
        </div>
      </form>
      <button
        onClick={handleLogout}
        className="p-[20px] mt-6 bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Log out
      </button>
    </div>
  );
};

export default ProfilePage; 
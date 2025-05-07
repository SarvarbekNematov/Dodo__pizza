'use client'

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "@/api";

import "./head.css";

interface extraClass {
  extraclass: boolean;
}

const Login = ({ extraclass }: extraClass) => {
  const queryClient = useQueryClient();

  const [otp, setOtp] = useState("");

  const validateNumericInput = (input: string) => {
    return /^\d*$/.test(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Enter",
    ];

    if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleOTPChange = (newValue: string) => {
    if (validateNumericInput(newValue)) {
      setOtp(newValue);
    }
  };

  const postItem = async (newItem: any) => {
    const response = await request.post(`bot`, newItem, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: postItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(otp);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          asChild
          className="border-1 px-[12px] py-[4px] rounded-[12px]"
        >
          <Button className={`${extraclass && "desctop__login"}`}>
            Log in
          </Button>
        </DialogTrigger>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-center">Kodni Kiriting</DialogTitle>
            <DialogDescription className="text-[#101010d0] leading-[18px] text-center">
              <a
                className="text-black underline text-[16px]"
                href="https://t.me/dodaPizzaBot"
              >
                Dodo_pizza_bot
              </a>{" "}
              telegram botiga kiring va 1 daqiqalik kodingizni kiriting
            </DialogDescription>
          </DialogHeader>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={handleOTPChange} // O'zgartirilgan: handleOTPChange ishlatiladi
                  onKeyDown={handleKeyDown} // KeyDown hodisasini ushlash uchun
                >
                  <InputOTPGroup className="flex gap-[10px]">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        inputMode="numeric"
                        className="rounded-[10px] h-[50px]"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="grid grid-cols-1 justify-center items-center gap-[10px] pt-[15px]">
                <h4 className="text-center">Kodni to'g'ri kiriting</h4>
                <Button type="submit">Yuborish</Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;

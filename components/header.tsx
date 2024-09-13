"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" border-b">
      <div className="container flex">
        <Button
          className="items-center font-bold text-lg"
          asChild
          variant={"ghost"}>
          <Link href="/">高橋商店</Link>
        </Button>
        <span className="flex-1"></span>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size={"icon"} variant={"ghost"}>
              <Phone />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>お問い合わせ</DialogTitle>
            <DialogDescription>
              こちらからお問い合わせください。
            </DialogDescription>
            <div>
              <p>電話番号</p>
              <Link
                href="tel:090-1234-5678"
                className="hover:underline hover:text-blue-500">
                090-1234-5678
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

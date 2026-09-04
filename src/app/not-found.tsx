import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] pt-36 pb-20 flex items-center justify-center bg-slate-50">
      <Container className="text-center space-y-6">
        <div className="font-heading text-8xl font-extrabold text-blue-800">
          404
        </div>
        <h1 className="font-heading text-3xl font-bold uppercase tracking-tight text-slate-900">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-slate-600 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div>
          <Button href="/" variant="primary" size="md">
            Kembali ke Beranda
          </Button>
        </div>
      </Container>
    </div>
  );
}

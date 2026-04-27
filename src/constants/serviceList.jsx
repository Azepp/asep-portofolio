import fadeUpVariants from "../animations/fadeUpVariants";
import slideLeftVariants from "../animations/slideLeftVariants";
import slideRightVariants from "../animations/slideRightVariants";
import { FaRegCircleCheck } from "react-icons/fa6";

const serviceList = [
  {
    title: "Starter",
    price: "Rp 1.000.000",
    description: (
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> 1 Halaman Panjang (Landing Page)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Desain Responsif (Mobile & Desktop)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Gratis Domain (.com)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Hosting 1 Tahun
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> 1 Email Bisnis (xxx@bisnis.com)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> 1 GB Penyimpanan
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Gratis SSL (Keamanan Standar)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Revisi Gratis 2x
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Garansi Maintenance 15 hari
        </li>
      </ul>
    ),
    animation: slideLeftVariants,
  },
  {
    title: "Business",
    bestSeller: true,
    price: "Rp 1.800.000",
    description: (
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Hingga 5 Halaman Website
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Desain Responsif (Mobile & Desktop)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Gratis Domain (.com)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Hosting 1 tahun
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> 2 Email Bisnis (xxx@bisnis.com)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> 10 GB Penyimpanan
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Gratis SSL (Keamanan Standar)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> SEO Dasar (Optimasi Mesin Pencari)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Revisi Gratis 5x
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Garansi Maintenance 30 hari
        </li>
      </ul>
    ),
    animation: fadeUpVariants,
  },
  {
    title: "Next Level",
    price: "Rp 4.500.000",
    description: (
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Hingga 8 Halaman Website
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Desain Responsif (Mobile & Desktop)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Desain Interaktif (Animasi & Transisi)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Integrasi Media Sosial
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Optimasi Kecepatan Website
        </li>

        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Gratis Domain (.com)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Hosting 1 tahun
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> 2 Email Bisnis (xxx@bisnis.com)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> 10 GB Penyimpanan
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Gratis SSL (Keamanan Standar)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> SEO Dasar (Optimasi Mesin Pencari)
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Revisi Gratis 7x
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Garansi Maintenance 45 hari
        </li>
      </ul>
    ),
    animation: slideRightVariants,
  },
];

export default serviceList;

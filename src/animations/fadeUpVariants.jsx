// Variants untuk animasi fade up
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30, // Mulai 30px dari bawah
  },
  visible: {
    opacity: 1,
    y: 0, // Kembali ke posisi normal
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default fadeUpVariants;

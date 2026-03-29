// Variants untuk button
const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9, // Mulai dengan ukuran 90%
  },
  visible: {
    opacity: 1,
    scale: 1, // Ukuran normal
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.02, // Membesar 5% saat hover
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 1, // Kembali normal saat di-tap
  },
};

export default buttonVariants;

// Variants untuk animasi wave emoji
const waveVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [0, 20, -10, 20, 0], // Sequence rotasi untuk efek wave
    transition: {
      duration: 1.5,
      delay: 1, // Delay 1s setelah visible
      ease: "easeInOut",
    },
  },
};

export default waveVariants;

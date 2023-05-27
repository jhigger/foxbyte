import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(false);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute z-50 flex h-screen w-screen items-center justify-center bg-black"
          key={"loader"}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="text-white"
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 180, 360],
              transition: {
                duration: 2,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Logo
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

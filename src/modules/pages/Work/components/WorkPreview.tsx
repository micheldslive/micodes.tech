'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { useWorkStore } from '../store/work';

export const WorkPreview = () => {
  const { activeImage } = useWorkStore();
  return (
    <div className="relative mr-6 hidden w-1/2 md:block">
      <div className="absolute h-full w-full overflow-hidden rounded-tr-[48px]">
        <AnimatePresence mode="wait">
          {activeImage && (
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute h-full w-full overflow-hidden rounded-tr-[48px]"
            >
              <div className="relative h-full w-full">
                <Image
                  alt={`Cover of the project`}
                  src={activeImage}
                  decoding="async"
                  unoptimized
                  fill
                  className="h-full w-full rounded-tr-[48px] object-cover object-center"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

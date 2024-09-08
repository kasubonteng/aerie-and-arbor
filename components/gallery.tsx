import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  image: string;
  video: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/img-1.jpg", video: "/video-1.mp4" },
  { id: 2, image: "/img-2.jpg", video: "/video-2.mp4" },
  { id: 3, image: "/img-3.jpg", video: "/video-3.mp4" },
  { id: 4, image: "/img-4.jpg", video: "/video-4.mp4" },
  { id: 5, image: "/img-5.jpg", video: "/video-1.mp4" },
  { id: 6, image: "/img-6.jpg", video: "/video-1.mp4" },
  { id: 1, image: "/img-1.jpg", video: "/video-1.mp4" },
  { id: 2, image: "/img-2.jpg", video: "/video-2.mp4" },
];

interface GalleryItemProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto space-y-4 p-4">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="font-geist-mono text-xs sm:text-base"
      >
        Check out some of our work (click to expand!)
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {galleryItems.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <GalleryItem item={item} onClick={handleItemClick} />
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={!!selectedItem} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="relative">
            {selectedItem && (
              <video
                src={selectedItem.video}
                autoPlay
                controls
                className="h-auto w-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;

const GalleryItem: React.FC<GalleryItemProps> = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden"
      // whileHover={{ scale: 1.05 }}
      // transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(item)}
    >
      {isHovered ? (
        <video
          src={item.video}
          autoPlay
          muted
          loop
          className="h-[800px] w-[500px] object-cover md:h-[500px]"
        />
      ) : (
        <Image
          src={item.image}
          alt={`Gallery item ${item.id}`}
          className="h-[500px] w-[500px] object-cover"
          width={500}
          height={800}
        />
      )}
    </motion.div>
  );
};
